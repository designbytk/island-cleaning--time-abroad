export default function navbarScroll() {

    const nav = document.querySelector('.site-header');

    window.addEventListener('scroll', function () {
        const offset = window.pageYOffset;

        if (offset > 70)
            nav.classList.add('nav-scrolled')
        else
            nav.classList.remove('nav-scrolled')
    });

    // const header = document.querySelector(".site-header");
    // const section = document.getElementById("hero");

    // const options = {
    //     rootMargin: "0px 0px 40px 0px"
    // };

    // const observer = new IntersectionObserver(function (
    //     entries,
    //     observer
    // ) {
    //     entries.forEach(entry => {
    //         if (!entry.isIntersecting) {
    //             header.classList.add("nav-scrolled");
    //         } else {
    //             header.classList.remove("nav-scrolled");
    //         }
    //     });
    // },
    //     options);


    // observer.observe(section);

}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }

// const nav = document.querySelector('nav');

// window.addEventListener('scroll', function () {
//     const offset = window.pageYOffset;

//     if (offset > 75)
//         nav.classList.add('scroll')
//     else
//         nav.classList.remove('scroll')
// });