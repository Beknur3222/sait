// $(function() {

//     var header = $("#header"),
//         introH = $("#intro").innerHeight(),
//         scrollOffset = $(window).scrollTop();


//     /* Fixed Header */
//     checkScroll(scrollOffset);

//     $(window).on("scroll", function() {
//         scrollOffset = $(this).scrollTop();

//         checkScroll(scrollOffset);
//     });

//     function checkScroll(scrollOffset) {
//         if( scrollOffset >= introH ) {
//             header.addClass("fixed");
//         } else {
//             header.removeClass("fixed");
//         }
//     }



//     /* Smooth scroll */
//     $("[data-scroll]").on("click", function(event) {
//         event.preventDefault();

//         var $this = $(this),
//             blockId = $this.data('scroll'),
//             blockOffset = $(blockId).offset().top;

//         $("#nav a").removeClass("active");
//         $this.addClass("active");

//         $("html, body").animate({
//             scrollTop:  blockOffset
//         }, 500);
//     });



//     /* Menu nav toggle */
//     $("#nav_toggle").on("click", function(event) {
//         event.preventDefault();

//         $(this).toggleClass("active");
//         $("#nav").toggleClass("active");
//     });



//     /* Collapse */
//     $("[data-collapse]").on("click", function(event) {
//         event.preventDefault();

//         var $this = $(this),
//             blockId = $this.data('collapse');

//         $this.toggleClass("active");
//     });


//     /* Slider */
//     $("[data-slider]").slick({
//         infinite: true,
//         fade: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });

// });


$(function() {
 let header = $('.header');
 let hederHeight = header.height(); // вычисляем высоту шапки
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
    $('body').css({
       'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
    });
   } else {
    header.removeClass('header_fixed');
    $('body').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
 });
});

if($(this).scrollTop() > 300) {
    header.css({
      'padding': '5px 0',
      'background': '#f6ffdb',
      'transition': '.3s'
    });
} else {
    header.css({
      'padding': '15px 0',
      'background': '#ffffff',
      'transition': '.3s'
    });
}

