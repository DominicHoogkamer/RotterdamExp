import { ProfilePage } from './../profile/profile';
import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IntroPage;
  tab2Root = ContactPage;
  tab3Root = ProfilePage;

  constructor() {
    
  }
}
