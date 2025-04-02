import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IconsComponent } from '@christophhu/ngx-icons'
// import { Store } from '@ngrx/store';
// import { bootFeature } from '../../../modules/landing/boot/store/boot/boot.reducer';
import { Observable, Subscription } from 'rxjs';
// import { Schiff } from '../../models/schiff.model';
import { AsyncPipe, CommonModule } from '@angular/common';
// import { Streife } from '../../models/streife.model';
// import { NotificationService } from '../../../shared/components/notifications/services/notification.service';
import { environment } from '../../../../environments/environment';
// import { OfflineService } from '../../services/offline/offline.service';
// import { AuthAdfsService } from '../../../modules/auth-adfs/services/auth-adfs.service';

@Component({
  selector: 'topnav',
  standalone: true,
  imports: [
    CommonModule,
    // IconsComponent,
    // AsyncPipe
  ],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.sass'
})
export class TopnavComponent {
  isOffline: boolean = false
  isTest: boolean = false
  // store = inject(Store)
  notificationShown: boolean = false;
  // schiff$: Observable<Schiff | null> = this.store.select(bootFeature.selectSchiff)
  // streife$: Observable<Streife | null> = this.store.select(bootFeature.selectStreife)
  isLoggedIn = false;
  private authSubscription!: Subscription;

  constructor(
    // private _notificationService : NotificationService,
    private _cdr: ChangeDetectorRef,
    // private _offlineService: OfflineService,
    // private _authAdfsService: AuthAdfsService
  ) { 
    // this.authSubscription = this._authAdfsService.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
    //   console.log("isLoggedIn for TopnavComponent", isLoggedIn)
    //   this.isLoggedIn = isLoggedIn;
    // })
  }
  
  ngOnInit() {
    if(environment.name == 'test')
      this.isTest = true

    document.addEventListener('offline', () => {
      this.isOffline = true;
      // this._offlineService.isOffline = true;
      
      console.log("Bordbuch offline. isOffline: ", this.isOffline)
      if (!this.notificationShown) {
        // this._notificationService.open({ type: 'error', header: 'Kein Internet', message: 'Es besteht keine Internetverbindung.', autoClose: true })?.pipe().subscribe((data: any) => {
        //     console.log("Bordbuch offline. isOffline: ", data)
        // })
        this.notificationShown = true;
      }

      this._cdr.detectChanges()
    });

    document.addEventListener('online', () => {
      this.isOffline = false;
      // this._offlineService.isOffline = false;
      console.log("Bordbuch online. isOffline: ", this.isOffline)
      // this._notificationService.clear();
      this.notificationShown = false;
      this._cdr.detectChanges()
    });
  }
}
