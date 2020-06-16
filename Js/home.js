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
        albums1.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[0].id + "'>" + "<img src='" +  resultados[0].artist.picture_xl + "'>"
        let albums2 = document.querySelector (".albums2")
        albums2.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[1].id + "'>" + "<img src='" +  resultados[1].artist.picture_xl + "'>"
        let albums3 = document.querySelector (".albums3")
        albums3.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[2].id + "'>" + "<img src='" +  resultados[2].artist.picture_xl + "'>"
        let albums4 = document.querySelector (".albums4")
        albums4.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[3].id + "'>" + "<img src='" +  resultados[3].artist.picture_xl + "'>"
        let albums5 = document.querySelector (".albums5")
        albums5.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[4].id + "'>" + "<img src='" +  resultados[4].artist.picture_xl + "'>"
        let albums6 = document.querySelector (".albums6")
        albums6.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[5].id + "'>" + "<img src='" +  resultados[5].artist.picture_xl + "'>"
        let albums7 = document.querySelector (".albums7")
        albums7.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[6].id + "'>" + "<img src='" +  resultados[6].artist.picture_xl + "'>"
        let albums8 = document.querySelector (".albums8")
        albums8.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[7].id + "'>" + "<img src='" +  resultados[7].artist.picture_xl + "'>"
        let albums9 = document.querySelector (".albums9")
        albums9.innerHTML = "<a href='detail2.html?type=track&id="  +  resultados[8].id + "'>" + "<img src='" +  resultados[8].artist.picture_xl + "'>"
        let albums10 = document.querySelector (".albums10")
        albums10.innerHTML = "<a href='detail2.html?type=track&id=" +  resultados[9].id + "'>" + "<img src='" +  resultados[9].artist.picture_xl + "'>"
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