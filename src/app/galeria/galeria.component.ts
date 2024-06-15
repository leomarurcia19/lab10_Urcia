import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  items = [
    {
      imageUrl: 'https://i.pinimg.com/236x/9f/cc/32/9fcc32021bac6ab53510fd212d75c3ab.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/77/43/1f/77431f9834949922f73c7a0dbab33b30.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/08/38/94/083894419fdbef71979f8c90a33e3409.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/ab/6e/3d/ab6e3dc130fb32b707f7113b70f1996b.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/51/ab/44/51ab44f023a520a838615525d78aa32a.jpg',
    },
    {
      imageUrl: 'https://i.pinimg.com/236x/2b/62/32/2b623201eea6ed307438029dbf72bed7.jpg',
    },
  ];

  constructor(){}

  ngOnInit(): void {
  }

}
