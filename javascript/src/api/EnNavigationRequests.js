// @flow

export default class EnNavigationRequests {
  constructor(bridge) {
    this._bridge = bridge;
  }

  /**
   * Registers a handler for a particular api. This allows JavaScript to handle a request from native.
   * @param handler The handler function, taking a single parameter being the data of the request and returning a Promise. Implementer of the handler should either resolve the promise with an object being the response data (if any) or reject the promise with an Error
   */
  registerBackRequestHandler(handler: Function): Promise<any> {
    this._bridge.registerRequestHandler(
      'com.ernnavigationapi.ern.api.request.back',
      handler,
    );
  }

  /**
   * Registers a handler for a particular api. This allows JavaScript to handle a request from native.
   * @param handler The handler function, taking a single parameter being the data of the request and returning a Promise. Implementer of the handler should either resolve the promise with an object being the response data (if any) or reject the promise with an Error
   */
  registerFinishRequestHandler(handler: Function): Promise<any> {
    this._bridge.registerRequestHandler(
      'com.ernnavigationapi.ern.api.request.finish',
      handler,
    );
  }

  /**
   * Registers a handler for a particular api. This allows JavaScript to handle a request from native.
   * @param handler The handler function, taking a single parameter being the data of the request and returning a Promise. Implementer of the handler should either resolve the promise with an object being the response data (if any) or reject the promise with an Error
   */
  registerNavigateRequestHandler(handler: Function): Promise<any> {
    this._bridge.registerRequestHandler(
      'com.ernnavigationapi.ern.api.request.navigate',
      handler,
    );
  }

  /**
   * Registers a handler for a particular api. This allows JavaScript to handle a request from native.
   * @param handler The handler function, taking a single parameter being the data of the request and returning a Promise. Implementer of the handler should either resolve the promise with an object being the response data (if any) or reject the promise with an Error
   */
  registerUpdateRequestHandler(handler: Function): Promise<any> {
    this._bridge.registerRequestHandler(
      'com.ernnavigationapi.ern.api.request.update',
      handler,
    );
  }

  /**
   * @param  route Route object that details where to navigate next. Use this when you want to go back to a previous screen, it could be any previous screen in a given flow. If the given route is not found on the stack, native layer may push a new screen on top.
   * @param timeout timeout in milliseconds
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  back(route: any, timeout: number): Promise<any> {
    return this._bridge.sendRequest('com.ernnavigationapi.ern.api.request.back', {
      data: route,
      timeout,
    });
  }

  /**
   * @param {Object} opts Optional parameters
   * @param opts.finalPayload Optional json string payload to pass when a flow is completed. Use this to pass in any info needed by the RN view host on the native side
   * @param timeout timeout in milliseconds
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  finish(opts: any, timeout: number): Promise<any> {
    return this._bridge.sendRequest('com.ernnavigationapi.ern.api.request.finish', {
      data: opts,
      timeout,
    });
  }

  /**
   * @param  route Route object that details where to navigate next
   * @param timeout timeout in milliseconds
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  navigate(route: any, timeout: number): Promise<any> {
    return this._bridge.sendRequest('com.ernnavigationapi.ern.api.request.navigate', {
      data: route,
      timeout,
    });
  }

  /**
   * @param  updatedRoute Updated route object. This API expectes that the path of the update call is unchanged from the last navigate call. It is likely that the native implementation will reject your update call if the path is different from the last navigate call.
   * @param timeout timeout in milliseconds
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  update(updatedRoute: any, timeout: number): Promise<any> {
    return this._bridge.sendRequest('com.ernnavigationapi.ern.api.request.update', {
      data: updatedRoute,
      timeout,
    });
  }
}
