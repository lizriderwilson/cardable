let columnContainer = document.getElementById('column-container')

function getColumns() {
  return fetch('http://localhost:3000/columns')
  .then(response => response.json());
}

function getCards() {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json());
}

function sanitizeName(name) {
  return name.replace(" ", "-").toLowerCase();
}

// function createColumn(column) {
//   let columnName = document.createElement('h3')
//   columnName.setAttribute('class', 'is-size-4 mb-2')
//   columnName.innerText = column.name;

//   let columnInnerDiv = document.createElement('div')
//   columnInnerDiv.setAttribute('class', 'has-text-centered has-background-light p-3')
//   columnInnerDiv.append(columnName);

//   let boardColumn = document.createElement('div');
//   boardColumn.setAttribute('class', 'column');
//   boardColumn.setAttribute('id', 'column' + column.id);
//   boardColumn.append(columnInnerDiv);
//   columnContainer.append(boardColumn);
// }

function createCard(card) {
  //console.log(card.column_id)
  let cardColumn = document.getElementById("column" + card.column_id).firstChild;
  //console.log(cardColumn);

  let cardName = document.createElement('h4');
  cardName.innerText = card.name;

  let cardDescription = document.createElement('p');
  cardDescription.innerText = card.description;

  let columnCard = document.createElement('div');
  columnCard.setAttribute('class', 'box has-background-white-bis');
  columnCard.setAttribute('id', 'card' + card.id);
  columnCard.append(cardName, cardDescription);
  cardColumn.append(columnCard);
}

getColumns().then(columns => {
  columns.map(column => {
    new Column(column);
  });
  Column.all().map(column => column.createColumn());
  })

// getCards().then(cards => {
//   cards.forEach(card => {
//     createCard(card);
//   })
// })

