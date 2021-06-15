/* Preloader */

$(window).on('load', function () {
    $('#status').delay(500).fadeOut('slow');
    $('#preloader').delay(500).fadeOut();
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],responsive:{
        0:{
            items: 1 
        },
            480:{
            items: 2
            }
        }

    });
});
/*Progress Bars */

$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1500);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* Responsive Tabs */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* reviews*/
$(function () {
    $("#reviews-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});
/* Stats*/
$(function() {
$(".counter").counterUp({
                delay: 10,
                time: 1700
            });

});

$(function(){
$("a.smooth-scroll").click(function(event){
event.preventDefault();
var section_id = $(this).attr("href");
$("html,body").animate({
scrollTop: $(section_id).offset().top - 64
},1200,"easeInOutExpo");
});
});

/* Mobile Menu */
$(function(){
$("#mobile-nav-open-btn").click(function(){
$("#mobile-nav").css("height","100%");
});
$("#mobile-nav-close-btn, #mobile-nav a").click(function(){
$("#mobile-nav").css("height","0%");
});
    
});
 /* Animation*/ 
$(function(){
new WOW().init();
});

$(window).on('load',function(){
$("#home-heading-1").addClass("animated fadeInDown");
$("#home-heading-2").addClass("animated fadeInLeft");
$("#home-text").addClass("animated zoomIn");
$("#home-btn").addClass("animated zoomIn");
$("#arrow-down i").addClass("animated fadeInDown infinite");

});

$(function(){
    $('#contact-form').submit(function(e) { 
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();
        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(result){
                if(result.isSuccess){
                $("#contact-form").append("<p class='thankyou'>Your Message Has been Sent,Thank you for contacting us!</p>");
                $("#contact-form")[0].reset();}
                else {
         $("#firstname + .comments").html(result.firstnameError);
        $("#name + .comments").html(result.nameError);
       $("#email + .comments").html(result.emailError);
      $("#phone + .comments").html(result.phoneError);
     $("#message + .comments").html(result.messageError);
                }
            }
        });
     });
    
});
/* google map*/

$(window).on('load',function() {
 var adressString = 'Assurance Axa Essaouira  44000 Maroc';
 var mylatlng = {lat: 31.509560,lng: -9.767320};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: mylatlng
            });
      var marker = new google.maps.Marker({position: mylatlng, map: map,
        title: "Click to see Adress"
            });
      var infowindow = new google.maps.InfoWindow({
    content: adressString
  });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
             });
/* whtte nav*/
$(function(){
$(window).scroll(function(){
showHideNav();
});
    function showHideNav(){
    if($(window).scrollTop()>50){
    $("nav").addClass("white-nav-top");
    $("#back-to-top").fadeIn();
    }
  else{
  $("nav").removeClass("white-nav-top");
       $("#back-to-top").fadeOut();
}
    }
});













