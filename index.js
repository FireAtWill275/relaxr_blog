/*global document, $, console*/

(function () {
    'use strict';

    $(document).ready(function () {

       

        var slideDuration = 500; 

        function readMore(e) {
            console.log('readMore');
           	e.preventDefault();
            $('#posts .read-more').hide();
            $('#show-this-on-click').slideDown(slideDuration);
            $('#posts .read-less').show();
        }

        function readLess(e) {
            console.log('readLess');
            e.preventDefault();
            $('#posts .read-less').hide();
            $('#show-this-on-click').slideUp(slideDuration);
            $('#posts .read-more').show();
        }

        function learnMore(e) {
            console.log('learnMore');
            e.preventDefault();
            $('#aside-section .learn-more').hide();
            $('#learnmoretext').slideDown(slideDuration);
        }

        $('#posts .read-more').click(readMore);
        $('.read-less').click(readLess);
        $('#aside-section .learn-more').click(learnMore);

  

    });
}());
