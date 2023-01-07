// @flow

export default class EnNavigationEvents {
  _bridge: Object;

  constructor(bridge: Object) {
    this._bridge = bridge;
  }

  addNavEventEventListener(eventListener: Function): string {
    return this._bridge.registerEventListener(
      'com.ernnavigation.ern.api.event.navEvent',
      eventListener,
    );
  }

  addOnNavButtonClickEventListener(eventListener: Function): string {
    return this._bridge.registerEventListener(
      'com.ernnavigation.ern.api.event.onNavButtonClick',
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
    return this._bridge.emitEvent('com.ernnavigation.ern.api.event.navEvent', {
      data: eventData,
    });
  }

  emitOnNavButtonClick(buttonId: string): void {
    return this._bridge.emitEvent('com.ernnavigation.ern.api.event.onNavButtonClick', {
      data: buttonId,
    });
  }
}
