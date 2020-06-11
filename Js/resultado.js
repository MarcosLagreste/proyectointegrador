//RESULTADOS DE BUSQUEDA ARTIST-TRACKS-ALBUMS
let queryString = location.search;
let searchParams = new URLSearchParams (queryString);
let search = searchParams.get("search");
console.log(search)
let proxy = "https://cors-anywhere.herokuapp.com/";

//ARTISTS

let url = proxy + "https://api.deezer.com/search/artist?q=" + search;

fetch(url)
    .then (function(response){
        return response.json();
    })
    .then (function(datos){
        console.log(datos);
        let lista= document.querySelector (".resultados");
        let resultados = datos.data;
        resultados.forEach(function(resultado){
            lista.innerHTML += "<li>" + '<a href="detail2.html?id=' + resultado.id+ '">'+ resultado.name + '</a></li>'
           
        });
    })
    .catch(function(error){
        console.log(error);
    })


//TRACKS

let url1 = proxy + "https://api.deezer.com/search/track?q=" + search;

fetch(url1)
    .then(function (response){
        return response.json();
    })
    .then(function (datos){
        let resultadostracks = document.querySelector (".resultadostracks")
        let resultados = datos.data;
        resultados.forEach(function(track){
            resultadostracks.innerHTML += "<li>" + '<a href="detail2.html?id=' + track.id+ '">'+ track.title + '</a></li>'
        })
        
    })

   .catch(function(error){
    console.log(error);
    })

//ALBUMS

let url2 = proxy + "https://api.deezer.com/search/album?q=" + search;

fetch(url2)
    .then(function (response){
        return response.json();
    })
    .then(function (datos){
        let resultadosalbum = document.querySelector (".resultadosalbums")
        let resultados2 = datos.data;
        resultados2.forEach(function(album){
            resultadosalbum.innerHTML += "<li>" + '<a href="detail2.html?id=' + album.id+ '">'+ album.title + '</a></li>'
            console.log(datos)
        })
        
    })

   .catch(function(error){
    console.log(error);
    })
