import * as $ from "jquery";
import "../scss/style.scss";

const createYouTubeEmbedLink = (btn, container) => {
    $(btn).each((i, el) => {
        let link = $(el).attr("data-src"),
            linkStart = "https://www.youtube.com/embed/",
            linkEnd = "?rel=0&showinfo=0&autoplay=1";
        let newLink = linkStart + link.slice(link.indexOf("=") + 1, link.length) + linkEnd;
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

const toggleModal = () => {
    $(".map__point").on("click", () => {
        $(".modal").addClass("modal__active");
        $("body").css({ overflow: "hidden" });
    });
    $(".modal__close").on("click", () => {
        $(".modal").removeClass("modal__active");
        $("body").css({ overflow: "auto" });
    });
};

const OutsideClick = (elem, activeClass = "active") => {
    $(document).on("mousedown", function (e) {
        if ($(elem).has(e.target).length === 0) {
            $(elem).removeClass(activeClass);
            $("body").css({ overflow: "auto" });
        }
    });
};

const owlGallery = (selector, params) => {
    const arrow = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4.5C11.2761 4.5 11.5 4.27614 11.5 4C11.5 3.72386 11.2761 3.5 11 3.5V4.5ZM0.646447 3.64645C0.451185 3.84171 0.451185 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 3.5L1 3.5V4.5L11 4.5V3.5Z" fill="#39AD46"/>
            </svg>`;
    if (params == undefined) params = "";
    const owl = $(selector);
    owl.each((i, el) => {
        $(el)
            .addClass("owl-carousel owl-theme")
            .owlCarousel(
                Object.assign(params, {
                    lazyLoad: true,
                    smartSpeed: 1000,
                    navText: [arrow, arrow],
                })
            );
    }).trigger("refresh.owl.carousel");
};

function accordion(btn, content, activeClass) {
    $(btn).on("click", function () {
        $(this).toggleClass(activeClass);
        $(this).find(content).slideToggle();
    });
}

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

$().ready(() => {
    createYouTubeEmbedLink($(".production__button"), $(".production__video"));

    toggleModal();
    OutsideClick(".modal", "modal__active");
    accordion(".menuCatalog__accordion", ".menuCatalog__information", "activeAccordion");
    accordion(".menuCatalog__mainAccordion", ".menuCatalog__information", "activeAccordion");
});
