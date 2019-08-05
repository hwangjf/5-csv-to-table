document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('tbody')

  fetch('https://raw.githubusercontent.com/code-corgi/5-csv-to-table/master/data/customers.csv')
    .then(r => r.text())
    .then(data => {
      // console.log(data)

      data.split('\n').forEach(row => {
        const rowData = row.split(',')

        if (rowData.length > 1) {
          const tableRow = document.createElement('TR')
  
          tableRow.innerHTML = `
            <td>${rowData[0]}</td>
            <td>${rowData[1]}</td>
            <td>${rowData[2]}</td>
            <td>${rowData[3]}</td>
            <td>${rowData[4]}</td>
            <td>${rowData[5]}</td>
          `
          tableBody.append(tableRow)
        }
      })
    })
})