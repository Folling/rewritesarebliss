document.addEventListener("DOMContentLoaded", () => {
    hljs.highlightAll();
    let body = document.body;
    let header = document.getElementById("header");

    let ticking = false;

    body.onscroll = (e) => {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                let top = (document.documentElement && document.documentElement.scrollTop) ||
                    document.body.scrollTop;

                if (top > 0) {
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
