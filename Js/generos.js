
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/genre";

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(datos){
        let generos = document.querySelector(".resultadogeneros")
        let resultados = datos.data;
        //console.log(datos);

        resultados.forEach (function(genre){
            generos.innerHTML += "<li>" + '<a href="detail2.html?id=' + genre.id+ '">'+ genre.name + '<img src="' + genre.picture + '">' + '</a>' + '</li>'
        });        
    })
//let imgGenero =  "https://api.deezer.com/genre/" 
    .catch (function(error){
        console.log(error);
        
    })
>>>>>>> 3144e30b03e77e0bb9620b1136a3e3e67dceaa47
