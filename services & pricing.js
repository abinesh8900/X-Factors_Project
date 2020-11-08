/*wheels part*/
$(document).ready(function(){
    $(".wheel-img").hide()
    $(".W-t").hide()
    $(".X-c").hide()
    $(".FE-t").hide()
    $(".wheel_content").hide()
    $(".pricing_wheel").hide()
    $(".from-left-wheel").click(function(){
        $(".section-engine").hide()
        $(".section-chassi").hide()
        $(".section-wheels").show()
        $(".wheel-img").show()
        $(".wheel-img").animate({
            left: '73%'
        },2000, function(){
            $(".wheel-img").hide()

            $(".X-c").show().animate({
                left: '0px'
            });

            $(".wheel_content").show()

            $(".pricing_wheel").show()
        });
    });
});


$(document).ready(function(){
    $(".read_more_bdc").hide()
    $(".read_more_sale").hide()
    $(".read_more_collection").hide()
    $(".read_more_fi").hide()

    $(".read_more_bdc_click").click(function(){
        $(".read_more_bdc").show()
        $(".read_more_sale").hide()
        $(".read_more_collection").hide()
        $(".read_more_fi").hide()
        $(".read_more_bdc_click").hide()
        $(".read_more_sale_click").show()
        $(".read_more_collection_click").show()
        $(".read_more_fi_click").show()
    });

    $(".read_more_sale_click").click(function(){
        $(".read_more_sale").show()
        $(".read_more_bdc").hide()
        $(".read_more_collection").hide()
        $(".read_more_fi").hide()
        $(".read_more_bdc_click").show()
        $(".read_more_sale_click").hide()
        $(".read_more_collection_click").show()
        $(".read_more_fi_click").show()
    });

    $(".read_more_collection_click").click(function(){
        $(".read_more_sale").hide()
        $(".read_more_bdc").hide()
        $(".read_more_collection").show()
        $(".read_more_fi").hide()
        $(".read_more_bdc_click").show()
        $(".read_more_sale_click").show()
        $(".read_more_collection_click").hide()
        $(".read_more_fi_click").show()
    });

    $(".read_more_fi_click").click(function(){
        $(".read_more_sale").hide()
        $(".read_more_bdc").hide()
        $(".read_more_collection").hide()
        $(".read_more_fi").show()
        $(".read_more_bdc_click").show()
        $(".read_more_sale_click").show()
        $(".read_more_collection_click").show()
        $(".read_more_fi_click").hide()
    });
});

/*engine part*/
$(document).ready(function(){
    $(".engine-img").hide()
    $(".e-W-t").hide()
    $(".e-X-c").hide()
    $(".e-FE-t").hide()
    $(".engine_content").hide()
    $(".pricing_engine").hide()
    $(".from-left-engine").click(function(){
        $(".section-wheels").hide()
        $(".section-chassi").hide()
        $(".section-engine").show()
        $(".engine-img").show()
        $(".engine-img").animate({
            left: '73%'
        },2000, function(){
            $(".engine-img").hide()
            $(".e-X-c").show().animate({
                left: '0px'
            });

            $(".engine_content").show()

            $(".pricing_engine").show()
        });
    });
});


$(document).ready(function(){
    $(".webdesign_read_more").hide()
    $(".digitalMarketing_read_more").hide()
    $(".quality_read_more").hide()
    $(".inventory_read_more").hide()
    $(".mis_read_more").hide()
    

    $(".webdesign_read_more_click").click(function(){
        $(".webdesign_read_more").show()
        $(".digitalMarketing_read_more").hide()
        $(".quality_read_more").hide()
        $(".inventory_read_more").hide()
        $(".mis_read_more").hide()
        $(".webdesign_read_more_click").hide()
        $(".digitalMarketing_read_more_click").show()
        $(".quality_read_more_click").show()
        $(".inventory_read_more_click").show()
        $(".mis_read_more_click").show()
    });
    $(".digitalMarketing_read_more_click").click(function(){
        $(".webdesign_read_more").hide()
        $(".digitalMarketing_read_more").show()
        $(".quality_read_more").hide()
        $(".inventory_read_more").hide()
        $(".mis_read_more").hide()
        $(".webdesign_read_more_click").show()
        $(".digitalMarketing_read_more_click").hide()
        $(".quality_read_more_click").show()
        $(".inventory_read_more_click").show()
        $(".mis_read_more_click").show()
    });
    $(".quality_read_more_click").click(function(){
        $(".webdesign_read_more").hide()
        $(".digitalMarketing_read_more").hide()
        $(".quality_read_more").show()
        $(".inventory_read_more").hide()
        $(".mis_read_more").hide()
        $(".webdesign_read_more_click").show()
        $(".digitalMarketing_read_more_click").show()
        $(".quality_read_more_click").hide()
        $(".inventory_read_more_click").show()
        $(".mis_read_more_click").show()
    });
    $(".inventory_read_more_click").click(function(){
        $(".webdesign_read_more").hide()
        $(".digitalMarketing_read_more").hide()
        $(".quality_read_more").hide()
        $(".inventory_read_more").show()
        $(".mis_read_more").hide()
        $(".webdesign_read_more_click").show()
        $(".digitalMarketing_read_more_click").show()
        $(".quality_read_more_click").show()
        $(".inventory_read_more_click").hide()
        $(".mis_read_more_click").show()
    });
    $(".mis_read_more_click").click(function(){
        $(".webdesign_read_more").hide()
        $(".digitalMarketing_read_more").hide()
        $(".quality_read_more").hide()
        $(".inventory_read_more").hide()
        $(".mis_read_more").show()
        $(".webdesign_read_more_click").show()
        $(".digitalMarketing_read_more_click").show()
        $(".quality_read_more_click").show()
        $(".inventory_read_more_click").show()
        $(".mis_read_more_click").hide()
    });
});

/*chassi part*/
$(document).ready(function(){
    $(".chassi-img").hide()
    $(".c-W-t").hide()
    $(".c-X-c").hide()
    $(".c-FE-t").hide()
    $(".chassi_content").hide()
    $(".pricing_chassi").hide()
    $(".from-left-chassi").click(function(){
        $(".section-wheels").hide()
        $(".section-engine").hide()
        $(".section-chassi").show()
        $(".chassi-img").show()
        $(".chassi-img").animate({
            left: '73%'
        },2000, function(){
            $(".chassi-img").hide()
            $(".c-X-c").show().animate({
                left: '0px'
            });

            $(".chassi_content").show()

            $(".pricing_chassi").show()
        });
    });
});



$(document).ready(function(){
    $(".hr_read_more").hide()
    $(".accounting_read_more").hide()
    $(".it_read_more").hide()
    $(".hr_read_more_click").show()
    $(".accounting_read_more_click").show()
    $(".it_read_more_click").show()

    $(".hr_read_more_click").click(function(){
        $(".hr_read_more").show()
        $(".accounting_read_more").hide()
        $(".it_read_more").hide()
        $(".hr_read_more_click").hide()
        $(".accounting_read_more_click").show()
        $(".it_read_more_click").show()   
    });
    $(".accounting_read_more_click").click(function(){
        $(".hr_read_more").hide()
        $(".accounting_read_more").show()
        $(".it_read_more").hide()
        $(".hr_read_more_click").show()
        $(".accounting_read_more_click").hide()
        $(".it_read_more_click").show()
    });
    $(".it_read_more_click").click(function(){
        $(".hr_read_more").hide()
        $(".accounting_read_more").hide()
        $(".it_read_more").show()
        $(".hr_read_more_click").show()
        $(".accounting_read_more_click").show()
        $(".it_read_more_click").hide()
    });
});

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

  $(document).mouseup(function (e){

	var container = $("#mySidenav");

    if (!container.is(e.target) && container.has(e.target).length === 0){

		container.removeClass( "sidebarActive" );
		
	}
}); 
 /*$(document).ready(function(){
     $(".pricing_show").hide()
     $(".pricing_btn_click").click(function(){
         $(".pricing_show").show()
     });
 });*/
