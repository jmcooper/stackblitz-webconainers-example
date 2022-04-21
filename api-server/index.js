const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API serverr.
*/
const users = {
  'jim@joesrobots.com': {
    firstName: 'Jim',
    lastName: 'Cooper',
    email: 'jim@joesrobots.com',
    password: 'very-secret',
  },
  'joe@joesrobots.com': {
    firstName: 'Joe',
    lastName: 'Eames',
    email: 'joe@joesrobots.com',
    password: 'super-secret',
  },
};
let cart;

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get('/api/products', (req, res) => {
  let products = [
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
  res.send(products);
});

app.post('/api/cart', (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get('/api/cart', (req, res) => res.send(cart));

app.post('/api/register', (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send('Invalid user info');
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post('/api/sign-in', (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send('Invalid user credentials.');
  }
});

app.listen(8081, () => console.log('API Server listening on port 8081!'));
