import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../../bien.model';
import {UtilService} from '../../util.service';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {
  @Input() bien: Bien;
  constructor(private utilService: UtilService) { }
  ngOnInit(): void {
  }

}
