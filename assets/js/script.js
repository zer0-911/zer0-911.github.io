var typed = new Typed(".type", {
    strings: [
        " I'm Student",
        " I'm Human",
    ],
    typeSpeed: 60,
    backspeed: 60,
    loop: true,
});

window.addEventListener('load', () => {
    AOS.init();
});