$(document).ready(function () {
    sideMenu();
    onTop();
    ranking();
    listTypeChange();
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
        $("body").stop().animate({scrollTop: 0}, 500)
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