let columnContainer = document.getElementById('column-container')

function getColumns() {
  return fetch('http://localhost:3000/columns')
  .then(response => response.json());
}

function sanitizeName(name) {
  return name.replace(" ", "-").toLowerCase();
}

function createColumn(column) {
  let columnName = document.createElement('h3')
  columnName.innerText = column.name;
  columnName.setAttribute('class', 'has-text-centered has-background-light')

  let boardColumn = document.createElement('div');
  boardColumn.setAttribute('class', 'column');
  boardColumn.setAttribute('id', sanitizeName(column.name) + '-column');
  boardColumn.append(columnName);
  columnContainer.append(boardColumn);
}

getColumns().then(columns => {
  columns.forEach(column => {
    createColumn(column);
  })
})