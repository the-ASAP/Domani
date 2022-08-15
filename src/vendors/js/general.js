import * as $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const menuSvgMain = `
    <svg class="menu__icon"
        width="1.8125rem"
        height="0.875rem"
        viewBox="0 0 29 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1 13H28.1049" stroke="white" stroke-linecap="square" />
        <path d="M1 7H28.1049" stroke="white" stroke-linecap="square" />
        <path d="M1 1H28.1049" stroke="white" stroke-linecap="square" />
    </svg>
`;

const menuSvgClose = `
    <svg 
        class="menu__icon" 
        width="1.1875rem" 
        height="1.1875rem" 
        viewBox="0 0 19 19" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M1.12109 1L17.6728 17.5518" stroke="white" stroke-linecap="square"/>
        <path d="M1 17.5518L17.5518 1.00001" stroke="white" stroke-linecap="square"/>
    </svg>
`;

export const owlGallery = (selector, params) => {
  let arrowIcon = `<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_756:1969" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44005 0.286083L0.197414 4.52872C-0.0629354 4.78907 -0.0629354 5.21118 0.197414 5.47153L4.44005 9.71417C4.7004 9.97452 5.12251 9.97452 5.38286 9.71417C5.64321 9.45382 5.64321 9.03171 5.38286 8.77136L1.61163 5.00013L5.38286 1.22889C5.64321 0.968542 5.64321 0.546432 5.38286 0.286083C5.12251 0.025733 4.7004 0.025733 4.44005 0.286083Z"/>
    </mask>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44005 0.286083L0.197414 4.52872C-0.0629354 4.78907 -0.0629354 5.21118 0.197414 5.47153L4.44005 9.71417C4.7004 9.97452 5.12251 9.97452 5.38286 9.71417C5.64321 9.45382 5.64321 9.03171 5.38286 8.77136L1.61163 5.00013L5.38286 1.22889C5.64321 0.968542 5.64321 0.546432 5.38286 0.286083C5.12251 0.025733 4.7004 0.025733 4.44005 0.286083Z" fill="#212223"/>
    <path d="M0.197414 4.52872L-0.745395 3.58591L-0.745395 3.58591L0.197414 4.52872ZM0.197414 5.47153L-0.745395 6.41434L0.197414 5.47153ZM4.44005 9.71417L3.49725 10.657L4.44005 9.71417ZM5.38286 8.77136L6.32567 7.82855L5.38286 8.77136ZM1.61163 5.00013L0.668819 5.94294L-0.273991 5.00013L0.668818 4.05732L1.61163 5.00013ZM-0.745395 3.58591L3.49724 -0.656726L5.38286 1.22889L1.14022 5.47153L-0.745395 3.58591ZM-0.745395 6.41434C-1.52644 5.63329 -1.52644 4.36696 -0.745395 3.58591L1.14022 5.47153C1.40057 5.21118 1.40057 4.78907 1.14022 4.52872L-0.745395 6.41434ZM3.49725 10.657L-0.745395 6.41434L1.14022 4.52872L5.38286 8.77136L3.49725 10.657ZM6.32567 10.657C5.54462 11.438 4.27829 11.438 3.49725 10.657L5.38286 8.77136C5.12251 8.51101 4.7004 8.51102 4.44005 8.77136L6.32567 10.657ZM6.32567 7.82855C7.10672 8.6096 7.10672 9.87593 6.32567 10.657L4.44005 8.77136C4.17971 9.03171 4.17971 9.45382 4.44005 9.71417L6.32567 7.82855ZM2.55444 4.05732L6.32567 7.82855L4.44005 9.71417L0.668819 5.94294L2.55444 4.05732ZM6.32567 2.1717L2.55444 5.94294L0.668818 4.05732L4.44005 0.286083L6.32567 2.1717ZM6.32567 -0.656727C7.10672 0.124322 7.10672 1.39065 6.32567 2.1717L4.44005 0.286083C4.1797 0.546432 4.1797 0.968542 4.44005 1.22889L6.32567 -0.656727ZM3.49724 -0.656726C4.27829 -1.43778 5.54462 -1.43778 6.32567 -0.656727L4.44005 1.22889C4.7004 1.48924 5.12251 1.48924 5.38286 1.22889L3.49724 -0.656726Z" fill="#212223" mask="url(#path-1-inside-1_756:1969)"/>
    </svg>
    `;

  if (params == undefined) params = '';
  const owl = $(selector);
  owl
    .each((i, el) => {
      $(el)
        .addClass('owl-carousel owl-theme')
        .owlCarousel(
          Object.assign(params, {
            lazyLoad: true,
            smartSpeed: 1000,
            navText: [arrowIcon, arrowIcon]
          })
        );
    })
    .trigger('refresh.owl.carousel');
};

export function initTabs(buttons, content) {
  let tab = $(buttons);
  let tabContent = $(content);
  tab.each(function () {
    $(this).on('click', () => {
      const tabAttr = $(this).attr('data-category');
      localStorage.setItem('content', '');

      tab.removeClass('active');
      tabContent.removeClass('active');

      tabContent.each((index, element) => {
        if (tabAttr === $(element).attr('id')) {
          $(element).addClass('active');
          $(`#${tabAttr}`).addClass('active');
        }
      });
    });
  });
}

export const toggleModal = (triggerClass, modalClass, classActive, closeClass) => {
  $(triggerClass).on('click', () => {
    $(modalClass).addClass(classActive);
  });
  $(closeClass).on('click', () => {
    $(modalClass).removeClass(classActive);
  });
};

export const OutsideClick = (elem, activeClass = 'active', attr = '') => {
  $(document).on('mousedown', function (e) {
    if (
      !$(elem).is(e.target) &&
      $(elem).has(e.target).length === 0 &&
      !$(e.target)?.attr('class')?.includes('menuCatalog')
    ) {
      $(elem).removeClass(activeClass);
      if (attr != '') {
        $(elem).attr(attr, '');
      }
      $('body').css({ overflow: 'auto' });
    }
  });
};

export const closeBitrixForm = () => {
  $(document).on('click', function (e) {
    if ($(e.target).hasClass('b24-form')) {
      $('script').each((i, script) => {
        $(script).removeAttr('data-b24-loaded');
      });
      $('.b24-form').remove();
    }
  });
};

const closeModalCatalog = () => {
  const openText = $('.menu__openCatalog').attr('data-openText');

  $('.menuCatalog').slideUp();

  $('.menu__catalog').text(openText);
  $('.menu').addClass('menu_active');

  $('.menu__icon').replaceWith(menuSvgMain);

  $('body').css({ overflow: 'auto' });

  $('.menu').removeClass('fixed');
  $('.aside__menu').removeClass('active');
  $('.menu__openCatalog').removeClass('active');
};

export const toggleModalCatalog = (openMenuBtn) => {
  const closeText = $('.menu__openCatalog').attr('data-closeText');

  $(openMenuBtn).on('click', function () {
    if (!$('header').hasClass('menu_white')) {
      $('header').toggleClass('menu_black');
    }
    if ($('.aside__menu').hasClass('active') || $('.menu__openCatalog').hasClass('active')) {
      closeModalCatalog();
    } else {
      $('.menuCatalog').slideDown();

      $('.aside__menu').addClass('active');
      $('.menu__openCatalog').addClass('active');
      $('.menu__catalog').text(closeText);
      $('.menu').addClass('menu_active');

      $('.menu__icon').replaceWith(menuSvgClose);

      $('.menu').addClass('fixed');

      $('body').css({ overflow: 'hidden' });
    }
  });
};

export function accordion(btn, content, activeClass) {
  $(btn).on('click', function () {
    $(this).toggleClass(activeClass);
    $(this).find(content).slideToggle();
  });
}

export const fixedHeader = () => {
  $(window).on('scroll', () => {
    if ($(window).scrollTop() >= document.documentElement.clientHeight) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  });
};

export const plusSlide = (classSlider, classNumber) => {
  $('.owl-next').on('click', function () {
    numberSlide('right', classSlider, classNumber);
  });
};

export const minusSlide = (classSlider, classNumber) => {
  $('.owl-prev').on('click', function () {
    numberSlide('left', classSlider, classNumber);
  });
};
export function numberSlide(direction, classSlider, classNumber) {
  const items = document.querySelectorAll(`${classSlider} .owl-item`);
  const number = document.querySelector(classNumber);
  let num;
  if (items) {
    num = items.length;
  }

  let numActive = 1;
  for (var key in Object.keys(items)) {
    if (items[key].className === 'owl-item active' && direction === 'right') {
      numActive = Number(key) + 1;
      break;
    }
    if (items[key].className === 'owl-item active' && direction === 'left') {
      numActive = Number(key) + 1;
      break;
    }
  }
  let formattedNumActive = numActive.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  let formattedNum = num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  if (number) {
    number.innerHTML = `${formattedNumActive}/${formattedNum}`;
  }
}

function addClassSlider() {
  const slider = document.querySelector('.city-slider');
  const container = slider.querySelector('.city-slider__wrapper');
  let itemsAddClass = container.firstElementChild.firstElementChild.firstChild.children;
  console.log(itemsAddClass);
  for (let i = 0; i < itemsAddClass.length; i++) {
    console.log(itemsAddClass[i]);
    itemsAddClass[i].classList.add('ct-slider__item');
  }
}
export function numberSlideIndex(direction, classSlider, classNumber) {
  const slider = document.querySelector(`${classSlider}`);
  const items = document.querySelectorAll('.ct-slider__item');
  // items = slider.querySelectorAll(`${classSlider} .owl-item`);
  const number = document.querySelector(classNumber);
  let num;
  if (items) {
    num = items.length;
  }

  let numActive = 1;
  for (var key in Object.keys(items)) {
    if (items[key].className === 'owl-item ct-slider__item active' && direction === 'right') {
      numActive = Number(key) + 1;
      break;
    }
    if (items[key].className === 'owl-item ct-slider__item active' && direction === 'left') {
      numActive = Number(key) + 1;
      break;
    }
  }
  let formattedNumActive = numActive.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  let formattedNum = num.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  console.log(formattedNum);
  if (number) {
    number.innerHTML = `${formattedNumActive}/${formattedNum}`;
  }
}
export const plusSlideIndex = (classSlider, classNumber) => {
  $('.owl-next').on('click', function () {
    numberSlideIndex('right', classSlider, classNumber);
  });
};

export const minusSlideIndex = (classSlider, classNumber) => {
  $('.owl-prev').on('click', function () {
    numberSlideIndex('left', classSlider, classNumber);
  });
};

export const getFooterModal = () => {
  $('.map__point').each((index, point) => {
    $(point).on('click', () => {
      // $('.modal').children('.modal__content').remove();
      // $('.modal').children('.modal__more').remove();
      // $('.modal').children('.bx_incl_area_1').remove();
      // $('.modal').children('script').remove();
      $('.modal').empty();

      const ids = JSON.parse($(point).attr('data-cities'));

      const idsParams = ids
        .map((id, index) => (index === 0 ? `?id[]=${id}` : `&id[]=${id}`))
        .join('');

      $.ajax({
        url: `${window.location.origin}/local/ajax/city.php${idsParams}`
      }).done((data) => {
        $('.modal').prepend(data);

        owlGallery('.city-slider__items', {
          nav: true,
          navContainer: '.modal__buttons',
          loop: false,
          rewind: true,
          dots: false,
          mouseDrag: false,
          touchDrag: false,
          // autoHeight: true,

          // margin: 11,
          responsive: {
            0: {
              items: 1
            },
            500: {
              items: 1,
              nav: true
            },
            700: {
              items: 1,
              nav: true
            },
            800: {
              items: 1,
              nav: true
            },
            1000: {
              items: 1,
              nav: true
            }
          }
        });
        addClassSlider();
        numberSlideIndex('right', '.city-slider', '.modal__date');
        plusSlideIndex('.city-slider', '.modal__date');
        minusSlideIndex('.city-slider', '.modal__date');
        owlGallery('.city-image__slider', {
          nav: false,
          navContainer: '.city-image__nav',
          loop: false,
          rewind: false,
          dots: true,

          // margin: 11,
          responsive: {
            0: {
              items: 1
            },
            500: {
              items: 1,
              nav: true
            },
            700: {
              items: 1,
              nav: true
            },
            800: {
              items: 1,
              nav: true
            },
            1000: {
              items: 1,
              nav: true
            }
          }
        });
      });
    });
  });
};

export function rememberCatalogContent(items) {
  const products = $(items);

  if (products.length) {
    products.each((i, product) => {
      $(product).on('click', function () {
        let content = $(this).attr('data-content');

        localStorage.setItem('content', content);
      });
    });
  }
}

export const fillCatalogContent = () => {
  if (localStorage.getItem('content')) {
    const tabButtons = $('.tab__links');
    const tabs = $('.tab__content');

    tabButtons.removeClass('active');
    tabs.removeClass('active');

    tabs.each(function (i, tab) {
      if (localStorage.getItem('content') === $(tab).attr('id')) {
        $(tab).addClass('active');
      }
    });

    tabButtons.each((i, button) => {
      if (localStorage.getItem('content') === $(button).attr('data-category')) {
        $(button).addClass('active');
      }
    });
  }
};

export function openSelect() {
  const selectSingle_title = $('.select__title');

  selectSingle_title.each(function () {
    $(this).on('click', function () {
      const selectSingle = $(this).closest('.select');

      if ('active' === selectSingle.attr('data-state')) {
        selectSingle.attr('data-state', '');
      } else {
        selectSingle.attr('data-state', 'active');
      }
    });

    const selectSingle_labels = $(this).siblings('.select__content').children('.select__label');

    selectSingle_labels.each(function () {
      $(this).on('click', (e) => {
        $(this).closest('.select__content').siblings('.select__title').text(e.target.textContent);
        $(this).closest('.select').attr('data-state', '');
      });
    });
  });
}

export function openSelectMobile() {
  const selectSingle_title = $('.select__title');

  selectSingle_title.each(function () {
    $(this).on('click', function () {
      const selectSingle = $(this).closest('.select');

      if ('active' === selectSingle.attr('data-state')) {
        selectSingle.attr('data-state', '');
      } else {
        selectSingle.attr('data-state', 'active');
      }
    });

    const selectSingle_labels = $(this).siblings('.select__content').children('.select__label');

    selectSingle_labels.each(function () {
      $(this).on('click', (e) => {
        $(this)
          .closest('.select__content')
          .siblings('.select__title')
          .attr('data-category', e.target.getAttribute('for'))
          .text(e.target.textContent);
        $(this).closest('.select').attr('data-state', '');
      });
    });
  });
}

export function initSelect(selectClass, content) {
  const selectSingle_title = $('.select__title');

  selectSingle_title.each(function () {
    const selectSingle_labels = $(this).siblings('.select__content').children('.select__label');

    selectSingle_labels.each(function () {
      $(this).on('click', () => {
        let tabContent = $(content);
        let sel = $(selectClass);

        const selAttr = sel.attr('data-category');
        localStorage.setItem('content', '');

        sel.remove('data-category');
        tabContent.removeClass('active');

        tabContent.each((index, element) => {
          if (selAttr === $(element).attr('id')) {
            $(element).addClass('active');
            sel.attr('data-category', $(element).attr('id'));
          }
        });
      });
    });
  });
}

export const pageUp = () => {
  $('.aside__up').on('click', () => {
    $('html, body').animate({ scrollTop: '0px' }, 300);
  });
};

export const cutColorsCount = () => {
  $('.product__colors').each((_, colors) => {
    if ($(colors).children().length > 5) {
      $(colors).children().slice(5).remove();
    }
  });
};

export const scrollToMap = (button) => {
  $(button).on('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('footer').offset().top
      },
      1000
    );

    if ($('.menu').hasClass('menu_active')) {
      closeModalCatalog();
    }
  });
};

export const validateForm = (button) => {
  let regexPhone =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  let regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $(button).on('click', (e) => {
    let phone = $(button).siblings('.phone');
    let mail = $(button).siblings('.mail');

    $('.validation__error')?.remove();

    if (!regexPhone.test(phone.val()) || !regexMail.test(mail.val())) {
      e.preventDefault();

      $('.cooperationModal__send')
        .closest('form')
        .append('<div class="validation__error">Проверьте корректность введенных данных</div>');
    }
  });
};

export function setEqualHeight(columns) {
  let tallestcolumn = 0;
  columns.each(function () {
    let currentHeight = $(this).height();
    if (currentHeight > tallestcolumn) {
      tallestcolumn = currentHeight + 60;
    }
  });
  columns.height(tallestcolumn);
}

export const createYouTubeEmbedLink = (btn, container) => {
  $(btn).each((i, el) => {
    let link = $(el).attr('data-src');
    let linkStart = 'https://www.youtube.com/embed/';
    let linkEnd = '?rel=0&showinfo=0&autoplay=1';
    let newLink = linkStart + link.slice(link.indexOf('=') + 1, link.length) + linkEnd;
    $(el).on('click', function () {
      $(this)
        .parent(container)
        .empty()
        .append(
          `<iframe class="production__frame" src="${newLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    });
  });
};
