

$(document).ready(function(){
  $('.card-wrap a').click(function(){
    $('.modal').addClass("show")
    $('.modal').append(`<div class="item_box">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("video")}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`)
  })
  $('.modal .dim').click(function(){
    $('.modal .item_box').remove()
    $('.modal').removeClass('show')
  })
  let tabMenu = $('.tabMenu li'),
  tabSlider = $('.tabs > div')
  tabMenu.click(function(){
  tabMenu.removeClass('active')
  $(this).addClass("active")
  tabSlider.hide();
  let target = $(this).find('a').attr("href")
  $(target).show()
  })
  tabMenu.eq(0).trigger('click')

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // rewind: true,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".firstSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
})