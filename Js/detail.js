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



