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
});


 // sidebar in contact
 
 function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// read more

$(document).ready(function(){ 
    $(".people_read_more ").hide()
    $(".culture_read_more").hide()
    $(".mutualFit_read_more").hide()
    $(".agility_read_more").hide()
    $(".adaptability_read_more").hide() 

//people read more start
$(".people_read_more_click").click(function(){
    $(".people_read_more").show()
    $(".culture_read_more").hide()
    $(".mutualFit_read_more").hide()
    $(".agility_read_more").hide()
    $(".adaptability_read_more").hide()
    $(".people_read_more_click").hide()
    $(".culture_read_more_click").show() 
    $(".mutualFit_read_more_click").show()
    $(".agility_read_more_click").show()
    $(".adaptability_read_more_click").show()
   });
//people read more end

//culture read more start
$(".culture_read_more_click").click(function(){
    $(".culture_read_more_click").hide()
    $(".culture_read_more").show()
    $(".people_read_more").hide()
    $(".mutualFit_read_more").hide()
    $(".agility_read_more").hide()
    $(".adaptability_read_more").hide()
    $(".people_read_more_click").show()
    $(".culture_read_more_click").hide() 
    $(".mutualFit_read_more_click").show()
    $(".agility_read_more_click").show()
    $(".adaptability_read_more_click").show()
});
//culture read more start

//Mutual Fit read more start
$(".mutualFit_read_more_click").click(function(){
    $(".mutualFit_read_more_click").hide()
    $(".mutualFit_read_more").show()
    $(".people_read_more").hide()
    $(".culture_read_more").hide()
    $(".agility_read_more").hide()
    $(".adaptability_read_more").hide()
    $(".people_read_more_click").show()
    $(".culture_read_more_click").show() 
    $(".mutualFit_read_more_click").hide()
    $(".agility_read_more_click").show()
    $(".adaptability_read_more_click").show()
});
//Mutual Fit read more start 

//Agility read more start
$(".agility_read_more_click").click(function(){
    $(".agility_read_more_click").hide()
    $(".agility_read_more").show()
    $(".people_read_more").hide()
    $(".culture_read_more").hide()
    $(".mutualFit_read_more").hide()
    $(".adaptability_read_more").hide()
    $(".people_read_more_click").show()
    $(".culture_read_more_click").show() 
    $(".mutualFit_read_more_click").show()
    $(".agility_read_more_click").hide()
    $(".adaptability_read_more_click").show()

});
//Agility Fit read more start

//Adaptability read more start
$(".adaptability_read_more_click").click(function(){
    $(".adaptability_read_more_click").hide()
    $(".adaptability_read_more").show()
    $(".people_read_more").hide()
    $(".culture_read_more").hide()
    $(".mutualFit_read_more").hide()
    $(".agility_read_more").hide()
    $(".people_read_more_click").show()
    $(".culture_read_more_click").show() 
    $(".mutualFit_read_more_click").show()
    $(".agility_read_more_click").show()
    $(".adaptability_read_more_click").hide()    
});
//Adaptabilityread more start
});
