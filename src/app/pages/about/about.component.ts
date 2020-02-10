import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, SimpleChanges
} from '@angular/core';
import {AboutHandler} from './about.handler';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
// tslint:disable-next-line:max-line-length
export class AboutComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'about';

  constructor(public handler: AboutHandler) { }

  public ngOnInit() {
    console.log('run ngOnInit!');
    this.handler.init();
  }

  ngAfterContentChecked(): void {
    console.log('run ngAfterContentChecked!');
  }

  ngAfterContentInit(): void {
    console.log('run ngAfterContentInit!');
  }

  ngAfterViewInit(): void {
    console.log('run ngAfterViewInit!');
  }

  ngDoCheck(): void {
    console.log('run ngDoCheck!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('run ngOnChanges!', changes);
  }

  ngAfterViewChecked(): void {
    console.log('run ngAfterViewChecked!');
  }

  ngOnDestroy(): void {
    console.log('run ngOnDestroy!');
  }

}
