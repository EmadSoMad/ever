import { Injectable } from '@angular/core';
import {
	Router,
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot
} from '@angular/router';
import { Store } from './services/store';

@Injectable()
export class AppModuleGuard implements CanActivate {
	constructor(private readonly router: Router, private store: Store) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		const maintenanceMode = this.store.maintenanceMode;
		if (maintenanceMode) {
			this.router.navigate(['maintenance-info']);
			return false;
		}
		return true;
	}
}
