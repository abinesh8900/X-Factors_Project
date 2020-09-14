$(document).ready(function(){
    $(".menu_close").hide()
    $(".wrapper_menu").hide()
    $(".menu_bar").click(function(){
        $(".menu_close").show()
        $(".wrapper_menu").show()
        $(".menu_close").click(function(){
            $(".menu_close").hide()
        $(".wrapper_menu").hide()
        });

    });
});

 // sidebar in contact
 
 function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}