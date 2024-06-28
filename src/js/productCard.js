import * as $ from 'jquery';
import {
  plusSlide,
  minusSlide,
  numberSlide,
  owlGallery,
  initTabs,
  toggleModal,
  pageUp,
  OutsideClick,
  toggleModalCatalog,
  accordion,
  fillCatalogContent,
  getFooterModal,
  scrollToMap,
  closeBitrixForm,
  setEqualHeight
} from '../vendors/js/general';
import '../scss/productCard.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const texttoolkit = () => {
  $('.details__tooltip').mouseenter(function () {
    console.log($(this))
    const indexTooltip = $(this).attr('data-tooltip');
    let activeButtonPosition = null;

    $('.details__image_number').each(function (index, button) {
      if ($(button).attr('data-number') === indexTooltip) {
        activeButtonPosition = $(button).offset();
      }
    });

    $('.details__tooltiptext').each(function (index, tooltiptext) {
      $(tooltiptext).removeClass('active');

      if ($(tooltiptext).attr('data-tooltiptext') === indexTooltip) {
        if($(window).width() <= 768){
          $(tooltiptext).offset({
            top: activeButtonPosition?.top - $(tooltiptext).innerHeight() - 10,
            left: activeButtonPosition?.left - $(tooltiptext).innerWidth() / 2 + 15
          });
          $(tooltiptext).css('left', '0px')
        }
        else{
          $(tooltiptext).offset({
            top: activeButtonPosition?.top - $(tooltiptext).innerHeight() - 10,
            left: activeButtonPosition?.left - $(tooltiptext).innerWidth() / 2 + 15
          });
        }
        

        $(tooltiptext).addClass('active');
      }
    });
  });

  $('.details__tooltip').mouseleave(function () {
    $('.details__tooltiptext').each(function (index, tooltiptext) {
      $(tooltiptext).removeClass('active');
    });
  });
};

$().ready(() => {
  toggleModal('.map__point', '.modal', 'modal__active', '.modal__close');
  // toggleModal('.aside__city', '.choiceCity', 'choiceCity__active', '.choiceCity__close');

  OutsideClick('.modal', 'modal__active');
  OutsideClick('.select', '', 'data-state');
  OutsideClick('.menuCatalog');

  closeBitrixForm();

  texttoolkit();

  scrollToMap('.menu__buy');scrollToMap('.aside__city');

  initTabs();
  initTabs('.tab__links', '.tab__content');
  //initTabs(".horTab", ".variants__item");

  fillCatalogContent();

  toggleModalCatalog('.menu__openCatalog');
  toggleModalCatalog('.aside__menu');

  accordion('.menuCatalog__Accordion', '.menuCatalog__information', 'activeAccordion');

  accordion('.details__Accordion', '.details__information', 'activeAccordion');

  getFooterModal();

  setEqualHeight($('.product'));

  owlGallery('.variants__slider_items', {
    nav: true,
    navContainer: '.variants__controls',
    loop: false,
    rewind: true,
    dots: false,

    margin: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1,
        nav: false
      },
      700: {
        items: 1,
        nav: false
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true
      }
    }
  });

  numberSlide('right', '.variants__slider', '.variants__number-slide');
  plusSlide('.variants__slider', '.variants__number-slide');
  minusSlide('.variants__slider', '.variants__number-slide');

  owlGallery('.ideas__slider_items', {
    nav: true,
    navContainer: '.ideas__controls',
    loop: false,
    rewind: true,
    dots: false,

    margin: 11,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1,
        nav: false
      },
      700: {
        items: 1,
        nav: false
      },
      800: {
        items: 2,
        nav: false
      },
      1000: {
        items: 2,
        nav: true
      }
    }
  });
  numberSlide('right', '.ideas__slider', '.ideas__number-slide');
  plusSlide('.ideas__slider', '.ideas__number-slide');
  minusSlide('.ideas__slider', '.ideas__number-slide');

  owlGallery('.doors__slider_items', {
    nav: true,
    navContainer: '.doors__controls',
    loop: false,
    rewind: true,
    dots: false,

    margin: 11,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1,
        nav: false
      },
      700: {
        items: 2,
        nav: false
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true
      }
    }
  });

  pageUp();
});
