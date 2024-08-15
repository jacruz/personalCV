jQuery(document).ready(function($) {

    'use strict';

    /*********** SMOOTH SCROLL NAVIGATION ***********/

    var contentSection = $('.section');
    var navigation = $('.side-menu');
    
    //when a nav link is clicked, smooth scroll to the section
    navigation.on('click', 'a', function(event){
        event.preventDefault(); //prevents previous event
        smoothScroll($(this.hash));
    });
    
    //update navigation on scroll...
    $(window).on('scroll', function(){
        updateNavigation();
    })
    //...and when the page starts
    updateNavigation();
    
    /////FUNCTIONS
    function updateNavigation(){
        contentSection.each(function(){
            var sectionName = $(this).attr('id');
            var navigationMatch = $('nav a[href="#' + sectionName + '"]');
            if( ($(this).offset().top - $(window).height()/2 < $(window).scrollTop()) &&
                    ($(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop()))
                {
                    navigationMatch.addClass('active-menu');
                }
            else {
                navigationMatch.removeClass('active-menu');
            }
        });
    }
    function smoothScroll(target){
        $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = target;
          });
    }




    /*********** (SUB)TITLE TEXT ANIMATION ***********/
    
    var words = ['developer', 'illustrator', 'artist', 'engineer', 'musician'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 10,
        speed = 70;
    var wordflick = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                    }
                }
            } else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                    i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            $('.txt-role').text(part);
        },speed);
    };

    $(document).ready(function () {
        wordflick();
    });

});