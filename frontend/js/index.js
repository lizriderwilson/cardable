let columnContainer = document.getElementById('column-container')

function getColumns() {
  return fetch('http://localhost:3000/columns')
  .then(response => response.json());
}

function getCards() {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json());
}

getColumns().then(columns => {
  columns.map(column => {
    new Column(column);
  });
  Column.all().map(column => column.createColumn());
});

getCards().then(cards => {
  cards.map(card => {
    new Card(card);
  });
  Card.all().map(card => card.createCard());
});
