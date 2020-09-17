/*wheels part*/
$(document).ready(function(){
    $(".wheel-img").hide()
    $(".W-t").hide()
    $(".X-c").hide()
    $(".FE-t").hide()
    $(".wheel-content").hide()
    $(".pricing-content").hide()
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
            }).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%",
            })
            $(".X-c").mouseenter(function(){
                $(".X-c").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
                $(".W-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".FE-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
            });
            $(".X-c").mouseleave(function(){
                $(".X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });


            $(".W-t").show().animate({
                left: '0px'
            },1000).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            })
            $(".W-t").mouseenter(function(){
                $(".X-c").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".W-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".FE-t").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
            });
            $(".W-t").mouseleave(function(){
                $(".X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });
            

            $(".FE-t").show().animate({
                left: '0px'
            },1500).css({
                "color":"#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".FE-t").mouseenter(function(){
                $(".X-c").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".W-t").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
                $(".FE-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
            });
            $(".FE-t").mouseleave(function(){
                $(".X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });


            $(".wheel-content").show().animate({
                left: '0px'
            },3000);
            $(".pricing-content").show().delay(3000).animate({
                right: '0px'
            },1000).css({
                "padding-top": "2%",
                "color": "#fff",
                "text-align": "center",
                
            });
            $(".weel-pricing-menu").hide().css({"margin-top": "10%"})
            $(".weel-pricing-btn").click(function(){
                $(".weel-pricing-menu").show(1000)
            });
        });
    });
});


/*engine part*/
$(document).ready(function(){
    $(".engine-img").hide()
    $(".e-W-t").hide()
    $(".e-X-c").hide()
    $(".e-FE-t").hide()
    $(".engine-content").hide()
    $(".engine-pricing-content").hide()
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
            }).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".e-X-c").mouseenter(function(){
                $(".e-X-c").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
                $(".e-W-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".e-FE-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
            });
            $(".e-X-c").mouseleave(function(){
                $(".e-X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".e-W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".e-FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });



            $(".e-W-t").show().animate({
                left: '0px'
            },1000).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".e-W-t").mouseenter(function(){
                $(".e-X-c").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".e-W-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".e-FE-t").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
            });
            $(".e-W-t").mouseleave(function(){
                $(".e-X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".e-W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".e-FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });



            $(".e-FE-t").show().animate({
                left: '0px'
            },1500).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".e-FE-t").mouseenter(function(){
                $(".e-X-c").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".e-W-t").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
                $(".e-FE-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
            });
            $(".e-FE-t").mouseleave(function(){
                $(".e-X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".e-W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".e-FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });


            $(".engine-content").show().animate({
                left: '0px'
            },3000);
            $(".engine-pricing-content").show().delay(3000).animate({
                right: '0px'
            },1000).css({
                "padding-top": "2%",
                "color": "#fff",
                "text-align": "center"
            });
            $(".engine-pricing-menu").hide().css({"margin-top": "10%"})
            $(".engine-pricing-btn").click(function(){
                $(".engine-pricing-menu").show(1000)
            });
        });
    });
});


/*chassi part*/
$(document).ready(function(){
    $(".chassi-img").hide()
    $(".c-W-t").hide()
    $(".c-X-c").hide()
    $(".c-FE-t").hide()
    $(".chassi-content").hide()
    $(".chassi-pricing-content").hide()
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
            }).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".c-X-c").mouseenter(function(){
                $(".c-X-c").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
                $(".c-W-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".c-FE-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
            });
            $(".c-X-c").mouseleave(function(){
                $(".c-X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".c-W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".c-FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });


            $(".c-W-t").show().animate({
                left: '0px'
            },1000).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".c-W-t").mouseenter(function(){
                $(".c-X-c").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".c-W-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".c-FE-t").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
            });
            $(".c-W-t").mouseleave(function(){
                $(".c-X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".c-W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".c-FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });



            $(".c-FE-t").show().animate({
                left: '0px'
            },1500).css({
                "color": "#fff",
                "text-align": "center",
                "line-height": "20px",
                "padding-top": "5%"
            });
            $(".c-FE-t").mouseenter(function(){
                $(".c-X-c").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
                $(".c-W-t").animate({
                    opacity: "0.5"
                }).css({"background-color":"#1f1f1f"});
                $(".c-FE-t").animate({
                    opacity: "0.8"
                }).css({"background-color":"#F70D1A"});
            });
            $(".c-FE-t").mouseleave(function(){
                $(".c-X-c").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".c-W-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
                $(".c-FE-t").animate({
                    opacity: "1"
                }).css({"background-color":"#1f1f1f"});
            });




            $(".chassi-content").show().animate({
                left: '0px'
            },3000);
            $(".chassi-pricing-content").show().delay(3000).animate({
                right: '0px'
            },1000).css({
                "padding-top": "2%",
                "color": "#fff",
                "text-align": "center"
            });
            $(".chassi-pricing-menu").hide().css({"margin-top": "10%"})
            $(".chassi-pricing-btn").click(function(){
                $(".chassi-pricing-menu").show(1000)
            });
        });
    });
});


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
    document.getElementById("main").style.marginRight = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }


/*$("#W-t").show(3000)
$("#X-c").show(1000)
$("#FE-t").show(3000)
$(".wheel-content").show(3500)
$("wheel-content-1").show(4000)
$("wheel-content-2").show(4500)
$("wheel-content-3").show(5000)
$("wheel-content-4").show(6000)*/
