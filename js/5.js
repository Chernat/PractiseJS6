// Создайте функцию addChildrenTo(block, count, type) которая будет создавать внутри block count количество детей типа type ( type это будет тип блока например 'span, ul, li, div' и т.д. )

addChildrenTo('fifth-task', 5, 'span');

function addChildrenTo(block, count, type) {
  for (var i = 0; i < count; i++) {
    document.getElementById(block).appendChild(document.createElement(type));
  }
}
