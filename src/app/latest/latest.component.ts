import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class LatestComponent implements OnInit {

  @Input() articles: any;
  @Output() onTitleChange = new EventEmitter<string>();

  subtitle = 'subtitle';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(title: string) {
    this.onTitleChange.emit(title);
  }
}
