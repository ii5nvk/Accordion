;
"use scrict";

(function() {
    var accordion = document.getElementById('accordion'),
        items = document.getElementsByClassName('item');

    var accordionChange = function(e) {
        e.preventDefault();
        var clickElement = e.target,
            activeElement = document.querySelector('.' + 'active');

        if (clickElement.tagName != 'DT') {
            return;
        }

        if (clickElement.parentNode.classList.contains("active")) {
            clickElement.parentNode.classList.remove("active");
        } else {
            if (activeElement) {
                activeElement.classList.remove("active");
            }
            clickElement.parentNode.classList.add("active");
        }

    };

    accordion.addEventListener("click", accordionChange, false);
})();