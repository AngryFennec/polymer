(function () {

  //запуск видео по кнопке
  var playButton = document.querySelector(".examples__play-button");
  var frame = document.querySelector(".examples__frame");

  playButton.addEventListener("click", function() {
    frame.src +="?autoplay=1";
    setTimeout(function() {frame.style.display="block"}, 1000);
  });

  // открытие формы для отзыва

  $('.review__open-form-button').on('click', function() {
    $(".review__form").slideToggle({duration: 400, easing: 'linear'});
  });

  // установки по умолчанию
  var slides = document.querySelectorAll(".review__block");
  var currentWidth = window.innerWidth;
  var currentSlide = 0;
  $('.review__button--left').prop('disabled',true);

  // реагирование слайдера на ресайз окна
  window.addEventListener("resize", function () {
    currentWidth = window.innerWidth;

    // если десктоп, то сбрасываем слайдер и показываем по 3
    if (window.innerWidth > 1200) {
      setTimeout( function (){
        $(slides).hide();
        currentSlide = 0;
        $(slides[currentSlide]).show();
        $(slides[currentSlide]).next().show();
        $(slides[currentSlide]).next().next().show();
      }, 200)
    }
    // если меньше десктопа, то сбрасываем слайдер и показываем по 1
    else {
      setTimeout( function (){
        console.log(1);
        $(slides).hide();
        currentSlide = 0;
        $(slides[currentSlide]).show();
      }, 200)
    }
  });

  //листание вправо
  $('.review__button--right').on('click', function(){
    $('.review__button--left').prop('disabled',false);
    // поведение при ширине меньше десктопа
  if (currentWidth < 1200){
      $(slides[currentSlide]).hide();
        currentSlide++;
        if (currentSlide > slides.length-2) {
          $('.review__button--right').prop('disabled',true);
          } else {
          $('.review__button--right').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn(400);
      }
      // поведение шире десктопа
      else {
        $(slides[currentSlide]).hide();
        $(slides[currentSlide]).next().hide();
        $(slides[currentSlide]).next().next().hide();
        currentSlide ++;
          if (currentSlide > slides.length-4) {
          $('.review__button--right').prop('disabled',true);
        } else {
          $('.review__button--right').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn();
        $(slides[currentSlide]).next().fadeIn();
        $(slides[currentSlide]).next().next().fadeIn();
      }
    });
    //листание влево
    $('.review__button--left').on('click', function(){
    $('.review__button--right').prop('disabled',false);
    // поведение при ширине меньше десктопа
    if (currentWidth < 1200){
      $(slides[currentSlide]).hide();
        currentSlide--;
        if (currentSlide < 1) {
            $('.review__button--left').prop('disabled',true);
          } else {
            $('.review__button--left').prop('disabled',false);
          };
        $(slides[currentSlide]).fadeIn(400);
        }
        // поведение при ширине больше десктопа
      else {
        $(slides[currentSlide]).hide();
        $(slides[currentSlide]).next().hide();
        $(slides[currentSlide]).next().next().hide();
          currentSlide --;
        if (currentSlide < 1) {
          $('.review__button--left').prop('disabled',true);
        } else {
          $('.review__button--left').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn();
        $(slides[currentSlide]).next().fadeIn();
        $(slides[currentSlide]).next().next().fadeIn();
      }
    });

    // звездочки
    var svg = $(".review__label svg");
    svg.on("click", function() {
      $(svg).css("fill", "#C4C4C4");
      for (var i = 0; i <= $(this).attr("data-number"); i++)
      $(svg[i]).css("fill", "#0047FF");
    });


 var burger = document.querySelector(".menu-button");
   var menu = document.querySelector(".nav-container");

    menu.classList.add("nav-container--close");
     burger.classList.add("menu-button--close");

     burger.addEventListener ("click", function (evt) {
     evt.preventDefault();
     menu.classList.toggle("nav-container--close");
     burger.classList.toggle("menu-button--close");
    });
})();

