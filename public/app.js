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

  console.log(albums.albums.items[0].name)
  console.log(albums.albums.items[1].name)

  console.log(albums.albums.items.length)


  var ol = document.getElementById("albums");

  for(i=0; i<albums.albums.items.length; i++){
    var li = document.createElement('li');
    li.innerText = albums.albums.items[i].name;
    ol.appendChild(li);
  }


  // for(item in albums.albums.items){
  //   var li = document.createElement('li');
  //   li.innerText = item;
  //   ol.appendChild(li);
  // };

}



window.addEventListener('load', app);