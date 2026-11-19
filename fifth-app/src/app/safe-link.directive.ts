import { Directive, input } from '@angular/core';


@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host:{
    '(click)':'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  queryParam=input('myapp');
  constructor() {
    console.log('Safelinkdirecive is active !');
  }
  onConfirmLeavePage(event:MouseEvent){
    const wantToLeave=window.confirm('want to leavs ?')
    if(wantToLeave){
      const address=(event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href=`${address}?from=${this.queryParam()}`;
      return;
    }
    event.preventDefault();
  }
}
