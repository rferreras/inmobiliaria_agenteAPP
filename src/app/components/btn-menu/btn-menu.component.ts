import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.scss'],
})
export class BtnMenuComponent implements OnInit {
  @Input() title: string
  @Input() icon: string

  constructor() { }

  ngOnInit() {}

}
