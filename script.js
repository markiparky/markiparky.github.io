console.log("ready");
var instance = new TypeIt('#type', {
    strings: ['This is my string!'],
    //-- Other options...
});

new TypeIt('#type', {
    strings: ["Gerencséry Márk vagyok", "Grafikus vagyok", "Vicces vagyok! na jó nem :/"],
    speed: 100, 
    breakLines: false,
    autoStart: false,
	loop: true
});