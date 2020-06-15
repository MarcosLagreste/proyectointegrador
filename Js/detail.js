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
        //top 5 canciones
        let albumTrack = document.querySelector (".albumTrack")
            albumTrack.innerHTML = "Top 5 canciones:"   
        // numero de albums
        let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
        infoArtistaDetail.innerHTML = "Numero de albums: "+ datos.nb_album
         // album detail
         let albumdetail = document.querySelector(".album-detail")
         albumdetail.innerHTML = "Album de la cancion mas escuchada:"  
         

        //tracklist 5 temas
        let urltracklist = proxy + "https://api.deezer.com/artist/"+ id + "/top?limit=5"
        fetch (urltracklist)
            .then (function(response){
                return response.json()
            })
            .then (function(datostracklist){
                console.log(datostracklist);
                
                //segunda imagen
                let resulttracklist = datostracklist.data
                let imagenartista2 = document.querySelector (".imagenartista2")
                imagenartista2.innerHTML =  "<img src='" + resulttracklist[0].album.cover_xl + "'>"
                // info del album 
                let infodelalbum = document.querySelector(".infodelalbum") 
                infodelalbum.innerHTML = resulttracklist[0].album.title
                let cuadrocanciones = document.querySelector(".cuadrocanciones")

                resulttracklist.forEach(function(resultado){
                    cuadrocanciones.innerHTML += "<a href='detail2.html?type=" + resultado.type + "&id="  + resultado.id + "'>" + resultado.title + "</li>"
                })
            

                
            })
            
            .catch (function (errortracklist){
                console.log(errortracklist);
                
            })
    .catch (function(error){
        console.log(error);
    })


        }
        if (type == "album"){
        fetch (url)
            .then (function(response){
                return response.json()
            })
            .then (function(datosalbum){
            //nombre
            let nameDetail = document.querySelector (".nameDetail") 
            nameDetail.innerHTML = "Artista:    " + datosalbum.artist.name
            //imagen cancion
            let imagenartista = document.querySelector (".imagenartista")
            imagenartista.innerHTML =  "<img src='" +   datosalbum.artist.picture_xl + "'>"
             //info del artista o track
             let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
             infoArtistaDetail.innerHTML = null
              //imagen albun
            let imagenalbum = document.querySelector (".imagenartista2")
            imagenalbum.innerHTML = "<img src='" +   datosalbum.cover_xl + "'>"
            //info del album
            let infodelalbum = document.querySelector (".infodelalbum")
            infodelalbum.innerHTML = datosalbum.title
            //track escuchado
            let albumTrack = document.querySelector (".albumTrack")
            albumTrack.innerHTML = "Canciones del album:"

            //lista de tracks
            console.log(datosalbum);
            
            let tracksalbum = datosalbum.tracks.data
            let cuadrocanciones = document.querySelector(".cuadrocanciones")
            tracksalbum.forEach(function(resultado){
                cuadrocanciones.innerHTML += "<a href='detail2.html?type=" + resultado.type + "&id="  + resultado.id + "'>" + resultado.title + "</li>"
            }) 

            })
            .catch(function(error){
                console.log(error);
                
            })
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
            imagenartista.innerHTML = "<a href='detail2.html?type=artist&id="+ datostracks.artist.id + "'>" + "<img src='" +   datostracks.artist.picture_xl + "'>"
            //info del artista o track
            let infoArtistaDetail = document.querySelector(".infoArtistaDetail")
            infoArtistaDetail.innerHTML = "Nombre del artista: " + datostracks.artist.name
            //imagen albun
            let imagenalbum = document.querySelector (".imagenartista2")
            imagenalbum.innerHTML = "<a href='detail2.html?type=album&id=" + datostracks.album.id + "'>" +"<img src='" +   datostracks.album.cover_xl + "'>"
            //track escuchado
            let albumTrack = document.querySelector (".albumTrack")
            albumTrack.innerHTML = "Canción:"
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
            let urlgenre = proxy + "https://api.deezer.com/genre/" + id 
            
            fetch (urlgenre) 
                .then (function(response){
                    return response.json()
                })
                .then (function(datosgenre){
                //nombre
                let nameDetail = document.querySelector (".nameDetail") 
                nameDetail.innerHTML = datosgenre.name
                //imagen cancion
                let imagenartista = document.querySelector (".imagenartista")
                imagenartista.innerHTML =  "<img src='" +   datosgenre.picture_xl + "'>"
                 //lista de artistas
                 let albumTrack = document.querySelector (".albumTrack")
                 albumTrack.innerHTML = "Artistas del género:"
                 // primer artista foto: (artista mas escuchado del genero:(?...)
                 let albumdetail = document.querySelector(".album-detail")
                 albumdetail.innerHTML = "Artista más escuchado del genero:" 
                 
                 
                })
               
                .catch (function(error){
                    console.log(error);
                })
            let urlgenreartist = proxy + "https://api.deezer.com/genre/" + id + "/artists"
            fetch (urlgenreartist)
                .then (function(response){
                    return response.json()
                })
                .then (function(datosgenreartist){
                        console.log(datosgenreartist); 
                   
                    let artistss = datosgenreartist.data
                     //imagen artista mas escuchado
                     let imagenalbum = document.querySelector (".imagenartista2")
                     imagenalbum.innerHTML = "<a href='detail2.html?type=artist&id=" + artistss[0].id + "'>" +"<img src='" +   artistss[0].picture_xl + "'>"
                     //cuadro de artists
                    let cuadrocanciones = document.querySelector(".cuadrocanciones")
                    artistss.forEach(function(resultado){
                        cuadrocanciones.innerHTML += "<a href='detail2.html?type=" + resultado.type + "&id="  + resultado.id + "'>" + resultado.name + "</li>"
                    
                    
                    }) 
                })
                .catch (function(error){
                    console.log(error);
                    
                })
        }
    

    })
    .catch(function(error){
        console.log(error);
        
    })




