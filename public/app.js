var app = function(){

  var xmasButton = document.getElementById("xmas-albums");
  xmasButton.addEventListener("click", xmasAlbumClick)

}

var xmasAlbumClick = function() {
  console.log("xmas album button was clicked")
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album"
  makeRequest(url, requestComplete);
}

var requestComplete = function() {
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var albums = JSON.parse(jsonString);
  populateAlbumList(albums)
}

var makeRequest = function(url , callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

var populateAlbumList = function(albums) {

  // console.log(albums.albums.items[0].images[0].url)

  // console.log(albums.albums.items[0].artists[0].name)

  console.log(albums.albums.items[0].external_urls.spotify)

  var ul = document.getElementById("all-info")
  var li1 = document.getElementById("artists");
  var li2 = document.getElementById("album-name");
  var li3 = document.getElementById("album-image");

  for(i=0; i<albums.albums.items.length; i++){
    var li1 = document.createElement('li');
    li1.innerText = albums.albums.items[i].artists[0].name;
    var li2 = document.createElement('li');
    li2.innerHTML = "<a href = " + albums.albums.items[i].external_urls.spotify + ">" + albums.albums.items[i].name; + "</a"
    var li3 = document.createElement('li');
    li3.innerHTML = "<img src=" + albums.albums.items[i].images[0].url + ">"
    var li4 = document.createElement('li');
    li4.innerText = "............................................................"

    
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
  }

  // for(i=0; i<albums.albums.items.length; i++){
  //   var li2 = document.createElement('li');
  //   li2.innerText = albums.albums.items[i].name;
  //   ul.appendChild(li2);
  // }

  


  // for(item in albums.albums.items){
  //   var li = document.createElement('li');
  //   li.innerText = item;
  //   ol.appendChild(li);
  // };

}



window.addEventListener('load', app);