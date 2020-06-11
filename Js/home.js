//TOP 10 CHARTS TRACKS-ARTIST-ALBUMS

let proxy = "https://cors-anywhere.herokuapp.com/";


//TRACKS

let url= proxy + "https://api.deezer.com/chart/0/tracks"

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        let tracks =document.querySelector(".nomb-cancion")
        let resultados = datos.data;

        resultados.forEach (function(track){
            tracks.innerHTML += "<li>" + track.title + "</li>"
        })
    })
    .catch (function(error){
        console.log(error);
        
    })

//ALBUMS

let url1= proxy + "https://api.deezer.com/chart/0/albums";

    fetch(url1)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        let album =document.querySelector(".nomb-album")
        let resultados = datos.data;

        resultados.forEach (function(albums){
            album.innerHTML += "<li>" + albums.title + "</li>"
        })
    })
    .catch (function(error){
        console.log(error);
        
    })

//ARTIST

let url2= proxy + "https://api.deezer.com/chart/0/artists";


fetch(url2)
.then(function(response){
    return response.json()
})
.then(function(datos){
    let artistas =document.querySelector(".nomb-artista")
    let resultados = datos.data;

    resultados.forEach (function(artista){
        artistas.innerHTML += "<li>" + artista.name + "</li>"
    })
})
.catch (function(error){
    console.log(error);
    
})