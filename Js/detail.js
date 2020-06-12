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
 


