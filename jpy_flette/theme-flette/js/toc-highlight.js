//                     .d888 888          888    888
//       o            d88P"  888          888    888
//      d8b           888    888          888    888
//     d888b          888888 888  .d88b.  888888 888888  .d88b.
// "Y888888888P"      888    888 d8P  Y8b 888    888    d8P  Y8b
//   "Y88888P"        888    888 88888888 888    888    88888888
//   d88P"Y88b        888    888 Y8b.     Y88b.  Y88b.  Y8b.
//  dP"     "Yb       888    888  "Y8888   "Y888  "Y888  "Y8888
//
// requires jQuery or cash-dom.
//
// actually, jQuery/cash is not really necessary. It should be possible
// to use vanilla JS without too much effort. Maybe after a coffee...


function throttle(fn, interval) {
    // enforces a minimum time interval

    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval)) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall));
        } else {
            lastCall = now;
            fn.call();

        }
    };
}


var $navigationItems;
var $sections;
var sectionToItem;


function highlightNavigation() {
    // highlight active section
    // inspired by https://stackoverflow.com/a/32396543/1943546

    var scrollPosition = window.pageYOffset;

    $sections.each(function () {
        var currentSection = $(this);
        var sectionTop = currentSection.offset().top;

        if (scrollPosition >= sectionTop) {
            var id = currentSection.attr('id');
            var $navigationItemActive = sectionToItem[id];

            if (!$navigationItemActive.hasClass('active')) {
                $navigationItems.removeClass('active');
                $navigationItemActive.addClass('active');
            }
            return false;
        }
    });
}

function cachePositions() {
    // map each section id to their corresponding navigation link

    sectionToItem = {};
    $sections.each(function () {
        var id = $(this).attr('id');
        sectionToItem[id] = $navigationItems.find('a[href="#' + id + '"]').eq(0).parent();
    });
}




document.addEventListener("DOMContentLoaded", function () {
    document.removeEventListener("DOMContentLoaded", arguments.callee, false);

    $navigationItems = $("ul#menu-main > li");
    $sections = $($("#content h1, #content h2, #content h3, #content h4").get().reverse());


    cachePositions();

    window.addEventListener("scroll", throttle(highlightNavigation, 50));
    window.addEventListener("resize", cachePositions);

});

