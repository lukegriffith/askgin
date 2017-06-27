
var ginmap = [
    { 
        title:"Brockmans Gin, 70 cl",
        link:"https://www.amazon.co.uk/Brockmans-8712838335804-Gin-70-cl/dp/B008HKMK8U/ref=sr_1_1?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-1",
        img: "https://images-na.ssl-images-amazon.com/images/I/41isAquwVnL.jpg"
        
    },
    { 
        title:"Monkey 47 Schwarzwald Dry Gin, 50 cl",
        link:"https://www.amazon.co.uk/Monkey-47-Schwarzwald-Dry-Gin/dp/B008JAAT5Y/ref=sr_1_2?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-2",
        img:"https://images-na.ssl-images-amazon.com/images/I/617AD%2Bgef1L._SX522_.jpg"
    },
    { 
        title:"Brecon Special Reserve Gin, 70 cl",
        link:"https://www.amazon.co.uk/Brecon-Special-Reserve-Gin-70/dp/B00CJBB64C/ref=sr_1_3?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-3",
        img:"https://images-na.ssl-images-amazon.com/images/I/41tM8PHBSTL._SY679_.jpg"
    },
    { 
        title:"Hendrick's Gin, 70 cl",
        link:"https://www.amazon.co.uk/Hendricks-8712838322323-Gin-70-cl/dp/B004LLZP3Q/ref=sr_1_6?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-6",
        img:"https://images-na.ssl-images-amazon.com/images/I/71mwSYJQ6SL._SY679_.jpg"
    },
    { 
        title:"Warner Edwards Distillery Victoria's Rhubarb Gin, 70 cl",
        link:"https://www.amazon.co.uk/Warner-Edwards-Distillery-Victorias-Rhubarb/dp/B00OCZXPLK/ref=sr_1_5?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-5",
        img:"https://images-na.ssl-images-amazon.com/images/I/81RWD7bxO8L._SY679_.jpg"
    },
    { 
        title:"Tanqueray Rangpur Gin, 70cl",
        link:"https://www.amazon.co.uk/Tanqueray-693488-Rangpur-Gin-70cl/dp/B005UXOIU0/ref=sr_1_4?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-4",
        img:"https://images-na.ssl-images-amazon.com/images/I/813VaP0J-mL._SY679_.jpg"
    },
    { 
        title:"Brooklyn Gin, 70 cl",
        link:"https://www.amazon.co.uk/d/Gin/Brooklyn-70-cl/B014SWWGW0/ref=sr_1_14?s=alcohol&rps=1&ie=UTF8&qid=1498589695&sr=1-14",
        img:"https://images-na.ssl-images-amazon.com/images/I/81fuMoKtKdL._SY679_.jpg"
    }
];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function ClearSearch(){

    var result = document.getElementById("search");

    result.innerHTML = "";

    ginmap = shuffle(ginmap);

    ginmap.forEach(function(e){

        var res = createSearchResult(e);
        result.appendChild(res);
    })

}

function createSearchResult(mapObj){
    var article = document.createElement("article");

    var image = document.createElement("img");

    var header = document.createElement("h1");

    var link = document.createElement("a");

    image.src = mapObj.img;
    link.href = mapObj.link;
    link.innerHTML = mapObj.title;

    header.appendChild(link);

    article.appendChild(header);

    article.appendChild(image);

    return article;
}




var button = document.getElementById("search_button");

button.onclick = function(){

    var search = document.getElementById("search_input");

    var dym = document.getElementById("dym");

    dym.innerHTML = search.value + " " + "<a href='#gin'>Did you mean Gin?</a>";

    ClearSearch();
}