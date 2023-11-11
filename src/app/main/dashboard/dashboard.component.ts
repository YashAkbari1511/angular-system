import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { ScriptService } from 'src/app/shared/services/script-loader/script.service';
declare var Plaid: any;
@Component({
	selector: 'wcg-dashboard',
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	constructor(
		private commonService: CommonService,
		private scriptService: ScriptService,
	) { }

	ngOnInit(): void {
		this.setBreadCrumb();
		// this.loadScriptExample('plaid', 'https://cdn.plaid.com/link/v2/stable/link-initialize.js', true, 'head');
	}

	/**
	 * Set breadCrumbData in CommonService
	 */
	setBreadCrumb() {
		this.commonService.breadCrumbData$.next({
			pageTitle: 'Dashboard',
			linkList: []
		});
	}

	/**
	 * Load the scrip when it is required instead of keeping it in index.html or in angular.json
	 */
	loadScriptExample(name: string, script: string, isUrl: boolean = true, loadIn: string = 'head') {
		this.scriptService.loadOnlineScript(name, script, isUrl, loadIn).then((loadStatus: any) => {
			console.log('online script ==> ', name, loadStatus, Plaid);
		});
	}
}