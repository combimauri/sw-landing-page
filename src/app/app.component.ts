import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'sw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(_ => {
      $('.parallax').parallax();
    });
  }
}
