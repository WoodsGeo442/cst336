$(document).ready(function(){

    let shippingChoice = $("#shipping").val();
    var fruitcakeUnits = document.querySelector("#qty_item1");
    var pinataUnits = document.querySelector("#qty_item2");
    var shippingPrice = 0;
    var total = 0;
    console.log(fruitcakeUnits + "  " + pinataUnits);

    $("button").on("click", calcTotal);


    function calcTotal(){
      //console.log("Hello");
      $("#validate").html("");
      if(!isFormValid()){
        return;
      }
    }

      function isFormValid(){
        let isValid = true;
        if ($("#shippingChoice").val() == ""){
          isValid = false;
          $("#validate").html("A Shipping option must be selected");
        }
        return isValid;
      }

    if(shippingChoice == "reg"){
        shippingPrice = 5;
        console.log(shippingPrice);
    } else if(shippingChoice == "3day"){
        shippingPrice = 10;
        console.log(shippingPrice);
    } else if(shippingChoice == "Nday"){
        shippingPrice = 15;
        console.log(shippingPrice);
    }
    total += shippingPrice;
    console.log(total);




})