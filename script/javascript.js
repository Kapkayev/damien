/*--------------------------------------------------------------
>>> ACCORDEON SELECT CODE START:
--------------------------------------------------------------*/

function toggleIconAccordeon(element) {
    var icon = element.find('img');

    if (icon.attr('src') === 'assets/icons/icon_plus.svg') {
        icon.attr('src', 'assets/icons/icon_minus.svg');
    } else {
        icon.attr('src', 'assets/icons/icon_plus.svg');
    }
}


jQuery('.container-card__item .head').click(function() {
    jQuery(this).closest('.container-card__item').toggleClass('active');
    toggleIconAccordeon(jQuery(this));
})

/*--------------------------------------------------------------
>>> ACCORDEON SELECT CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> SLIDER'S CODE START:
--------------------------------------------------------------*/

jQuery('.slider-container__news').owlCarousel({
    loop: true,
    touchDrag: true,
    mouseDrag: true,
    autoHeight: false,
    autoWidth: true,
    nav: false,
    dots: false,
    autoplay: false,
    margin: 30,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1000,
    items: 4,
    responsive : {
        0 : {
            margin: 16,
        },
        730 : {
            margin: 30,
        }
    }
})

let owlSliderNews = jQuery('.slider-container__news');

owlSliderNews.owlCarousel();

jQuery('#news__prev').click(function() {
    owlSliderNews.trigger('prev.owl.carousel');
})

jQuery('#news__next').click(function() {
    owlSliderNews.trigger('next.owl.carousel');
})


/*--------------------------------------------------------------
>>> SLIDER'S CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> MENU CODE START:
--------------------------------------------------------------*/

jQuery('#menu-toggle').on('click', function() {
    var sectionMenu = jQuery('.section-menu');
    sectionMenu.toggleClass('active');

    toggleIcon(jQuery(this));
});

function toggleIcon(element) {
    var icon = element.find('img');

    if (icon.attr('src') === 'assets/icons/icon_burger.svg') {
        icon.attr('src', 'assets/icons/icon_close.svg');
    } else {
        icon.attr('src', 'assets/icons/icon_burger.svg');
    }
}

/*--------------------------------------------------------------
>>> MENU CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> SVG CODE START:
--------------------------------------------------------------*/

jQuery("img.img-svg").each(function () {
    var $img = jQuery(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

/*--------------------------------------------------------------
>>> SVG CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> THUMBNAIL'S CODE START:
--------------------------------------------------------------*/

jQuery(document).ready(function() {
    let currentIndex = 0;
    const thumbnails = jQuery('.thumbnail');
    
    function updateActiveSlide(index) {
        thumbnails.removeClass('active');
        thumbnails.eq(index).addClass('active');
        const newImage = thumbnails.eq(index).data('large');
        jQuery('#active-image').attr('src', newImage);
    }

    jQuery('#up-arrow').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateActiveSlide(currentIndex);
        }
    });

    jQuery('#down-arrow').click(function() {
        if (currentIndex < thumbnails.length - 1) {
            currentIndex++;
            updateActiveSlide(currentIndex);
        }
    });

    thumbnails.click(function() {
        currentIndex = jQuery(this).index();
        updateActiveSlide(currentIndex);
    });
});

/*--------------------------------------------------------------
>>> THUMBNAIL'S CODE END.
--------------------------------------------------------------*/

/*--------------------------------------------------------------
>>> SLIDER'S CODE START:
--------------------------------------------------------------*/

jQuery(document).ready(function() {
    jQuery('.slider-container').each(function() {
        var $sliderContainer = jQuery(this);

        $sliderContainer.find('.dot').click(function() {
            var slideIndex = jQuery(this).data('slide');
            
            $sliderContainer.find('.dot').removeClass('active');
            jQuery(this).addClass('active');
            
            $sliderContainer.find('.slide').removeClass('active');
            $sliderContainer.find('.slide').eq(slideIndex).addClass('active');
        });
    });
});

/*--------------------------------------------------------------
>>> SLIDER'S CODE END.
--------------------------------------------------------------*/
