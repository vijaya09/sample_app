$(document).ready(function(){
  //on button click should render welcome.html
  $("#submit").click(function(e){
    e.preventDefault();

    //get the form data
    getData().then(function(data){
      var body = $(Handlebars.partials['welcome'](data));
      $('#first_div').append(body);
    });
  });
});

function getData(){
  //created dummy data and resolving Promise
  var jsonData = {
    "text": "hello"
  }

  return new Promise(function (resolve, reject) {
      return resolve(jsonData);
  });
}
