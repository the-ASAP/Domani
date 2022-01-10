import * as $ from "jquery";
import {createYouTubeEmbedLink, toggleModal, OutsideClick, openModalCatalog, accordion, fillCatalogContent } from "../vendors/js/general"
//import "../scss/style.scss";
import "../scss/index.scss";
import '../scss/header.scss';
import "../scss/rootStyles/main.scss";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

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
  //OutsideClick(".select", "", "data-state");
  OutsideClick('.menuCatalog');

  //openSelect();
  //initTabs();

  rememberCatalogContent(".product[data-content]");
  //rememberCatalogContent(".horTab[data-content]");

 // initTabs(".tab__links", ".tab__content");
 // initTabs(".horTab", ".variants__item");

  fillCatalogContent();

  openModalCatalog();

  countNews();

  accordion(
    ".menuCatalog__Accordion",
    ".menuCatalog__information",
    "activeAccordion"
  );
  accordion(
    ".menuCatalog__mainAccordion",
    ".menuCatalog__information",
    "activeAccordion"
  );

});

