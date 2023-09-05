// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PerfOptionDictionary } from "../../src/index.js";
import { EventPerfTest } from "../../src/eventPerfTest.js";
import { MockEventReceiver, Event } from "./mockEventReceiver.js";

export class MockEventReceiverTest extends EventPerfTest {
  public client: MockEventReceiver;
  public options: PerfOptionDictionary = {};
  public subscriber: { close: () => Promise<void> } | undefined;

  constructor() {
    super();
    this.client = new MockEventReceiver();
  }

  setup() {
    this.subscriber = this.client.subscribe(
      {
        processEvent: async (_event: Event) => {
          // { event: event }
          this.eventRaised();
        },
        processError: async (error: Error) => {
          this.errorRaised(error);
        },
      },
      { raiseErrorAfterInSeconds: 10 }
    );
  }

  async cleanup() {
    this.subscriber && (await this.subscriber.close());
  }
}
