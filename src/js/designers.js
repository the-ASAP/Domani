import * as $ from 'jquery';
import '../scss/designers.scss';
import '../scss/header.scss';
import "../scss/rootStyles/main.scss";

function initTabs(buttons, content) {
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

  const fillCatalogContent = () => {
    if (localStorage.getItem("content").length) {
      const tabButtons = $(".tab__links");
      const tabs = $(".tab__content");
  
      tabButtons.removeClass("active");
      tabs.removeClass("active");
  
      tabs.each(function (i, tab) {
        if (localStorage.getItem("content") === $(tab).attr("id")) {
          $(tab).addClass("active");
        }
      });
  
      tabButtons.each((i, button) => {
        if (localStorage.getItem("content") === $(button).attr("data-category")) {
          $(button).addClass("active");
        }
      });
    }
  };

  $().ready(() => {
    
    initTabs(".tab__links", ".tab__content");
    initTabs(".horTab", ".variants__item");
  
    fillCatalogContent();
  
   
  });