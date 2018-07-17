import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { IdentityService } from '@shared/osharp/services/identity.service';

@Component({
  selector: 'layout-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  constructor(
    public identity: IdentityService,
    public settings: SettingsService
  ) { }
}
