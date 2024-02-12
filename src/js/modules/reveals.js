export default function animReveals() {
    // const header = document.querySelector("header");
    // const sectionOne = document.querySelector(".home-intro");

    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    // For Header-nav change of appearance -- tablet and desktop not mobile
    // const sectionOneOptions = {
    //     rootMargin: "-200px 0px 0px 0px"
    // };

    // const sectionOneObserver = new IntersectionObserver(function (
    //     entries,
    //     sectionOneObserver
    // ) {
    //     entries.forEach(entry => {
    //         if (!entry.isIntersecting) {
    //             header.classList.add("nav-scrolled");
    //         } else {
    //             header.classList.remove("nav-scrolled");
    //         }
    //     });
    // },
    //     sectionOneOptions);

    // sectionOneObserver.observe(sectionOne);

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // if(entry.target.classList.contains("appear")) {
                //     entry.target.classList.remove("appear")
                // }
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
        appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
}