$("#searchName").submit(function(e){
  e.preventDefault();
  $.ajax({
    method: "GET",
    url: "https://www.behindthename.com/api/lookup.json",
    dataType: "json",
    data: {
      "key": "ge515497174",
      "name": $("#word").val()
    },
    success: function(result){
      $("#printName").html(result[0].name);
      if(result[0].gender == 'm'){
        $("#gender").html("Male");
        $("#genderImg").attr('src', "img/maleSymbol.png");
      } else if (result[0].gender == 'f'){
        $("#gender").html("Female");
        $("#genderImg").attr('src', "img/femaleSymbol.png");
      }
    }
  });
});