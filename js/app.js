//problem:user when clicking on image going to the dead end resulting poor user experiance 
//solution:creating a overlay with the large image-light-box
 var $overlay=$('<div id="overlay"></div>');
 var $image=$("<img>");
 $overlay.append($image);
 //jQuery allowes you to create a its repersantation even tho the element isnt part of the DOM yet.
 //its common practies to use $ sign in jQuery oblects as $overLay variable.
// Add overlay
$("body").append($overlay);
// An image
   // A caption

//1. Capture the link event on a link to am image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation=$(this).attr("href");
 
  
  //1.2 update overlay with the image linked in the link
  $image.attr("src",imageLocation);
  //2. Show the overlay
  $overlay.show();
  //1.3 get child's alt attri and set caption
});
 

 // When overlay is clicked
   // Hide overlay   