import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AvatarModule } from 'primeng/avatar';
import { LayoutService } from '../layout.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [BreadcrumbModule, AvatarModule, ButtonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  constructor(
    private layoutService: LayoutService,
    public el: ElementRef,
  ) {}
  ngOnInit() {
    this.items = [{ label: 'Computer' }, { label: 'Notebook' }];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  toggleSidebar() {
    this.layoutService.toggle();
  }
}
