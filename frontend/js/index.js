let columnContainer = document.getElementById('column-container')

function getColumns() {
  return fetch('http://localhost:3000/columns')
  .then(response => response.json());
}

getColumns().then(columns => {
  columns.map(column => {
    new Column(column);
    column.cards.map(card => {
      new Card(card);
    })
  });
  Column.all().map(column => column.createColumn());
  Card.all().map(card => card.createCard());
});
