// @flow
export default class EnNavigationEvents {
    constructor(bridge) {
        this._bridge = bridge;
    }

            addOnNavButtonClickEventListener( eventListener: Function): string {
            return   this._bridge.registerEventListener("com.ernnavigationApi.ern.api.event.onNavButtonClick", eventListener);
            }

            removeOnNavButtonClickEventListener( uuid: string): any {
            return   this._bridge.removeEventListener(uuid);
            }

//------------------------------------------------------------------------------------------------------------------------------------

            emitOnNavButtonClick(buttonId: string): void {
                    return this._bridge.emitEvent("com.ernnavigationApi.ern.api.event.onNavButtonClick", { data:buttonId });


            }
}
