class Column {
  static allColumns = [];
  constructor(attrs) {
    this.id = attrs.id;
    this.name = attrs.name;
    Column.allColumns.push(this);
  }

  static all = () => {
    return Column.allColumns;
  }

  createForm() {
    let cardForm = document.createElement('div');
    cardForm.setAttribute('class', 'box has-background-white-bis');

    let formHeader = document.createElement('h4');
    formHeader.innerText = "New Card";
    cardForm.append(formHeader);
    return cardForm;
  }

  createColumn() {
    let columnName = document.createElement('h3')
    columnName.setAttribute('class', 'is-size-4 mb-2')
    columnName.innerText = this.name;
  
    let columnInnerDiv = document.createElement('div')
    columnInnerDiv.setAttribute('class', 'has-text-centered has-background-light p-3')
    columnInnerDiv.append(columnName);
    columnInnerDiv.append(this.createForm());

  
    let boardColumn = document.createElement('div');
    boardColumn.setAttribute('class', 'column');
    boardColumn.setAttribute('id', 'column' + this.id);
    boardColumn.append(columnInnerDiv);
    columnContainer.append(boardColumn);
  }
}