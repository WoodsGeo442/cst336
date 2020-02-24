

$("#quiz").on("submit", function(event){
    alert("Submitting form... Upon reaching next page, click on link at top and then enter to get to the welcome page.");
    scorecounter();
});



function scorecounter(){
    var total = 0;
    if($("#season").val() == "su"){
        total+=10;
    } else if($("#season").val() == "f"){
        total+=20;
    } else if($("#season").val() == "sp"){
        total+=30;
    } else if($("#season").val() == "w"){
        total+=40;
    }
    
    if($("#freeTime").val() == "read"){
        total+=10;
    } else if($("#freeTime").val() == "music"){
        total+=20;
    } else if($("#freeTime").val() == "outside"){
        total+=30;
    } else if($("#freeTime").val() == "games"){
        total+=40;
    }
    
    if($("#school").val() == "math"){
        total+=10;
    } else if($("#school").val() == "english"){
        total+=20;
    } else if($("#school").val() == "history"){
        total+=30;
    } else if($("#school").val() == "science"){
        total+=40;
    }
    
    return total;
}
