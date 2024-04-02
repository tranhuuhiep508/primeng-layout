import {
  Component,
  effect,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { ILayout, LayoutService } from './layouts/layout.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    TopbarComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Angular-Draft';
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  @ViewChild(TopbarComponent) topbar!: TopbarComponent;
  constructor(
    private layoutService: LayoutService,
    private renderer: Renderer2,
  ) {
    effect(() => {
      console.log(`The current state is: ${JSON.stringify(this.sidebarState)}`);
    });
  }

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (
        !this.sidebar.el.nativeElement.contains(event.target) &&
        !this.topbar.el.nativeElement.contains(event.target)
      ) {
        this.sideBarState = {
          mobileLayout: false,
        };
      }
    });
  }

  get sidebarState() {
    return this.layoutService.sidebarState();
  }

  set sideBarState(sideBarState: Partial<ILayout>) {
    this.layoutService.sidebarState.update((prev) => {
      return {
        ...prev,
        ...sideBarState,
      };
    });
  }

  getClassContainer() {
    return {
      'desktop-layout': this.sidebarState.desktopLayout,
      'mobile-layout': this.sidebarState.mobileLayout,
    };
  }
}
