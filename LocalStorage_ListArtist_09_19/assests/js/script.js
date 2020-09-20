
/* pull Form */
const formList= document.getElementById('formList');

let artistDataList = [];

formList.addEventListener('submit', (e) => {
	e.preventDefault();
       
    const inputName = document.getElementById('nameArtist').value;
	const inputSong = document.getElementById('songArtist').value;
	const inputAlbum = document.getElementById('albumArtist').value;
	const inputYear = document.getElementById('yearAlbum').value;
    const inputCountry = document.getElementById('countryArtist').value;
    
    let artist = {
		name: inputName,
		song: inputSong,
        album: inputAlbum,
        year:inputYear,
        country: inputCountry,
    };
    
    
    
    savingStorage(artist);

});

const savingStorage =(artist) =>{
    if (localStorage.getItem('artists') === null) {

        artistDataList.push(artist)
        const stringArtist =JSON.stringify(artistDataList)
        localStorage.setItem('artists', stringArtist)
    }else  {
        const storageList = JSON.parse(localStorage.getItem('artists'));
        storageList.push(artist);
        const stringArtist =JSON.stringify(storageList)
        localStorage.setItem('artists', stringArtist);
    }

}
