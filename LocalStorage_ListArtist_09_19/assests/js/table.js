const dataTable = document.getElementById('userTable');

const artistDataList =() =>{
    const userStorage = JSON.parse(localStorage.getItem('artists'));

	for(let i=0; i<userStorage.length; i+=1){

      dataTable.innerHTML +=  `
                    <tr>
                        <th>${i + 1}</th>
                        <td>${userStorage[i].name}</td>
                        <td>${userStorage[i].song}</td>
                        <td>${userStorage[i].album}</td>
                        <td>${userStorage[i].year}</td>
                        <td>${userStorage[i].country}</td>
                    </tr>
                    `
    }
}

artistDataList();

document.getElementById('cleanBtn').addEventListener('click', ()=>{
    localStorage.clear()
    dataTable.innerHTML='';
})