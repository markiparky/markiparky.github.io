let deviceWidth;

function screenSize() {
    deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (deviceWidth < 900) {
        window.location = "/m"
    }
}
screenSize();
window.addEventListener("resize", screenSize)
window.addEventListener("deviceorientation", (event) => {
    console.log(event)
})


const name = {
    odd: document.querySelectorAll("h1.odd"),
    even: document.querySelectorAll("h1.even")
};
const nameSpan = [document.querySelector("span#first"), document.querySelector("span#second"), document.querySelector("span#third")];
//imgs for hover
const codeImg = document.querySelector("img#code");
//hover span
nameSpan[0].addEventListener("mouseover", () => { codeImg.style.display = "block" });
nameSpan[0].addEventListener("mouseleave", () => { codeImg.style.display = "none" });

nameSpan[1].addEventListener("mouseover", () => {});
nameSpan[1].addEventListener("mouseleave", () => {});

nameSpan[2].addEventListener("mouseover", () => {});
nameSpan[2].addEventListener("mouseleave", () => {});

//nav
//const btn = document.querySelectorAll("nav div");
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

var tl = new TimelineMax();

//start
(function() {
    tl.fromTo(name.odd, 1, { opacity: "0.0", left: "-25%" }, { opacity: "1", left: "0%", ease: Power2.easeInOut });
    tl.fromTo(name.even, 1, { opacity: "0.0", right: "-25%" }, { opacity: "1", right: "0%", ease: Power2.easeInOut }, "-=1");
    tl.fromTo(btn.graphic.parentElement, 0.5, { opacity: "0", bottom: "-100px" }, { opacity: "1", bottom: "0px", ease: Power2.easeInOut }, "-=1");
    tl.fromTo(btn.graphic, 0.5, { opacity: "0", bottom: "-100px" }, { opacity: "1", bottom: "0px", ease: Power2.easeInOut }, "-=0.25");
    tl.fromTo(btn.code, 0.5, { opacity: "0", bottom: "-100px" }, { opacity: "1", bottom: "0px", ease: Power2.easeInOut }, "-=0.25");
    tl.fromTo(btn.about, 0.5, { opacity: "0", bottom: "-100px" }, { opacity: "1", bottom: "0px", ease: Power2.easeInOut }, "-=0.25");
    tl.fromTo(btn.contact, 0.5, { opacity: "0", bottom: "-100px" }, { opacity: "1", bottom: "0px", ease: Power2.easeInOut }, "-=0.25");
})()

//open sections from the menu
let menuItems = ["graphic", "code", "about", "contact"];
menuItems.forEach(item => {
    btn[item].addEventListener("click", ({ target }) => {
        tl.to(target.parentElement, 0.5, { opacity: 0, bottom: "-100px", ease: Power2.easeInOut });
        tl.to(section[item], 0.5, { opacity: 1, display: "block" });
        tl.fromTo(name.odd, 1, { opacity: "1", left: "0%" }, { opacity: "0", left: "-25%", ease: Power2.easeInOut }, "-=1");
        tl.fromTo(name.even, 1, { opacity: "1", right: "0%" }, { opacity: "0", right: "-25%", ease: Power2.easeInOut }, "-=1");
    });
    section.closebtn[item].addEventListener("click", () => {
        tl.to(section[item], 0.5, { opacity: 0, display: "none" });
        tl.to(btn[item].parentElement, 0.5, { opacity: 1, bottom: "0px", ease: Power2.easeInOut });
        tl.fromTo(name.odd, 1, { opacity: "0.0", left: "-25%" }, { opacity: "1", left: "0%", ease: Power2.easeInOut }, "-=0.5");
        tl.fromTo(name.even, 1, { opacity: "0.0", right: "-25%" }, { opacity: "1", right: "0%", ease: Power2.easeInOut }, "-=1");
    });
})