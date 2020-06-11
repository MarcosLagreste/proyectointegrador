let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idArtist = datos.get('id');

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
        infoArtistaDetail.innerHTML = ?



    })
    .catch(function(error){
        console.log(error);
        
    })


