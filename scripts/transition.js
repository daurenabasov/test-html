
const tl = gsap.timeline();
tl.from(".header-logo, .header-nav li a, .header-helpers", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: {
        amount: 0.4,
    },
});
tl.from(
    ".left-container .hero-text",
    {
        y: 100,
        opacity: 0,
        skewY: 5,
        duration: 1,
        stagger: {
            amount: 0.4,
        },
    },
    "-=1"
);
tl.from(
    ".left-container p ",
    {
        y: 100,
        opacity: 0,
        skewY: 5,
        duration: 1,
        stagger: {
            amount: 0.4,
        },
    },
    "-=1"
);
tl.from(
    ".left-container hr",
    {
        y: 100,
        opacity: 0,
        skewY: 5,
        duration: 1,
        stagger: {
            amount: 0.4,
        },
    },
    "-=1"
);
tl.from(
    ".left-container button",
    {
        x: 100,
        duration: 1,
        opacity: 0,
    },
    "-=.5"
);
tl.from(".right-container", {
    x: 500,
    opacity: 0,
    duration: 1,
});


