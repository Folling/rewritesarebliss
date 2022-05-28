document.addEventListener("DOMContentLoaded", () => {
    hljs.highlightAll();
    let page = document.getElementById("page");
    let header = document.getElementById("header");
    let ticking = false;

    page.onscroll = (e) => {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                if (page.scrollTop > 0) {
                    header.classList.add("scrolled_page");
                } else {
                    header.classList.remove("scrolled_page");
                }

                ticking = false;
            });

            ticking = true;
        }
    };
});
