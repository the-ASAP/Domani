import * as $ from "jquery";
import {owlGallery, initTabs, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
import "../scss/style.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

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

const createYouTubeEmbedLink = (btn, container) => {
  $(btn).each((i, el) => {
    let link = $(el).attr("data-src"),
      linkStart = "https://www.youtube.com/embed/",
      linkEnd = "?rel=0&showinfo=0&autoplay=1";
    let newLink =
      linkStart + link.slice(link.indexOf("=") + 1, link.length) + linkEnd;
    $(el).on("click", function () {
      $(this)
        .parent(container)
        .empty()
        .append(
          `<iframe class="production__frame" src="${newLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
    });
  });
};

function select(btn, content, activeClass, closeButton) {
  $(btn || closeButton).on("click", function () {
    $(btn).toggleClass(activeClass);
    $(content).slideToggle();
  });
  $(document).on("mousedown", function (e) {
    if (!$(btn).is(e.target) && $(btn).hasClass(activeClass)) {
      $(btn).toggleClass(activeClass);
      $(content).slideToggle();
    }
  });
}

function openSelect() {
  const selectSingle_title = $(".select__title");

  selectSingle_title.each(function () {
    $(this).on("click", function () {
      const selectSingle = $(this).closest(".select");

      if ("active" === selectSingle.attr("data-state")) {
        selectSingle.attr("data-state", "");
      } else {
        selectSingle.attr("data-state", "active");
      }
    });

    const selectSingle_labels = $(this)
      .siblings(".select__content")
      .children(".select__label");

    selectSingle_labels.each(function () {
      $(this).on("click", (e) => {
        $(this)
          .closest(".select__content")
          .siblings(".select__title")
          .text(e.target.textContent);
        $(this).closest(".select").attr("data-state", "");
      });
    });
  });
}

function rememberCatalogContent(items) {
  const products = $(items);

  if (products.length) {
    products.each((i, product) => {
      $(product).on("click", function () {
        let content = $(this).attr("data-content");

        localStorage.setItem("content", content);
      });
    });
  }
}

function declOfNum(n, text_forms) {
  if (n > 5 || n == 0) {
    return text_forms[0];
  }
  if (n > 1 && n < 5) {
    return text_forms[2];
  }
  if (n == 1) {
    return text_forms[1];
  }
  return text_forms[3];
}

const countNews = () => {
  const count = $(".news__count");
  const post = $(".post");
  const word = declOfNum(post.length, ["новостей", "новость", "новости"]);

  if (count.length) {
    count.text(`${post.length} ${word}`);
  }
};

$().ready(() => {
  createYouTubeEmbedLink($(".production__button"), $(".production__video"));

  toggleModal(".map__point", ".modal", "modal__active", ".modal__close");
  toggleModal(
    ".menu__city",
    ".choiceCity",
    "choiceCity__active",
    ".choiceCity__close"
  );
  OutsideClick(".modal", "modal__active");
  OutsideClick(".select", "", "data-state");
  // OutsideClick('.menuCatalog')

  openSelect();
  initTabs();

  rememberCatalogContent(".product[data-content]");
  rememberCatalogContent(".horTab[data-content]");

  initTabs(".tab__links", ".tab__content");
  initTabs(".horTab", ".variants__item");

  fillCatalogContent();

  openModalCatalog();

  countNews();

  accordion(
    ".menuCatalog__accordion",
    ".menuCatalog__information",
    "activeAccordion"
  );
  accordion(
    ".menuCatalog__mainAccordion",
    ".menuCatalog__information",
    "activeAccordion"
  );

  owlGallery(".gallery__carousel", {
    nav: true,
    navContainer: ".gallery__controls",
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  owlGallery(".projects__carousel", {
    nav: true,
    navContainer: ".projects__controls",
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
});
