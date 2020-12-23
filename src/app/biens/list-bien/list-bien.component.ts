import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../bien.model';
import {BiensService} from '../biens.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

   @Input() searchs: string = '';
  biens: Bien[];
  constructor(private bienService: BiensService) { }

  ngOnInit(): void {
    this.biens = this.bienService.getAllBien();
    this.bienService.updateBien(2);
    const b = {id: 6,
      title: 'Une si longue lettre',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: 2540120,
      image: 'https://source.unsplash.com/1080x720?book',
      category: 'B',
      state: false,
      sale: true,
      createdAt: new Date()};
    this.bienService.deleteBien(b);
  }
  searchThis(data){

  }

}
