//problem:user when clicking on image going to the dead end resulting poor user experiance 
//solution:creating a overlay with the large image-light-box

//1. Create the link event on a link to am image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  $(this).attr("href");

  //2. Show the overlay
  //1.2 update overlay with the image linked in the link
  //1.3 get child's alt attri and set caption
});
 //2 Add overlay
   //2.1 An image
   //2.2 A caption

 //3. When overlay is clicked
   //3.1 Hide overlay   