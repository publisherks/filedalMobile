$(document).ready(function () {
    sideMenu();
});

function sideMenu() {
    $(".menu-trigger").off("click").on("click", function () {
        $("body").addClass("open");
    });

    $(".side-cover, #sideMenu .close-btn").off("click").on("click", function () {
        $("body").removeClass("open");
    })
}