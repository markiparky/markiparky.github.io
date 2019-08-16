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
let tl = new TimelineMax();
let navDiv = {
    left: document.querySelectorAll("nav div.left"),
    right: document.querySelectorAll("nav div.right")
};
//start
tl.fromTo(navDiv.left, 1, { opacity: 0, top: "-250px" }, { opacity: 1, top: "-25px", ease: Power2.easeInOut });
tl.fromTo(navDiv.right, 1, { opacity: 0, top: "250px" }, { opacity: 1, top: "25px", ease: Power2.easeInOut }, "=-1");