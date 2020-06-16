
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
            generos.innerHTML += "<div class='estitlogenres'><a href=detail2.html?type=genre&id=" + genre.id + "><li class='ligenres'>"  + genre.name + "</li>" + "<div class='estiloimagengenres'>" + '<img src="' + genre.picture + '">'+ "</div></a></div>" 
        });
        
        





    })
    //let imgGenero =  "https://api.deezer.com/genre/" 
    .catch (function(error){
        console.log(error);
        
    })

