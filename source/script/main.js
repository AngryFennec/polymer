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
  var currentWidth = document.body.clientWidth;
  var currentSlide = 0;
  $('.review__button--left').prop('disabled',true);

  // реагирование слайдера на ресайз окна
  window.addEventListener("resize", function () {
    currentWidth = document.body.clientWidth;

    // если десктоп, то сбрасываем слайдер и показываем по 3
    if (document.body.clientWidth > 1200) {
      setTimeout( function (){
        $(slides).hide();
        currentSlide = 0;
        $('.review__button--right').prop('disabled',false);
        $(slides[currentSlide]).show().next().show().next().show();
      }, 200)
    }
    // если меньше десктопа, то сбрасываем слайдер и показываем по 1
    else {
      setTimeout( function (){
        $('.review__button--right').prop('disabled',false);
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
        $(slides[currentSlide]).hide().next().hide().next().hide();
        currentSlide ++;
          if (currentSlide > slides.length-4) {
          $('.review__button--right').prop('disabled',true);
        } else {
          $('.review__button--right').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn().next().fadeIn().next().fadeIn()
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
        $(slides[currentSlide]).hide().next().hide().next().hide();
          currentSlide --;
        if (currentSlide < 1) {
          $('.review__button--left').prop('disabled',true);
        } else {
          $('.review__button--left').prop('disabled',false);
        };
        $(slides[currentSlide]).fadeIn().next().fadeIn().next().fadeIn();
      }
    });

    // звездочки
    var svg = $(".review__label svg");
    svg.on("click", function() {
      $(svg).css("fill", "#C4C4C4");
      for (var i = 0; i <= $(this).attr("data-number"); i++)
      $(svg[i]).css("fill", "#0047FF");
    });

    var button=document.querySelector(".menu-list-button-open");
    var modal=document.querySelector(".menu-list-button");
    var closeButton=modal.querySelector(".feadback__close-button");

    var isValid = function(sample) {
      var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
      return regexp.test(sample);
    };

    var show = function(e,element) {
      e.preventDefault();
      element.classList.remove("visually-hidden");
    }

    var hidden = function(e,element) {
      e.preventDefault();
      element.classList.add("visually-hidden");
    }

    button.addEventListener ("click", function (evt) {
      menu.classList.toggle("nav-container--close");
      over.forEach(function (item) {item.classList.toggle("overlay--close");});
      burger.classList.toggle("menu-button--close");
      show(evt, modal);
    });

    closeButton.addEventListener ("click", function (evt) {
      hidden(evt, modal);
    });

    var button2=document.querySelector(".header-button-open");
    var modal2=document.querySelector(".header-button");
    var closeButton2=modal2.querySelector(".feadback__close-button");

    var isValid = function(sample) {
      var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
      return regexp.test(sample);
    };

    var show = function(e,element) {
      e.preventDefault();
      element.classList.remove("visually-hidden");
    }

    var hidden = function(e,element) {
      e.preventDefault();
      element.classList.add("visually-hidden");
    }

    button2.addEventListener ("click", function (evt) {
      show(evt, modal2);
    });

    closeButton2.addEventListener ("click", function (evt) {
      hidden(evt, modal2);
    });
    var button3=document.querySelector(".work-button-open");
    var modal3=document.querySelector(".work-button");
    var closeButton3=modal3.querySelector(".feadback__close-button");

    var isValid = function(sample) {
      var regexp = /\+\d{1}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
      return regexp.test(sample);
    };

    var show = function(e,element) {
      e.preventDefault();
      element.classList.remove("visually-hidden");
    }

    var hidden = function(e,element) {
      e.preventDefault();
      element.classList.add("visually-hidden");
    }

    button3.addEventListener ("click", function (evt) {
      show(evt, modal3);
    });

    closeButton3.addEventListener ("click", function (evt) {
      hidden(evt, modal3);
    });



 var burger = document.querySelector(".menu-button");
   var menu = document.querySelector(".nav-container");
   var over = Array.prototype.slice.call(document.querySelectorAll(".overlay"));


    menu.classList.add("nav-container--close");
     burger.classList.add("menu-button--close");

     over.forEach(function (item) {item.classList.add("overlay--close");});

     burger.addEventListener ("click", function (evt) {
     evt.preventDefault();
     menu.classList.toggle("nav-container--close");
     over.forEach(function (item) {item.classList.toggle("overlay--close");});
     burger.classList.toggle("menu-button--close");
    });

    var examplesButton = document.querySelector(".examples__button");
    var examplesBox = document.querySelector(".examples__box--2");

    examplesButton.addEventListener("click", function () {
      console.log(examplesBox);
      examplesBox.classList.toggle("open");
      examplesButton.classList.toggle("open-btn");
    });


    var imagesArray = [
      "./images/work-desktop-pickup.png",
      "./images/work-desktop-mini.png",
      "./images/work-desktop.png",
      "./images/work-desktop-middle.png",
      "./images/work-desktop-offroad.png",
      "./images/work-desktop-prem.png"];
      var imagesTabletArray = [
        "./images/work-tablet-pickup.png",
        "./images/work-tablet-mini.png",
        "./images/work-tablet.png",
        "./images/work-tablet-middle.png",
        "./images/work-tablet-offroad.png",
        "./images/work-tablet-prem.png"];
        var imagesMobileArray = [
          "./images/work-mobile-pickup.png",
          "./images/work-mobile-mini.png",
          "./images/work-mobile.jpg",
          "./images/work-mobile-middle.png",
          "./images/work-mobile-offroad.png",
          "./images/work-mobile-prem.png"];
          var pricesArray = [
            '40 800', '40 800', '37 600', '31 200', '37 600', '48 800'
          ];
    var workButtons = Array.prototype.slice.call(document.querySelectorAll(".work__options-item"));
    var workWrapper = document.querySelector(".work__wrapper");
    var priceValue = document.querySelector('.tabs__inner-price-value');
    function setDesktopBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.classList.remove('work__options-item--active');
        workButton.removeEventListener('click', setLaptopBackground);
        workButton.removeEventListener('click', setTabletBackground);
        workButton.removeEventListener('click', setMobileBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        workWrapper.style.background = 'url(' + imagesArray[index] + ') 830px 280px no-repeat,' + ' url("./images/klass_avto.svg") 0px -247px no-repeat';
        workButton.classList.add('work__options-item--active');
        priceValue.textContent = pricesArray[index];
      };
    }
    function setLaptopBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.removeEventListener('click', setDesktopBackground);
        workButton.removeEventListener('click', setTabletBackground);
        workButton.removeEventListener('click', setMobileBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        var position = '610px 310px';
        if (index === 0 || index === 4) {
          position = '660px 370px';
        }
        if (index === 3 || index === 5) {
          position = '650px 370px';
        }
        workWrapper.style.background = 'url(' + imagesArray[index] + ')' + position + ' no-repeat,' + ' url("./images/border-mini.svg") 200px 305px no-repeat, url("./images/klass_avto-1200.svg") -359px -237px no-repeat';
          workButton.classList.add('work__options-item--active');
          priceValue.textContent = pricesArray[index];
          };

        }
    function setTabletBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.removeEventListener('click', setDesktopBackground);
        workButton.removeEventListener('click', setLaptopBackground);
        workButton.removeEventListener('click', setMobileBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
        var position = '170px 480px';
        if (index !== 2) {
          position = '240px 480px';
        }
            workWrapper.style.background = 'url(' + imagesTabletArray[index] + ') no-repeat ' + position +',' + ' url("./images/klass_avto_tabletka.svg") -3px -115px no-repeat';
            workButton.classList.add('work__options-item--active');
            priceValue.textContent = pricesArray[index];
          };
        }
    function setMobileBackground(workButton, index) {
      return function (evt) {
        evt.preventDefault();
        workButton.removeEventListener('click', setDesktopBackground);
        workButton.removeEventListener('click', setTabletBackground);
        workButton.removeEventListener('click', setLaptopBackground);
        workButtons.forEach(item => {
          item.classList.remove('work__options-item--active');
        });
            workWrapper.style.background = 'url("./images/features-work-mobile-pseudo1.png") -57px -2px no-repeat, url(' + imagesMobileArray[index] + ') 0px 40px no-repeat';
            workButton.classList.add('work__options-item--active');
            priceValue.textContent = pricesArray[index];
          };
        }
    function onStartCallbacks() {
      priceValue.textContent = pricesArray[findIndex()];
      if (document.body.clientWidth >= 1920) {
        workWrapper.style.background = 'url(' + imagesArray[findIndex()] + ') 830px 280px no-repeat,' + ' url("./images/klass_avto.svg") 0px -247px no-repeat';
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setDesktopBackground(item, i));
        });
      }
      else if (document.body.clientWidth < 1920 && document.body.clientWidth >= 1200) {
        var position = '610px 310px';
        if (findIndex() === 0 || findIndex() === 4) {
          position = '660px 370px';
        }
        if (findIndex() === 3 || findIndex() === 5) {
          position = '650px 370px';
        }
        workWrapper.style.background = 'url(' + imagesArray[findIndex()] + ')' + position + ' no-repeat,' + ' url("./images/border-mini.svg") 200px 305px no-repeat, url("./images/klass_avto-1200.svg") -359px -237px no-repeat';
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setLaptopBackground(item, i));
        });
      }
      else if (document.body.clientWidth < 1200 && document.body.clientWidth >= 768) {
        var position = '170px 480px';
        if (index !== 2) {
          position = '240px 480px';
        }
        workWrapper.style.background = 'url(' + imagesTabletArray[findIndex()] + ') no-repeat ' + position +',' + ' url("./images/klass_avto_tabletka.svg") -3px -115px no-repeat';
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setTabletBackground(item, i));
        });
      }
      else {
        workWrapper.style.background = 'url("./images/features-work-mobile-pseudo1.png") -57px -2px no-repeat, url(' + imagesMobileArray[findIndex()] + ') 0px 40px no-repeat';
        workButtons.forEach((item, i) => {
          item.addEventListener("click", setMobileBackground(item, i));
        });
      }
    }
    window.onresize = function () {
      onStartCallbacks();
    };

    function findIndex() {
      var ind = 0;
      workButtons.forEach((item, i) => {
        if (item.classList.contains('work__options-item--active')) {
          ind = i;
        }
      });
      return ind;
    }

    onStartCallbacks();
})();
