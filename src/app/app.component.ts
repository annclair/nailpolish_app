import { Component } from '@angular/core';
import { Nailpolish } from './nailpolish';

const NAILPOLISHS: Nailpolish[] = [
  { id: 1, name: 'Instant Chemistry', color: 'purple', brand: "china glaze", category: "Magnetic" },
  { id: 2, name: 'Karma', color: 'pink', brand: "SinfullColors", category: "Mat velvet" },
  { id: 3, name: 'Kurtain kall', color: 'blue', brand:"SinfullColors", category:  "Mat velvet" },
  { id: 4, name: 'adorable', color: 'pink', brand: "p2", category: "Sand" },
  { id: 5, name: 'You just wait', color: 'pink', brand: "china glaze", category: "Pearly" },
  { id: 6, name: 'Queen of beauty', color: 'grey', brand: "SinfullColors", category: "Glitter" },
  { id: 7, name: 'Lets talk', color: 'purple', brand: "SinfullColors", category: "Metalic" },
  { id: 8, name: 'Modnight blue', color: 'blue', brand: "SinfullColors", category: "Metalic" },
  { id: 9, name: 'Starry night', color: 'black', brand: "china glaze", category: "Glitter" },
  { id: 10, name: 'Cracked concrete', color: 'grey', brand: "china glaze", category: "Crackle" },
  { id: 11, name: 'Pull me close', color: 'blue', brand: "china glaze", category: "Magnetic" },
  { id: 12, name: 'Attraction', color: 'grey', brand: "china glaze", category: "Magnetic" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My nail polishs collection';
  nailpolishs = NAILPOLISHS;
}
