$(function () {
  var number = Math.floor(Math.random() * 101); // 0 à 100
  //$( "#reponse" ).html( number );
  console.log(number);
  $("#sub").click(function () {
    var nb = $("#nb").val();
    if (number > nb) {
      $("#msg").html("C'est plus !");
    } else if (number < nb) {
      $("#msg").html("C'est moins !");
    } else {
      $("#msg").html("Bravo !");
    }
  });
});
