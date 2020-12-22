import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../bien.model';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  @Input() bien: Bien;

  constructor() { }
  ngOnInit(): void {
  }
  getJour(difference: any){
    return Math.ceil(difference / (1000 * 3600 * 24));

  }

}
