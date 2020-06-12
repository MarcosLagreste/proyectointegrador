let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idArtist = datos.get('id');

//ARTIST
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/artist/" + idArtist;

fetch (url)
    .then (function(response){
        return response.json()
    })
    .then (function(datos){
        console.log(datos);
        let nameDetail = document.querySelector (".nameDetail")
        nameDetail.innerHTML = datos.name


        let imagenartista = document.querySelector (".imagenartista")
        imagenartista.innerHTML = datos.picture_medium

        let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
    

    })
    .catch(function(error){
        console.log(error);
        
    })

//TRACKS

 let idTracks = datos.get("id") 
 let url1 = proxy +   "https://api.deezer.com/track/" + idTracks;

 fetch (url1)
    .then (function(response){
        return response.json()
    })
    .then (function(datos){
        console.log(datos);
        let nameDetail = document.querySelector (".nameDetail")
        nameDetail.innerHTML = datos.title


        let imagenartista = document.querySelector (".imagenartista")
        

        let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
    

    })
    .catch(function(error){
        console.log(error);
        
    })

//ALBUMS

let idAlbums = datos.get("id")
let url2 = proxy +   "https://api.deezer.com/album/" + idAlbums;


fetch (url2)
    .then (function(response){
        return response.json()
    })
    .then (function(datos){
        console.log(datos);
        let nameDetail = document.querySelector (".nameDetail")
        nameDetail.innerHTML = datos.title


        let imagenartista = document.querySelector (".imagenartista")
        

        let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
    

    })
    .catch(function(error){
        console.log(error);
        
    })

    //PlAYLIST

    let player = document.querySelector('iframe');
    player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=' + idTrack + '&app_id=1'
    let recuperoStorage = localStorage.getItem('playlist');
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
        })
