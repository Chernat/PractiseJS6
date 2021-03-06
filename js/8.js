const ANCESTRY_FILE = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

createCards(ANCESTRY_FILE);
creatIntermediateBlock(ANCESTRY_FILE);

function createCards(arr) {
  var cardArea = document.createElement('div');
  cardArea.className = 'area';
  cardArea.style.display = 'flex';
  cardArea.style.flexFlow = 'wrap';
  document.getElementById('eighth-task').appendChild(cardArea);

  for (var i = 0; i < arr.length; i++) {
    var cardBlock = document.createElement('div');
    cardBlock.className = 'card-block';
    cardBlock.style.margin = '0 auto';

    cardBlock.style.width = 'calc(1200px / 3)';
    cardArea.appendChild(cardBlock);

    var card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = '#029a3e';
    card.style.margin = '1rem';
    card.style.padding = '2rem';
    card.style.minHeight = '300px';
    card.style.borderRadius = '10px';
    card.style.border = '5px solid #ffd745';

    cardBlock.appendChild(card);

    var name = document.createElement('h2');
    name.innerText = '- ' + arr[i].name + ' -';
    name.className = 'card__name';
    name.style.paddingTop = '20px';
    name.style.color = '#ffd745';
    name.style.textAlign = 'center';
    card.appendChild(name);

    var sex = document.createElement('p');
    if (arr[i].sex === 'm') sex.innerText = '\u2642 male';
    if (arr[i].sex === 'f') sex.innerText = '\u2640 female';
    sex.className = 'card__sex';
    sex.style.marginTop = '5px';
    sex.style.color = '#fff';
    sex.style.textAlign = 'center';
    card.appendChild(sex);

    var dateLife = document.createElement('p');
    dateLife.innerText = arr[i].born + ' - ' + arr[i].died;
    dateLife.style.textAlign ='center';
    dateLife.style.color = '#fff';
    card.appendChild(dateLife);

    var father = document.createElement('p');
    if (arr[i].father === null) {
      father.innerText = 'Father: unknown';
    } else {
      father.innerText = 'Father: ' + arr[i].father;
    }
    father.style.color = '#fff';
    father.style.textAlign = 'center';
    father.style.fontSize = '18px';
    card.appendChild(father);

    var mother = document.createElement('p');
    if (arr[i].mother === null) {
      mother.innerText = 'Mother: unknown';
    } else {
      mother.innerText = 'Mother: ' +  arr[i].mother;
    }
    mother.style.color = '#fff';
    mother.style.textAlign = 'center';
    mother.style.fontSize = '18px';
    mother.style.paddingBottom = '20px';
    card.appendChild(mother);
  }
}

function intermediateAgeMotherAndDother(arr) {
  var count = 0;
  var age = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i].mother === arr[j].name) {
        count++;
        var difference = arr[i].born - arr[j].born;
        age += difference;
      }
    }
  }

  return Math.round(age / count);
}

function intermediateMaleAge(arr) {
  var count = 0;
  var age = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].sex === 'm') {
      count++;
      age += (arr[i].died - arr[i].born);
    }
  }

  return Math.round(age / count);
}

function intermediateFemaleAge(arr) {
  var count = 0;
  var age = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].sex === 'f') {
      count++;
      age += (arr[i].died - arr[i].born);
    }
  }

  return Math.round(age / count);
}

function creatIntermediateBlock(arr) {
  var block = document.createElement('div');
  block.className = 'statistic';
  block.style.display = 'flex';
  block.style.flexDirection = 'column';
  block.style.alignItems = 'center';
  block.style.backgroundColor = '#029a3e';
  block.style.borderRadius = '10px';
  block.style.border = '5px solid #ffd745';
  document.getElementById('eighth-task').appendChild(block);

  var title = document.createElement('h2');
  title.className = 'statistic__title';
  title.innerText = 'Statistic Block';
  title.style.color = '#ffd745';
  block.appendChild(title);

  var mother = document.createElement('p');
  mother.className = 'statistic__mother';
  mother.innerText = 'Average difference between mothers and children: ' + intermediateAgeMotherAndDother(arr) + ' years';
  mother.style.color = '#fff';
  block.appendChild(mother);

  var male = document.createElement('p');
  male.className = 'statistic__male';
  male.innerText = 'Average male age: ' + intermediateMaleAge(arr) + ' years old';
  male.style.color = '#fff';
  block.appendChild(male);

  var female = document.createElement('p');
  female.className = 'statistic__female';
  female.innerText = 'Average female age: ' + intermediateFemaleAge(arr) + ' years old';
  female.style.color = '#fff';
  block.appendChild(female);
}
