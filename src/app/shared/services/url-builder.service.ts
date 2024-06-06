import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlBuilderService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  buildUrlWithQueryParams(path: string, queryParams: any): void {
    const filteredQueryParams = Object.fromEntries(
      Object.entries(queryParams).filter(
        ([key, value]) => value !== undefined && value !== null && value !== ''
      )
    );

    const urlTree: UrlTree = this.router.createUrlTree([path], {
      queryParams: filteredQueryParams,
    });

    const url = this.router.serializeUrl(urlTree);
    this.router.navigateByUrl(url);
  }

  getQueryParamsAsObject(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.route.queryParams.subscribe({
        next: (params) => {
          resolve(params);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  clearUrlQueryParams(): void {
    this.router.navigateByUrl(this.router.url.split('?')[0]);
  }
}
