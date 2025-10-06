    const table = document.getElementById('myTable');
    let num = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = num;
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
        num++;
      }
      table.appendChild(row);
    }

    const variant = 6;
    const colorPicker = document.getElementById('colorPicker');

    table.addEventListener('mouseover', (e) => {
      if (e.target.tagName === 'TD' && e.target.textContent == variant) {
        e.target.style.backgroundColor = getRandomColor();
      }
    });

    table.addEventListener('click', (e) => {
      if (e.target.tagName === 'TD' && e.target.textContent == variant) {
        e.target.style.backgroundColor = colorPicker.value;
      }
    });

    table.addEventListener('dblclick', (e) => {
    if (e.target.tagName !== 'TD' || e.target.textContent != variant) return;

    const start = parseInt(e.target.textContent);
    const allCells = table.getElementsByTagName('td');

    for (let i = 0; i < allCells.length; i++) {
        const num = parseInt(allCells[i].textContent);
        if (num >= start) {
        allCells[i].style.backgroundColor = getRandomColor();
        }
    }
    });


    function getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }