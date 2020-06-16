let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/playlist/";

let recuperoStorageTrack = localStorage.getItem('playlistTrack');
let playlistTrack = JSON.parse(recuperoStorageTrack);

let playlistWrapper = document.querySelector('.playlistWrapper');
console.log(recuperoStorageTrack);
if(recuperoStorageTrack == null || recuperoStorageTrack == "[]"){
    playlistTrack = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(playlistWrapper);
    
} else {

    playlistTrack.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    });
}
function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            console.log(track);
            
            playlistWrapper.innerHTML +=  '<div>' + '<li>' + '<a href="detail2.html?type=track&id=' + track.id + '">' + track.title + '</a></li>' +'</div>' +  '<div>' + '<iframe class = "reproductorplaylist" src="' + track.preview + '" frameborder="0"></iframe>' + '</div>' 
            let player = document.querySelector('iframe');
            player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=500&height=200&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'
        })
        .catch(function(errors){
            console.log(errors);
            
        })
};
let recuperoStorageAlbum = localStorage.getItem('playlistAlbum');
let playlistAlbum = JSON.parse(recuperoStorageAlbum);

let playlistWrapperAlbum = document.querySelector('.playlistWrapperAlbum');
console.log(recuperoStorageAlbum);
if(recuperoStorageAlbum == null || recuperoStorageAlbum == "[]"){
    playlistAlbum = [];
    playlistWrapperAlbum.innerHTML += '<li> No hay albums en tu playlist </li>'
    console.log(playlistWrapperAlbum);
    
} else {

    playlistAlbum.forEach(function(idAlbum){
        buscarYMostrarAlbum(idAlbum);
    });
}
function buscarYMostrarAlbum(idAlbum){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/album/' + idAlbum;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (album) {
            playlistWrapperAlbum.innerHTML += '<li>' + '<a href="detail2.html?type=album&id=' + album.id + '">' + album.title + '</a></li>' 
        })
        .catch(function(errors){
            console.log(errors);
            
        })
};
    //PlAYLIST
 /*/   let queryString = location.search;
    let datos = new URLSearchParams (queryString);
    let idTrack = datos.get('id');
    let url1 = proxy + "https://api.deezer.com/track/" + idTrack

fetch(url1)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

        //Resolvemos qué hacemos con los datos
        let titulo = document.querySelector('.titulo');
        titulo.innerHTML += datos.title;
        
        let interprete = document.querySelector('.interprete');
        interprete.innerHTML += datos.artist.name
        
        let album = document.querySelector('.album');
        album.innerHTML += datos.album.title

        //el player.
        let player = document.querySelector('iframe');
        player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'
    }) /*/
        
    /*/    let recuperoStorage = localStorage.getItem('playlist');
    if(recuperoStorage == null){
        playlist = [];
    } else {
        playlist = JSON.parse(recuperoStorage);
    }
    if(playlist.includes(idTrack)){
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist";
    }
    let agregar = document.querySelector('.agregar');
    agregar.addEventListener('click', function(e){
        e.preventDefault();
        if (playlist.includes(idTrack)){
            let indiceEnElArray = playlist.indexOf(idTrack);
            playlist.splice(indiceEnElArray, 1);
            document.querySelector('.agregar').innerHTML = "Agregar a playlist";
        console.log(playlist);
        } else {
            playlist.push(idTrack);
        document.querySelector('.agregar').innerHTML = "Quitar de la playlist"
        }
        let playlistParaStorage = JSON.stringify(playlist);
        localStorage.setItem('playlist', playlistParaStorage);
        console.log(localStorage);
        })/*/ 