import $ from "jquery"
import "slick-carousel"


$(".review-list").slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    // fade: true,
    // cssEase: 'linear',
    centerMode: false,
    mobileFirst: true,
  responsive: [
      { 
          breakpoint: 1279,
          settings: "unslick",
    }
]
});