export const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1.65,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1.65,
        slidesToScroll: 1,
        initialSlide: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.65,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1.65,
        slidesToScroll: 1,
      }
    }
  ]
};