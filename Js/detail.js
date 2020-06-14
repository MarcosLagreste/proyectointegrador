let queryString = location.search;
let datos = new URLSearchParams (queryString);
let id = datos.get('id');
let type = datos.get ("type")


let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/" + type + "/" + id;

fetch (url)
    .then (function(response){
        return response.json()
    })
    .then (function(datos){
        console.log(datos);
        //ARTISTAS
        if (type == "artist"){
        //nombre
        let nameDetail = document.querySelector (".nameDetail") 
        nameDetail.innerHTML = datos.name
        //imagen
        let imagenartista = document.querySelector (".imagenartista")
        imagenartista.innerHTML =  "<img src='" +   datos.picture_xl + "'>"
        
       
        // numero de albums
        let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
        infoArtistaDetail.innerHTML = "Numero de albums: "+ datos.nb_album

        //tracklist 5 temas
        let urltracklist = proxy + "https://api.deezer.com/artist/"+ id + "/top?limit=5"
        fetch (urltracklist)
            .then (function(response){
                return response.json()
            })
            .then (function(datostracklist){
                console.log(datostracklist);

                let resulttracklist = datostracklist.data
                let cuadrocanciones = document.querySelector(".cuadrocanciones")

                resulttracklist.forEach(function(resultado){
                    cuadrocanciones.innerHTML += "<a href='detail2.html?type=" + resultado.type + "&id="  + resultado.id + "'>" + resultado.title + "</li>"
                })


                //segunda imagen
                let imagenartista2 = document.querySelector (".imagenartista2")
                 imagenartista2.innerHTML = "<img src='" +   datostracklist.cover_big + "'>"
            })
            
            .catch (function (errortracklist){
                console.log(errortracklist);
                
            })
    .catch (function(error){
        console.log(error);
    })


        }
        if (type == "album"){

        }
        //TRACKS
        if  (type == "track"){
        fetch (url)
            .then (function(response){
                return response.json()
            })
            .then (function(datostracks){
            //nombre
            let nameDetail = document.querySelector (".nameDetail") 
            nameDetail.innerHTML = "Canción:  " + datostracks.title
            //imagen cancion
            let imagenartista = document.querySelector (".imagenartista")
            imagenartista.innerHTML =  "<img src='" +   datostracks.artist.picture_xl + "'>"
            //info del artista o track
            let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
            infoArtistaDetail.innerHTML = "Nombre del artista: " + datostracks.artist.name
            //imagen albun
            let imagenalbum = document.querySelector (".imagenartista2")
            imagenalbum.innerHTML = "<img src='" +   datostracks.album.cover_xl + "'>"
            //track escuchado
            let albumTrack = document.querySelector (".albumTrack")
            albumTrack.innerHTML = "Cancion:"
            //info del album
            let infodelalbum = document.querySelector (".infodelalbum")
            infodelalbum.innerHTML = datostracks.album.title
            //track
            let track = document.querySelector(".cuadrocanciones")
            track.innerHTML = datostracks.title + " /Duración: " + datostracks.duration  + '"'
            //reproductor track
            let reproductortrack = document.querySelector(".reproductortrack")
            reproductortrack.innerHTML = "<audio src='" + datostracks.preview + "'></audio>"
            })
           

        }
        if (type == "genre"){

        }
    

    })
    .catch(function(error){
        console.log(error);
        
    })




