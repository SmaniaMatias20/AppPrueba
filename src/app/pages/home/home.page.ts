import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Auth } from 'src/app/services/auth/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule],
})
export class HomePage {
  constructor(private auth: Auth) { }

  onLogout() {
    this.auth.logout();
  }
}
