$(document).ready(function(){

$('.searchButton').on('click', searchGitHub);

function searchGitHub(){
  $("#repos").empty();
  var nameToFind = $('.nameSearch').val();
    $(".display-left").show();
  $.getJSON("https://api.github.com/users/" + nameToFind, function(data){
    if(data.name ==="null"){
      $("#userName").text(data.login);
    }
    else{
      $("#userName").text(data.name);
    }
    $("#location").text(data.location);
    $("#avatar").attr("src",data.avatar_url);
    $("#gitHubUrl").attr("href",data.html_url);
    $("#blogUrl").attr("href",data.blog);
  })
  $('.nameSearch').val('');

  getRepositories(nameToFind);
}

function getRepositories(name){
  $.getJSON("https://api.github.com/users/" + name + "/repos", function(data){
    var repositories = data;
    repositories.forEach(function(repository){
      $("#repos").append('<li><a href='+ repository.html_url +'>'+repository.name+'</a></li>')
    });
  });
}

});
