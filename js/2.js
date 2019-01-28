// Создайте таблицу с 10 стороками и столбцами! Напишите код, который выделит все ячейки в таблице по диагонали. Вам нужно будет получить из таблицы table все диагональные td и выделить их

creatTable();

function creatTable() {
  var table = document.createElement('table');
  var tablePlace = document.getElementById('second-task');
  tablePlace.appendChild(table);

  for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);

    for (var j = 0; j < 10; j++) {
      var td = document.createElement('td');
      td.innerText = (j + 1) + ':' + (j + 1);
      
      if (j === i) {
        td.style.backgroundColor = 'red';
      }

      tr.appendChild(td);
    }
  }
}
