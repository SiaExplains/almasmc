import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-trailer-box',
  templateUrl: './trailer-box.component.html',
  styleUrls: ['./trailer-box.component.css']
})
export class TrailerBoxComponent implements OnInit {

  @Input() labelName: string;
  @Input() image: string;
  @Input() height: number;
  @Input() backgroundColor: string;
  @Input() linkTo: string;

  constructor() { }

  ngOnInit() {
  }

  url() {
    return `url(${this.image})`;
    // string interpiloation
   // return 'url(' + this.image + ')';
  }


}
