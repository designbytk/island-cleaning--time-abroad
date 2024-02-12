function reveal() {
    "use strict";
    const e = document.querySelectorAll("[class*=reveal-]");
    let t = window.innerHeight;
    function n(e, t) {
        var n = 0;
        return function() {
            var i = (new Date).getTime();
            if (!(i - n < e))
                return n = i,
                t.apply(void 0, arguments)
        }
    }
    function i() {
        for (let i = 0; i < e.length; i++) {
            let s = e[i]
              , a = s.getAttribute("data-reveal-delay")
              , l = s.getAttribute("data-reveal-offset") ? s.getAttribute("data-reveal-offset") : "200"
              , c = s.getAttribute("data-reveal-container") ? s.closest(s.getAttribute("data-reveal-container")) : s;
            n = l,
            c.getBoundingClientRect().top <= t - n && !s.classList.contains("is-revealed") && (a && 0 !== a ? setTimeout(function() {
                s.classList.add("is-revealed")
            }, a) : s.classList.add("is-revealed"))
        }
        var n;
        !function() {
            if (e.length > document.querySelectorAll("[class*=reveal-].is-revealed").length)
                return;
            window.removeEventListener("load", i),
            window.removeEventListener("scroll", s),
            window.removeEventListener("resize", a)
        }()
    }
    function s() {
        n(30, i())
    }
    function a() {
        t = window.innerHeight,
        n(30, i())
    }
    e.length > 0 && document.body.classList.contains("t") && (window.addEventListener("load", i),
    window.addEventListener("scroll", s),
    window.addEventListener("resize", a))
}
