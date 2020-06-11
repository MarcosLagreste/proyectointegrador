let queryString = location.search;
//console.log(queryString);
let searchParams = new URLSearchParams (queryString);
//console.log(searchParams);

let search = searchParams.get("search");
console.log(search)
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/search/artist?q=" + search;
//console.log(url);

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


let idTrack = searchParams.get('id');
let url1 = proxy + "https://api.deezer.com/search/track?q=" + idTrack;
let resultados1 = document.querySelector (".resultados1")
fetch(url1)
    .then(function (response){
        return response.json();
    })
    .then(function (resultados1){
        resultados1.innerHTML += '<li>' + resultados1.title + '</li>'
    })
//fetch(url1)
//    .then (function(response){
//        return response.json();
//    })
//    .then (function(datos){
//        console.log(datos);
//        let resultados1 = document.querySelector (".resultados1")
//        resultado = datos.data
//        resultados1.for(function(resultado){
//            resultados1.innerHTML += "<a href='detail2.html'> <li>" + resultado.title + "</li></a>"
//        })
   .catch(function(error){
    console.log(error);
    })
    