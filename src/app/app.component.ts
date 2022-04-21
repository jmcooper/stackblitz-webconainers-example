import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: any[] = [
    {
      id: 1,
      description:
        'A blue robot with rounded head, metered body and magnet hands.',
      name: 'Blue Magnetism ',
      imageName: 'blue-magnetism.png',
      category: 'tech',
      price: 12225.5,
      discount: 0.2,
    },
    {
      id: 2,
      description:
        "A formal, business bot on wheels with large status light fit prominently on it's head.",
      name: 'Bossy Business',
      imageName: 'bossy-business.png',
      category: 'business',
      price: 9995.5,
    },
    {
      id: 3,
      description: "An educational robot designed for children's education.",
      name: 'Learning Larry',
      imageName: 'learning-larry.png',
      category: 'business',
      price: 7999,
    },
    {
      id: 4,
      description: 'A security bot with perfect for border security.',
      name: 'Bouncer Bob',
      imageName: 'bouncer-bob.png',
      category: 'security',
      price: 11550,
      discount: 0.2,
    },
    {
      id: 5,
      description:
        'A number-crunching, scientific bot to handle your mundane or complex, computational needs.',
      name: 'Number Cruncher',
      imageName: 'number-cruncher.png',
      category: 'tech',
      price: 12750.5,
    },
    {
      id: 6,
      description: 'A fast-moving, flying, surveillance bot.',
      name: 'Watcher Wally',
      imageName: 'watcher-wally.png',
      category: 'security',
      price: 7950,
      discount: 0.1,
    },
    {
      id: 7,
      description:
        'A custodian bot capable of handling all your cleaning and restocking needs.',
      name: 'Kustodian Karl',
      imageName: 'kustodian-karl.png',
      category: 'business',
      price: 8499.5,
    },
    {
      id: 8,
      description: 'A space-capable bot for searching out alian life.',
      name: 'Alien Alice',
      imageName: 'alien-alice.png',
      category: 'tech',
      price: 1999.95,
    },
    {
      id: 9,
      description:
        'A cheaper, mostly reliable version of the Watcher Walley surveillance bot. ',
      name: 'Smokey Spy Joe',
      imageName: 'smokey-spy-joe.png',
      category: 'security',
      price: 4920.0,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
