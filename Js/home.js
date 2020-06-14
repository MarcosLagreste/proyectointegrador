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
        let imagChart = document.querySelector (".imagChart")
        console.log (datos)

        //carrousel
        let albums1 = document.querySelector (".albums1")
        albums1.innerHTML = "<img src='" +  resultados[0].artist.picture_xl + "'>"
        let albums2 = document.querySelector (".albums2")
        albums2.innerHTML = "<img src='" +  resultados[1].artist.picture_xl + "'>"
        let albums3 = document.querySelector (".albums3")
        albums3.innerHTML = "<img src='" +  resultados[2].artist.picture_xl + "'>"
        let albums4 = document.querySelector (".albums4")
        albums4.innerHTML = "<img src='" +  resultados[3].artist.picture_xl + "'>"
        let albums5 = document.querySelector (".albums5")
        albums5.innerHTML = "<img src='" +  resultados[4].artist.picture_xl + "'>"
        
        resultados.forEach (function(track){
            tracks.innerHTML += "<div class='estilocharts'><li>" + "<a href='detail2.html?type=track&id="  + track.id + "'>" + track.title + "</li>" + "<img src='" +  track.artist.picture + "'> </div>"
            

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
        let imagChart1 = document.querySelector (".imagChart1")
        let resultados = datos.data;
        console.log (datos)

        resultados.forEach (function(albums){
            album.innerHTML +=  "<div class='estilocharts'> <li>" + "<a href='detail2.html?type=album&id="  + albums.id + "'>" + albums.title + "</li>" + "<img src='" +  albums.artist.picture + "'> </div>"
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
    let imagChart2 = document.querySelector (".imagChart2")
    console.log (datos)

    resultados.forEach (function(artista){
        artistas.innerHTML +=  "<div class='estilocharts'> <li>" + "<a href='detail2.html?type=artist&id="  + artista.id + "'>" + artista.name + "</li>" + "<img src='" +  artista.picture + "'> </div>" 
    })
    
})
.catch (function(error){
    console.log(error);
    
})