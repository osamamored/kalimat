import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class KalimatReuseStrategy implements RouteReuseStrategy {

    private handlers: { [key: string]: DetachedRouteHandle } = {};

    constructor() {

    }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
      return !route.url.length;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers['talks'] = handle;
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !route.url.length && !!this.handlers['talks'];

    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.handlers['talks'];
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }

}
