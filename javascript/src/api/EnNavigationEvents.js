// @flow

export default class EnNavigationEvents {
  constructor(bridge) {
    this._bridge = bridge;
  }

  addNavEventEventListener(eventListener: Function): string {
    return this._bridge.registerEventListener(
      'com.ernnavigationapi.ern.api.event.navEvent',
      eventListener,
    );
  }

  addOnNavButtonClickEventListener(eventListener: Function): string {
    return this._bridge.registerEventListener(
      'com.ernnavigationapi.ern.api.event.onNavButtonClick',
      eventListener,
    );
  }

  removeNavEventEventListener(uuid: string): any {
    return this._bridge.removeEventListener(uuid);
  }

  removeOnNavButtonClickEventListener(uuid: string): any {
    return this._bridge.removeEventListener(uuid);
  }

  emitNavEvent(eventData: any): void {
    return this._bridge.emitEvent('com.ernnavigationapi.ern.api.event.navEvent', {
      data: eventData,
    });
  }

  emitOnNavButtonClick(buttonId: string): void {
    return this._bridge.emitEvent('com.ernnavigationapi.ern.api.event.onNavButtonClick', {
      data: buttonId,
    });
  }
}
