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

// DRAG AND DROP
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}