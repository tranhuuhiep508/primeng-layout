import { Injectable, signal } from '@angular/core';
import { isEqual } from 'lodash';

export interface ILayout {
  desktopLayout: boolean;
  mobileLayout: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  sidebarState = signal<ILayout>(
    {
      mobileLayout: false,
      desktopLayout: false,
    },
    { equal: isEqual },
  );
  toggle() {
    if (window.innerWidth > 991) {
      this.sidebarState.set({
        mobileLayout: false,
        desktopLayout: !this.sidebarState().desktopLayout,
      });
      return;
    }
    this.sidebarState.set({
      mobileLayout: !this.sidebarState().mobileLayout,
      desktopLayout: false,
    });
  }
}
