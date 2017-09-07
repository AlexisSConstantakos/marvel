
(function(){


  $(function(){


    let searchButton = $("#searchButton");
    let searchTerm = $("#searchTerm");
    let characterList = $("#characterList");




    let characterUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8aba97ba7fb823a0a5161d4ae62b4427&hash=4d3b5d4c6b77d873b3396c9b0594124a"

    function getCharacters(url){

      $.get(url, function(data){


        let characters = data.data.results;

        characterList.html("");


        $.each(characters, function(index, character){


          characterList.append(`
            <tr>
              <td>
                <a data-characterid="${character.id}" class="characterName" href="#">${character.name}</a>
              </td>
              <td>
                <img src="${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}" alt="${character.name}">
              </td>
            </tr>
            `)
        })
      })
    }

        // // mine
        // for(let i = 0; i < characters.length; i++){
        //   $("#name").append(characters[i].name)
        //   $("#thumbnail").append(characters[i].thumbnail.ext)
        //   $("#body").append("<img src='"+characters[i].thumbnail.path+"/standard_fantastic."+
        //   characters[i].thumbnail.extension+"'/>")
        //   $("#body").append(characters[i].name)
        // }

    getCharacters(characterUrl);

    searchButton.click(function(event){


      event.preventDefault();


      let searchURL = characterUrl;


      if(searchTerm.val() !== ""){
        searchURL += "&nameStartsWith=" + searchTerm.val()
      }


      getCharacters(searchURL);
    })


    characterList.on("click", ".characterName", function(e){
      e.preventDefault();
      alert($(this).data("characterid"))
    })

    // //mine
    // $("#userInput").click(function(){
    //   console.log("search button clicked");
    //   let searchRequest = (apiUrl + "nameStartsWith=" + userInput).val();
    //   $("searchRequest").append("")
    //   getChars();
    //   })
    //
    //   characterList.on("click", ".characterNAme", function(e){
    //     e.preventDefault();
    //     alert($(this).data("characterid"))
    //   })
    //
    // })

  })

})();
