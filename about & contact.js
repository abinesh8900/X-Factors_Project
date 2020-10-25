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
    document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function(){
    $(".founder_1_read_more").hide()
    $(".founder_2_read_more").hide()
    $(".founder_1_read_more_click").click(function(){
        $(".founder_1_read_more").show()
        $(".founder_1_read_more_click").hide()
        $(".founder_1_read_less_click").show()
    });
    $(".founder_2_read_more_click").click(function(){
        $(".founder_2_read_more").show()
        $(".founder_2_read_more_click").hide()
        $(".founder_2_read_less_click").show()

    });
    $(".founder_1_read_less_click").click(function(){
        $(".founder_1_read_more").hide()
        $(".founder_1_read_less_click").hide()
        $(".founder_1_read_more_click").show()
    });
    $(".founder_2_read_less_click").click(function(){
        $(".founder_2_read_more").hide()
        $(".founder_2_read_less_click").hide()
        $(".founder_2_read_more_click").show()
    });
});