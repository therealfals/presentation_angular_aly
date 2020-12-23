import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  recherche: string = '';
  @Output() searching = new EventEmitter();

  ngOnInit(): void {
  }
  searchThis(){
    this.searching.emit(this.recherche);
  }

}
