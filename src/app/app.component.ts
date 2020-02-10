import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { routes } from './config/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  public routes: Routes = routes;
}
