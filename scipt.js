$(document).ready(function () {
  $(".logo").slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25,
    cssEase: "linear",
  });
});

$(document).ready(function () {
  $("#cards").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false
  });
});
