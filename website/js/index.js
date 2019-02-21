$(function () {

    function GoTo(hash){
        $(".no_snap").removeClass("snap");
        $(".no_snap_end").removeClass("snap_end");

        position = hash;

        $('html, body').animate({
            scrollTop: $(''+hash+'').offset().top
        }, 2000);
        setTimeout(addSnap,2000)
    }

    function addSnap(){
        $(".no_snap").addClass("snap");
        $(".no_snap_end").addClass("snap_end");
    }

    //GoTo("#parallax_1");

    var lastScrollTop = 0;
    var position_list = ["#parallax_1", "#parallax_2", "#parallax_3","#parallax_4"];
    position_list = position_list.reverse();

    console.log(position_list);
    var position = "#parallax_1";

    var x = "221, 221, 221,0.9";
    var y = "0, 84, 124, 0.9";

    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        if(st < 500) {
            $("#forside_btn").css({"background-color": "rgba("+y+")"});
            $("#om_mig_btn").css({"background-color": "rgba("+x+")"});
            $("#musik_btn").css({"background-color": "rgba("+x+")"});
            $("#feature_btn").css({"background-color": "rgba("+x+")"});
            position = "#parallax_1";
            $("#forside_btn").css({"transform": "scale(1.1)"});
            $("#om_mig_btn").css({"transform": "scale(1.0)"});
            $("#musik_btn").css({"transform": "scale(1.0)"});
            $("#feature_btn").css({"transform": "scale(1.0)"});
        }
        else if(st < 1500) {
            $("#forside_btn").css({"background-color": "rgba("+x+")"});
            $("#om_mig_btn").css({"background-color": "rgba("+y+")"});
            $("#musik_btn").css({"background-color": "rgba("+x+")"});
            $("#feature_btn").css({"background-color": "rgba("+x+")"});
            position = "#parallax_2";
            $("#forside_btn").css({"transform": "scale(1.0)"});
            $("#om_mig_btn").css({"transform": "scale(1.1)"});
            $("#musik_btn").css({"transform": "scale(1.0)"});
            $("#feature_btn").css({"transform": "scale(1.0)"});
        }
        else if(st < 2650) {
            $("#forside_btn").css({"background-color": "rgba("+x+")"});
            $("#om_mig_btn").css({"background-color": "rgba("+x+")"});
            $("#musik_btn").css({"background-color": "rgba("+y+")"});
            $("#feature_btn").css({"background-color": "rgba("+x+")"});
            position = "#parallax_3";
            $("#forside_btn").css({"transform": "scale(1.0)"});
            $("#om_mig_btn").css({"transform": "scale(1.0)"});
            $("#musik_btn").css({"transform": "scale(1.1)"});
            $("#feature_btn").css({"transform": "scale(1.0)"});


        }
        else {
            $("#forside_btn").css({"background-color": "rgba("+x+")"});
            $("#om_mig_btn").css({"background-color": "rgba("+x+")"});
            $("#musik_btn").css({"background-color": "rgba("+x+")"});
            $("#feature_btn").css({"background-color": "rgba("+y+")"});
            position = "#parallax_4";
            $("#forside_btn").css({"transform": "scale(1.0)"});
            $("#om_mig_btn").css({"transform": "scale(1.0)"});
            $("#musik_btn").css({"transform": "scale(1.0)"});
            $("#feature_btn").css({"transform": "scale(1.1)"});
        }

        if (st > lastScrollTop){
            $(".divider").css({"transform": "rotate(0deg)"});
        }
        else {
            $(".divider").css({"transform": "rotate(180deg)"});
        }

        lastScrollTop = st;
    });


    $(document).keydown(function(e) {
        var position_index = $.inArray(position, position_list);
        console.log(position_list[position_index]);
        console.log(position_index);
        switch(e.which) {
            case 38:
                if (position_index !== 3) {
                    position_index++;
                    GoTo(position_list[position_index]);
                }
            break;

            case 40:
                if (position_index !== 0) {
                    position_index--;
                    GoTo(position_list[position_index]);
                    console.log(position_index);
                    console.log(position_list[position_index]);
                }
            break;

            default: return;
        }
        e.preventDefault();
});

    $("#forside_btn").on('click',function () {
        GoTo("#parallax_1");
    });

    $("#om_mig_btn").on('click',function () {
        GoTo("#parallax_2");
    });

    $("#musik_btn").on('click',function () {
        GoTo("#parallax_3");
    });

    $("#feature_btn").on('click',function () {
        GoTo("#parallax_4");
    });
});