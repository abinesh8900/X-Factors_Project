

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