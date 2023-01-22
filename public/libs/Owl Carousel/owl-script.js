$(".specialist .owl-carousel").owlCarousel({
  loop: true,
  margin: 25,
  items: 3,
  nav: true,
  autoplay:true,
  autoplayTimeout: 2000,
  smartSpeed: 1000,
  stagePadding: 150,
  lazyLoad: true,
  nav: false,
  dots: false,
  responsive: {
    1400: {
      items: 3,
      stagePadding: 2,
    },
    1200: {
      items: 2,
      stagePadding: 120,
    },
    992: {
      items: 2,
      stagePadding: 10,
    },
    576: {
      items: 2,
      stagePadding: 30
    },
    320: {
      items: 2,
      stagePadding: 0
    },
  }
});
$(".about-page .owl-carousel").owlCarousel({
  stagePadding: 80,
  loop: true,
  margin: 15,
  items: 4,
  nav: true,
  autoplay:true,
  autoplayTimeout: 2000,
  smartSpeed: 1000,
  lazyLoad: true,
  nav: false,
  dots: false,
  responsive: {
    1400: {
      items: 3,
      stagePadding: 2,
    },
    1200: {
      items: 3,
      stagePadding: 1,
    },
    992: {
      items: 3,
      stagePadding: -150,
    },
    768: {
      items: 2,
      stagePadding: -10,
    },
    576: {
      items: 2,
      stagePadding: -10,
    },
    320: {
      items: 2,
      stagePadding: 0,
    }
  },
});
$(".nashi-klient .owl-carousel").owlCarousel({
  stagePadding: 80,
  loop: true,
  margin: 15,
  items: 5,
  nav: true,
  autoplay:true,
  autoplayTimeout: 2000,
  smartSpeed: 1000,
  lazyLoad: true,
  nav: false,
  dots: false,
  responsive: {
    1400: {
      items: 4,
    },
    1200: {
      items: 3,
    },
    992: {
      items: 3,
    },
    768: {
      items: 2,
    },
    576: {
      items: 2,
      stagePadding: 40,
      margin: 0
    },
    350: {
      items: 2,
      stagePadding: 20,
      margin: 0
    },
    260: {
      items: 1,
      stagePadding: 10,
      margin: 0
    }
  },
});
$(".otziv-cards .owl-carousel").owlCarousel({
  loop: true,
  items: 3,
  nav: true,
  autoplay:true,
  autoplayTimeout: 1500,
  smartSpeed: 1000,
  lazyLoad: true,
  nav: false,
  dots: false,
  responsive: {
    1400: {
      items: 3,
    },
    768: {
      items: 2,
      stagePadding: 0,
    },
    320: {
      items: 1,
      margin: 10
    },
  },
});
