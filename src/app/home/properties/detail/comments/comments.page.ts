import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../../../services/properties.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  constructor(
    private _propService: PropertiesService
  ) { }

  ngOnInit() {
  }

}
