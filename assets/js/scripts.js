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

$(document).ready(function() {
  // При нажатии на кнопку редактирования профиля открываем модальное окно
  $('#editProfileModal').on('shown.bs.modal', function () {
    $('#username').focus();
  });
});
// Получить ссылку на контейнер комментариев
const commentSection = document.getElementById('comment-section');

// Добавить класс "comment-column" к контейнеру комментариев
commentSection.classList.add('comment-column');


$(document).ready(function() {
  $(".dropdown img.flag").addClass("flagvisibility");

  $(".dropdown dt a").click(function() {
      $(".dropdown dd ul").toggle();
  });
              
  $(".dropdown dd ul li a").click(function() {
      var text = $(this).html();
      $(".dropdown dt a span").html(text);
      $(".dropdown dd ul").hide();
      $("#result").html("Selected value is: " + getSelectedValue("sample"));
  });
              
  function getSelectedValue(id) {
      return $("#" + id).find("dt a span.value").html();
  }

  $(document).bind('click', function(e) {
      var $clicked = $(e.target);
      if (! $clicked.parents().hasClass("dropdown"))
          $(".dropdown dd ul").hide();
  });


  $("#flagSwitcher").click(function() {
      $(".dropdown img.flag").toggleClass("flagvisibility");
  });
});

  $(window).load(function() {
    $("#flexiselDemo3").flexisel({
      visibleItems: 5,
      animationSpeed: 1000,
      autoPlay: true,
      autoPlaySpeed: 3000,    		
      pauseOnHover: true,
      enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
          portrait: { 
            changePoint:480,
            visibleItems: 1
          }, 
          landscape: { 
            changePoint:640,
            visibleItems: 2
          },
          tablet: { 
            changePoint:768,
            visibleItems: 3
          }
        }
      });
      
  });

  $(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
      var comment = $('#comment').val();
      if (comment !== '') {
        var card = $('<div class="card mb-3"><div class="card-body"><p class="card-text1">' + comment + '</p></div></div>');
        $('#comment-section').append(card);
        $('#comment').val('');
      }
    });
  });