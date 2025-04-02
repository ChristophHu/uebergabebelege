import { Component } from '@angular/core';
// import { DebugModeComponent } from '../debug-mode/debug-mode.component';
import { ThemesComponent } from '../themes/themes.component';
import { DarkModeToggleComponent } from '../../../../../../ngx-dark-mode-toggle/src/lib/components/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    DarkModeToggleComponent,
    // DebugModeComponent,
    ThemesComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.sass'
})
export class SettingsComponent {
  constructor() {

  }
}
