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

function drop(ev, el) {
  ev.preventDefault();
  let movingCard = document.getElementById(ev.dataTransfer.getData("text"));
  let touchedElements = document.elementsFromPoint(ev.clientX, ev.clientY);
  let insertBeforeCard = touchedElements.find(e => e.getAttribute('id') ? e.getAttribute('id').includes('card') : false);
  insertBeforeCard ? insertBeforeCard.before(movingCard) : el.appendChild(movingCard);

  let cardToUpdate = Card.all().find(card => card.id == movingCard.getAttribute('id').slice(-1));
  cardToUpdate.updateCard(el);

}