var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
currentIndex = 0;
console.log(imgs);

for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        lightBoxContainer.style.display = "flex";
        currentIndex = imgs.indexOf(e.target);
        imgSrc = e.target.getAttribute("src");
        console.log(e.target.getAttribute("src"));
        lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
    })
}

next.addEventListener("click", nextSlide);
function nextSlide() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}
prev.addEventListener("click", prevSlide);
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url(" + imgSrc + ")";
}
close.addEventListener("click", closeSlide);
function closeSlide() {
    lightBoxContainer.style.display = "none";
}
document.addEventListener("keydown", function (e) {
    console.log(e);
    if (e.code == "ArrowRight") {
        nextSlide();
    }
    else if (e.code == "ArrowLeft") {
        prevSlide();
    }
    else if (e.code == "Escape") {
        closeSlide();
    }
})
let offsetAbout = $("#about").offset().top;
console.log(offsetAbout);

$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    console.log(wScroll);
    if (wScroll > offsetAbout - 50) {
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.7)");
        $("#btnUp").fadeIn(500);
    } else {
        $("#main-nav").css("backgroundColor", "transparent");
        $("#btnUp").fadeOut(500);


    }
});

$("#btnUp").click(function () {
    $(`html , body`).animate({ scrollTop: 0 }, 2000);

});

$("a[href^='#']").click(function () {
    let hrefLink = $(this).attr("href");
    let offsetSection = $(hrefLink).offset().top;
    $("html,body").animate({ scrollTop: offsetSection }, 2000);
})
window.onload = function () {
    $("#loading").fadeOut(1000, function () {
        $("#loading").css("display", "none");
        $("body").css("overflow", "auto")
    })
}