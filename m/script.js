let deviceWidth;
screenSize();

function screenSize() {
    deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (deviceWidth > 900) {
        window.location = "/"
    }
}


window.addEventListener("resize", screenSize)

console.log(deviceWidth)
    //gsap
const navDiv = {
    left: document.querySelectorAll("nav div.left"),
    right: document.querySelectorAll("nav div.right")
};
const btn = {
    "graphic": document.querySelector("nav div#graphicdbtn"),
    "code": document.querySelector("nav div#codebtn"),
    "about": document.querySelector("nav div#aboutbtn"),
    "contact": document.querySelector("nav div#contactbtn")
};
//sections
const section = {
    "graphic": document.querySelector("section.graphic"),
    "code": document.querySelector("section.code"),
    "about": document.querySelector("section.about"),
    "contact": document.querySelector("section.contact"),
    closebtn: {
        "graphic": document.querySelector("section.graphic i"),
        "code": document.querySelector("section.code i"),
        "about": document.querySelector("section.about i"),
        "contact": document.querySelector("section.contact i")
    }
}
const background = document.querySelector("main>p");
let tl = new TimelineMax();
//start
(function() {
    tl.fromTo(background, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut });
    tl.fromTo(navDiv.left, 0.5, { opacity: 0, top: "-250px" }, { opacity: 1, top: "-25px", ease: Power2.easeInOut });
    tl.fromTo(navDiv.right, 0.5, { opacity: 0, top: "250px" }, { opacity: 1, top: "25px", ease: Power2.easeInOut }, "=-0.5");
})()

//onclick
let menuItems = ["graphic", "code", "about", "contact"];
menuItems.forEach(item => {
    btn[item].addEventListener("click", ({ target }) => {
        tl.fromTo(navDiv.left, 0.5, { opacity: 1, top: "-25px" }, { opacity: 0, top: "-250px", ease: Power2.easeInOut });
        tl.fromTo(navDiv.right, 0.5, { opacity: 1, top: "25px" }, { opacity: 0, top: "250px", ease: Power2.easeInOut }, "=-0.5");
        tl.fromTo(background, 0.5, { opacity: 1 }, { opacity: 0, ease: Power2.easeInOut }, "-=0.5");
        tl.to(target.parentElement, 0.5, { opacity: 0, bottom: "-100px", ease: Power2.easeInOut });
        tl.to(section[item], 0.5, { opacity: 1, display: "block" });
        /* tl.fromTo(name.odd, 1, { opacity: "1", left: "0%" }, { opacity: "0", left: "-25%", ease: Power2.easeInOut }, "-=1");
         tl.fromTo(name.even, 1, { opacity: "1", right: "0%" }, { opacity: "0", right: "-25%", ease: Power2.easeInOut }, "-=1");*/
    });
    section.closebtn[item].addEventListener("click", () => {
        tl.to(section[item], 0.5, { opacity: 0, display: "none" });
        tl.to(btn[item].parentElement, 0.5, { opacity: 1, bottom: "0px", ease: Power2.easeInOut });
        tl.fromTo(navDiv.left, 0.5, { opacity: 0, top: "-250px" }, { opacity: 1, top: "-25px", ease: Power2.easeInOut });
        tl.fromTo(navDiv.right, 0.5, { opacity: 0, top: "250px" }, { opacity: 1, top: "25px", ease: Power2.easeInOut }, "=-0.5");
        tl.fromTo(background, 0.5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=0.5");
        /* tl.fromTo(name.odd, 1, { opacity: "0.0", left: "-25%" }, { opacity: "1", left: "0%", ease: Power2.easeInOut }, "-=0.5");
         tl.fromTo(name.even, 1, { opacity: "0.0", right: "-25%" }, { opacity: "1", right: "0%", ease: Power2.easeInOut }, "-=1");*/
    });
})