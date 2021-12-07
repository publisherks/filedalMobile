$(document).ready(function () {
    sideMenu();
    onTop();
    ranking();
    listTypeChange();
    pageBack();
    tab();
});

function sideMenu() {
    $(".menu-trigger").off("click").on("click", function () {
        $("body").addClass("open");
    });

    $(".side-cover, #sideMenu .close-btn").off("click").on("click", function () {
        $("body").removeClass("open");
    })
}

function onTop() {
    $(".top-btn").off("click").on("click", function () {
        $("body, html").stop().animate({scrollTop: 0}, 500)
    })
}

function ranking() {
    $(".real-time").off("click").on("click", function () {
        $(this).closest(".topsch-box").addClass("open");
    });

    $(".ranking-close").off("click").on("click", function () {
        $(this).closest(".topsch-box").removeClass("open");
    });
}

function listTypeChange () {
    const LISTS     = $(".lists-box"),
          RADIOBTNS = $("input[name='listType']:radio");
    
    RADIOBTNS.each(function (index, item) {
        if(RADIOBTNS[index].checked === true) {
            LISTS[(RADIOBTNS[index].value === "galleryType") ? "addClass" : "removeClass"]("gallery-type");
        }
    })

    RADIOBTNS.change(function () {
        let value  = this.value,
            method = "removeClass";
        
        if(value === "galleryType") {
            method = "addClass";
        }

        LISTS[method]("gallery-type");
    })
}

function pageBack () {
    $(".back-btn").off("click").on("click", function () {
        window.history.back();
    })
}



function tab () {
    const TABMENU = $("[data-tabMenu]").find(">li");
    const TABBTN  = TABMENU.find("a");
    const TABCON  = $("[data-tabMenu]").siblings("[data-tabCon]");

    TABMENU.each(function (index, tabmenus) {
        if ($(tabmenus).find("a").hasClass("on")) {
            TABCON.each(function (idx, tabs) {
                $(tabs).data("tabcon") === $(tabmenus).find("a").data("tab") ? $(tabs).addClass("on") : $(tabs).removeClass("on")
            })
        }
    })

    TABBTN.off("click.tabmenu").on("click.tabmenu", function (e) {
        e.preventDefault()
        let tabNum = $(this).data("tab");
        if (tabNum === undefined) {
            return false;
        }
        $(this).closest("[data-tabMenu]").find("a").removeClass("on");
        $(this).addClass("on");
        $(this).closest("[data-tabMenu]").siblings("[data-tabCon]").each(function (index, item) {
            $(item).data("tabcon") === tabNum ? $(item).addClass("on") : $(item).removeClass("on");
        })
    })
}