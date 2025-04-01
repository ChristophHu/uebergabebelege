import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

type Theme = 'light' | 'dark'

@Component({
  selector: 'dark-mode-toggle',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.sass']
})
export class DarkModeToggleComponent {
  theme: Theme = 'light'
  body: any

  constructor() {
    this.body = document.body
    this.theme = this.body.dataset['theme'] || localStorage['theme'] || 'light'    
  }

  toggleTheme() {
    this.theme == 'dark' ? this.theme = 'light' : this.theme = 'dark'

    switch (true) {
      case this.theme == 'dark':
        localStorage['theme'] = "dark"
        break
      case this.theme == 'light':
        localStorage['theme'] = "light"
        break
    }
    this.body.dataset['theme'] = localStorage['theme']
  }
}