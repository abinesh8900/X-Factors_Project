$(document).ready(function(){
    $(".wrapper_menu").hide()
    $('.icon').click(function(){
        $(".wrapper_menu").show()
        $('.icon').toggleClass('active').click(function(){
            $(".wrapper_menu").hide()
        });
    });
});
/*$(document).ready(function(){
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
});*/

 // sidebar in contact
 
 function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// read more
$(document).ready(function(){ 
    $(".pepole_read_more ").hide()
    $(".culture_read_more").hide()
    $(".mutualFit_read_more").hide()
    $(".agility_read_more").hide()
    $(".adaptability_read_more").hide() 

//pepole read more start
    $(".pepole_read_more_click").click(function(){
        $(".pepole_read_more_click").hide()
        $(".pepole_read_more").show()
        $(".pepole_read_less_click").show()
    });

    $(".pepole_read_less_click").click(function(){
        $(".pepole_read_less_click").hide()
        $(".pepole_read_more").hide()
        $(".pepole_read_more_click").show()
    });
//pepole read more end

//culture read more start
    $(".culture_read_more_click").click(function(){
        $(".culture_read_more_click").hide()
        $(".culture_read_more").show()
        $(".culture_read_less_click").show()
    });

    $(".culture_read_less_click").click(function(){
        $(".culture_read_less_click").hide()
        $(".culture_read_more").hide()
        $(".culture_read_more_click").show()
    });
//culture read more start

//Mutual Fit read more start
    $(".mutualFit_read_more_click").click(function(){
       $(".mutualFit_read_more_click").hide()
       $(".mutualFit_read_more").show()
       $(".mutualFit_read_less_click").show()
    });

    $(".mutualFit_read_less_click").click(function(){
       $(".mutualFit_read_less_click").hide()
       $(".mutualFit_read_more").hide()
       $(".mutualFit_read_more_click").show()
    });
//Mutual Fit read more start 

//Agility read more start
    $(".agility_read_more_click").click(function(){
       $(".agility_read_more_click").hide()
       $(".agility_read_more").show()
       $(".agility_read_less_click").show()
    });

    $(".agility_read_less_click").click(function(){
       $(".agilityt_read_less_click").hide()
       $(".agility_read_more").hide()
       $(".agility_read_more_click").show()
    });
//Agility Fit read more start

//Adaptability read more start
    $(".adaptability_read_more_click").click(function(){
       $(".adaptability_read_more_click").hide()
       $(".adaptability_read_more").show()
       $(".adaptability_read_less_click").show()
   });

    $(".adaptability_read_less_click").click(function(){
       $(".adaptability_read_less_click").hide()
       $(".adaptability_read_more").hide()
       $(".adaptability_read_more_click").show()
    });
//Adaptabilityread more start
});

