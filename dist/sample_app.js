$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    getData().then(function(data){
      var body = $(Handlebars.partials['welcome'](data));
      $('#first_div').append(body);
    });
  });
});

function getData(){
  var jsonData = {
    "text": "hello"
  }
  return new Promise(function (resolve, reject) {
      return resolve(jsonData);
  });
}
