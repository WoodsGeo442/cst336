// let getImages = function(){
//     $(".flex-container").empty();
//     if($("#number").val() == 0){
//         return;
//     }
//     $.ajax({
//         type: "GET",
//         url: "https://dog.ceo/api/breeds/image/random/" + num,
//         dataType: "json",
      
        
//         success: function(data){
//             console.log(data);
//             result.message.forEach(function(link){
//                 var img = "<div class='img-thumbnail flex-item'><img src='" + link + "'></div>";
//                 $(".flex-container").append(img);
//             });
            
            
//         }
//     });
// };

// buttonDog.addEventListener("click", function(){
//     $(".flex-container").empty();
//     if($("#inputNum").val() == 0){
//       return;
//     }
//     $.ajax({
//         method: "GET",
//         url: "https://dog.ceo/api/breeds/image/random/" + $("#inputNum").val(),
//         dataType: "json",
//         success: function(result) {
//           console.log(result);
//           result.message.forEach(function(link){
//             var img = "<div class='img-thumbnail flex-item'><img src='" + link + "'></div>";
//             $(".flex-container").append(img);
//           });

//         }
//     });
// });

let buildGallery = function(){
	$("#images").empty();
	var url = "https://dog.ceo/api/breeds/image/random/" + $("#number-images").val();
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			data.message.forEach(function(src){
				$("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
			});
		},
		error: function(err){
			console.log(err);
		}
	});
}