/**
 * SLIDESHOW
 */
 $(document).ready(function (){

    var nextBtn = $('.next');
    var prevBtn = $('.prev');
 
    // Naviga tra le slide con il mouse
    // Next
    nextBtn.click( function(){
         nextPrevSlide('next');
    });
 
    // Prev
    prevBtn.click( function(){
         nextPrevSlide('prev');
 
    });
 

    // Navigazione da tastiera
    $(document).keydown(function (event){
        // controllo
        // console.log(event.keyCode);
 
        if (event.keyCode == 37){
             nextPrevSlide('prev');
        }else if  (event.keyCode == 39) {
             nextPrevSlide('next');
        }
    });
 // End Doc Ready    
 });
 
 
 /***************************************************************
  *  FUNCTION
 ************************************************************** */
 /**
  * Navigazione tra le slides
  */
 
 function nextPrevSlide(direction) {
     
    
    var activeImage = $ ('.images img.active');
    var activeCircle = $ ('.nav i.active');
    
    // RESET
    activeImage.removeClass('active');
    activeCircle.removeClass('active');
 
    // Next ->
    if (direction === 'next'){
        if (activeImage.hasClass('last')){
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }else{
            activeImage.next('img').addClass('active');
            activeCircle.next('i').addClass('active');
        }
     }

    // Prev <-
    else if (direction === 'prev'){
        if (activeCircle.hasClass('first')){
            $('.image img.last').addClass('active');
            $('.nav i.last').addClass('active');
 
        }else{
            activeImage.prev('img').addClass('active');
            activeCircle.prev('i').addClass('active');
        }
    }
}