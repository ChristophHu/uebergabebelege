import { Component, EventEmitter, Input, Output } from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { SettingsComponent } from '../../../shared/components/settings/settings.component'
import { IconsComponent } from '@christophhu/ngx-icons'

/**
 * Sidebar component.
 */
@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [
    CommonModule,
    IconsComponent,
    RouterLink,
    RouterLinkActive,
    SettingsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass',
  animations: [
    trigger('fadeInRight', [
      state('void', style({ opacity: 0, transform: 'translate3d(100%, 0, 0)' })),
      state('*', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
      transition('void => false', []),
      transition('void => *', animate('200ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOutRight', [
      state('*', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
      state('void', style({ opacity: 0, transform: 'translate3d(100%, 0, 0)' })),
      transition('false => void', []),
      transition('* => void', animate('100ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeInLeft', [
      state('void', style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)' })),
      state('*', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
      transition('void => false', []),
      transition('void => *', animate('200ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ]),
    trigger('fadeOutLeft', [
      state('*', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
      state('void', style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)' })),
      transition('false => void', []),
      transition('* => void', animate('100ms cubic-bezier(0.0, 0.0, 0.2, 1)'))
    ])
  ]
})
export class SidebarComponent {
  /**
   * The sidebar handler.
   * @default 'Menu'
   */
  sidebarHandler: string = 'Menu'
  /**
   * The sidebar debug.
   * @default false
   */
  debug: boolean = false
  // id: string | null = null

  /**
   * The sidebar is opened.
   * @param value The sidebar is opened.
   */
  @Input() set isOpened(value: boolean) {
    if (!value) this.sidebarHandler = 'Menu'
  }
  /**
   * The sidebar is opened.
   * @type {EventEmitter<boolean>}
   */
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter()

  /**
   * Constructor used to determine if the body contains the class debug.
   */
  constructor() {
    document.body.classList.contains('debug') ? this.debug = true : this.debug = false
  }

  /**
   * Toggle the sidebar.
   */
  toggleSidebar() {
    this.sidebarHandler = this.sidebarHandler === 'Menu' ? 'Einstellungen' : 'Menu'
    document.body.classList.contains('debug') ? this.debug = true : this.debug = false
  }

  /**
   * Close the sidebar.
   */
  close() {
    this.isOpen.emit(false)
  }
}