let queryString = location.search;
let datos = new URLSearchParams (queryString);
let id = datos.get('id');
let type = datos.get ("type")

//ARTIST
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/" + type + "/" + id;

fetch (url)
    .then (function(response){
        return response.json()
    })
    .then (function(datos){
        console.log(datos);
        //nombre
        let nameDetail = document.querySelector (".nameDetail") 
        nameDetail.innerHTML = datos.name
        //imagen
        let imagenartista = document.querySelector (".imagenartista")
        imagenartista.innerHTML =  "<img src='" +   datos.picture_medium + "'>"
       
        //album mas escuchado
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
    let idTrack = datos.get('id');
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
