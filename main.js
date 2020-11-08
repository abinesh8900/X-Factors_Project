$(document).ready(function(){
    $(".wrapper_menu").hide()
    $('.icon').click(function(){
        $(".wrapper_menu").show(500);
        $('.icon').toggleClass('active').click(function(){
            if(!$( ".icon" ).hasClass( "active" )){
                $(".wrapper_menu").hide();
            }
          
        });
    });
})

 // sidebar in contact
 
 function openNav() {
    $( "#mySidenav" ).addClass( "sidebarActive" );
  }
  
  function closeNav() {
    $( "#mySidenav" ).removeClass( "sidebarActive" );

  }