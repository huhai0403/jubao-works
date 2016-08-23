/**
 * Created by huhai on 2016/4/28.
 */
$(function(){
    function PageAnimate(a){
        $(a).find('.tit_01').animate({right:'0'},500);
        $(a).find('.con .left').animate({top:'0'},800);
        $(a).find('.con .right').animate({bottom:'0'},800);
    }
    function RePageAnimate(a){
        $(a).find('.tit_01').animate({right:'-200%'},500);
        $(a).find('.con .left').animate({top:'1000px'},800);
        $(a).find('.con .right').animate({bottom:'1000px'},800);
    }
    $('.wrap').fullpage({
        'navigation': true,
        anchors: ['page1'],
        /*css3动画*/

        afterLoad: function(anchorLink, index){
            if(index == 2){
                PageAnimate('.section02');
            }
            if(index == 3){
                PageAnimate('.section03');
            }
            if(index == 4){
                PageAnimate('.section04');
            }
            if(index == 5){
                PageAnimate('.section05');
            }
            if(index == 6){
                PageAnimate('.section06');
            }
            if(index == 7){
                $('.section07').find('.tit_01').animate({right:'-325px'},500);
                $('.section07').find('.con .left').animate({top:'0'},800);
                $('.section07').find('.con .right').animate({bottom:'0'},800);
                $('.section07').find('.con .four i').addClass('animated tada');

            }
        },
        onLeave: function(index, direction){
            if(index == 2){
                RePageAnimate('.section02');
            }
            if(index == 3){
                RePageAnimate('.section03');
            }
            if(index == 4){
                RePageAnimate('.section04');
            }
            if(index == 5){
                RePageAnimate('.section05');
            }
            if(index == 6){
                RePageAnimate('.section06');
            }
            if(index == 7){
                $('.section07').find('.tit_01').animate({right:'-200%'},500);
                $('.section07').find('.con .left').animate({top:'1000px'},800);
                $('.section07').find('.con .right').animate({bottom:'1000px'},800);
                $('.section07').find('.con .four i').removeClass('animated tada');
            }

        }
    });
});