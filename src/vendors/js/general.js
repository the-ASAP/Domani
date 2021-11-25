import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

export const owlGallery = (selector, params) => {
    let arrowIcon = `<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-inside-1_756:1969" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44005 0.286083L0.197414 4.52872C-0.0629354 4.78907 -0.0629354 5.21118 0.197414 5.47153L4.44005 9.71417C4.7004 9.97452 5.12251 9.97452 5.38286 9.71417C5.64321 9.45382 5.64321 9.03171 5.38286 8.77136L1.61163 5.00013L5.38286 1.22889C5.64321 0.968542 5.64321 0.546432 5.38286 0.286083C5.12251 0.025733 4.7004 0.025733 4.44005 0.286083Z"/>
    </mask>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.44005 0.286083L0.197414 4.52872C-0.0629354 4.78907 -0.0629354 5.21118 0.197414 5.47153L4.44005 9.71417C4.7004 9.97452 5.12251 9.97452 5.38286 9.71417C5.64321 9.45382 5.64321 9.03171 5.38286 8.77136L1.61163 5.00013L5.38286 1.22889C5.64321 0.968542 5.64321 0.546432 5.38286 0.286083C5.12251 0.025733 4.7004 0.025733 4.44005 0.286083Z" fill="#212223"/>
    <path d="M0.197414 4.52872L-0.745395 3.58591L-0.745395 3.58591L0.197414 4.52872ZM0.197414 5.47153L-0.745395 6.41434L0.197414 5.47153ZM4.44005 9.71417L3.49725 10.657L4.44005 9.71417ZM5.38286 8.77136L6.32567 7.82855L5.38286 8.77136ZM1.61163 5.00013L0.668819 5.94294L-0.273991 5.00013L0.668818 4.05732L1.61163 5.00013ZM-0.745395 3.58591L3.49724 -0.656726L5.38286 1.22889L1.14022 5.47153L-0.745395 3.58591ZM-0.745395 6.41434C-1.52644 5.63329 -1.52644 4.36696 -0.745395 3.58591L1.14022 5.47153C1.40057 5.21118 1.40057 4.78907 1.14022 4.52872L-0.745395 6.41434ZM3.49725 10.657L-0.745395 6.41434L1.14022 4.52872L5.38286 8.77136L3.49725 10.657ZM6.32567 10.657C5.54462 11.438 4.27829 11.438 3.49725 10.657L5.38286 8.77136C5.12251 8.51101 4.7004 8.51102 4.44005 8.77136L6.32567 10.657ZM6.32567 7.82855C7.10672 8.6096 7.10672 9.87593 6.32567 10.657L4.44005 8.77136C4.17971 9.03171 4.17971 9.45382 4.44005 9.71417L6.32567 7.82855ZM2.55444 4.05732L6.32567 7.82855L4.44005 9.71417L0.668819 5.94294L2.55444 4.05732ZM6.32567 2.1717L2.55444 5.94294L0.668818 4.05732L4.44005 0.286083L6.32567 2.1717ZM6.32567 -0.656727C7.10672 0.124322 7.10672 1.39065 6.32567 2.1717L4.44005 0.286083C4.1797 0.546432 4.1797 0.968542 4.44005 1.22889L6.32567 -0.656727ZM3.49724 -0.656726C4.27829 -1.43778 5.54462 -1.43778 6.32567 -0.656727L4.44005 1.22889C4.7004 1.48924 5.12251 1.48924 5.38286 1.22889L3.49724 -0.656726Z" fill="#212223" mask="url(#path-1-inside-1_756:1969)"/>
    </svg>
    `;
  
    if (params == undefined) params = "";
    const owl = $(selector);
    owl
      .each((i, el) => {
        $(el)
          .addClass("owl-carousel owl-theme")
          .owlCarousel(
            Object.assign(params, {
              lazyLoad: true,
              smartSpeed: 1000,
              navText: [arrowIcon, arrowIcon],
            })
          );
      })
      .trigger("refresh.owl.carousel");
  };

export function initTabs(buttons, content) {
  let tab = $(buttons);
  let tabContent = $(content);

  tab.each(function () {
    $(this).on("click", () => {
      const tabAttr = $(this).attr("data-category");
      localStorage.setItem("content", "");

      tab.removeClass("active");
      tabContent.removeClass("active");

      tabContent.each((index, element) => {
        if (tabAttr === $(element).attr("id")) {
          $(this).addClass("active");
          $(`#${tabAttr}`).addClass("active");
        }
      });
    });
  });
}

export const toggleModal = (triggerClass, modalClass, classActive, closeClass) => {
  $(triggerClass).on("click", () => {
    $(modalClass).addClass(classActive);
    $("body").css({ overflow: "hidden" });
  });
  $(closeClass).on("click", () => {
    $(modalClass).removeClass(classActive);
    $("body").css({ overflow: "auto" });
  });
};

export const OutsideClick = (elem, activeClass = "active", attr = "") => {
  $(document).on("mousedown", function (e) {
    if (!$(elem).is(e.target) && $(elem).has(e.target).length === 0) {
      $(elem).removeClass(activeClass);
      $(elem).attr(attr, "");
      $("body").css({ overflow: "auto" });
    }
  });
};

export const openModalCatalog = () => {
  $(".menu__openCatalog").on("click", function () {
    $(this).toggleClass("menu__openCatalog_active");
    if (!$("header").hasClass("menu_white")) {
      $("header").toggleClass("menu_black");
    }
    $(".menuCatalog").slideToggle();
    if ($(this).hasClass("menu__openCatalog_active")) {
      $(".menu__catalog").text("Закрыть");
      $(".menu").addClass("menu_active");

      $(".menu__icon").replaceWith(menuSvgClose);
      $("body").css({ overflow: "hidden" });
    } else {
      $(".menu__catalog").text("Каталог");
      $(".menu").removeClass("menu_active");

      $(".menu__icon").replaceWith(menuSvgMain);

      $("body").css({ overflow: "auto" });
    }
  });
};

export function accordion(btn, content, activeClass) {
  $(btn).on("click", function () {
    $(this).toggleClass(activeClass);
    $(this).find(content).slideToggle();
  });
}