import {Component, Input, OnInit} from '@angular/core';
import {Bien} from '../bien.model';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

  constructor() { }
   biens: Bien[] = [
    {id: 1,
      title: 'Voiture a louer',
      description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, ',
      price: 400000,
      image: 'https://source.unsplash.com/1080x720?car',
      category: 'A',
      state: true,
      sale: true,
      createdAt: new Date(2020, 11, 3, 33, 45)},
      {id: 2,
      title: 'Appartement',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage ',
      price: 125630,
      image: 'https://source.unsplash.com/1080x720?house',
      category: 'A',
      state: true,
      sale: true,
      createdAt: new Date(1995, 3, 3, 12, 27)},
      {id: 3,
      title: 'Immeuble',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur',
      price: 125335,
      image: 'https://source.unsplash.com/1080x720?building',
      category: 'A',
      state: true,
      sale: true,
      createdAt: new Date(2000, 11, 24, 12, 45)} ,
      {id: 4,
      title: 'Restaurant a vendre',
      description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system',
      price: 996870,
      image: 'https://source.unsplash.com/1080x720?food',
      category: 'C',
      state: true,
      sale: true,
      createdAt: new Date(1996, 4, 3, 14, 45)},
      {id: 5,
      title: 'Computer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      price: 851740,
      image: 'https://source.unsplash.com/1080x720?computer',
      category: 'A',
      state: true,
      sale: false,
      createdAt: new Date(1995, 6, 2, 21, 45)},
      {id: 6,
      title: 'Une si longue lettre',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore',
      price: 2540120,
      image: 'https://source.unsplash.com/1080x720?book',
      category: 'B',
      state: false,
      sale: true,
      createdAt: new Date()}
  ];
  ngOnInit(): void {
  }

}
