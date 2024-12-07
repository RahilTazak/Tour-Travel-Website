// navbar onscroll

nav = document.querySelector('.navigation-wrap');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    } else {
            nav.classList.remove('scroll-on');
    }
}


// hide navbar

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach((a) => {
    a.addEventListener('click', () => {
        // Check if the innerHTML matches exactly "Explore"
        if (a.innerHTML!="Explore") {
            navCollapse.classList.remove('show');
        }
    });
});

// hide navbar on clicking dropdown item

let dropItem = document.querySelectorAll('.dropdown-item');
//let navCollapse = document.querySelector('.navbar-collapse.collapse');

dropItem.forEach((i) => {
    i.addEventListener('click', () => {
        navCollapse.classList.remove('show');
    });
});


// counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration/range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
});