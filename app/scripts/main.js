$(document).ready(function () {
  'use strict';

  // Scroll to Projects //
  $('.dev-icon').click(function() {
    $('html, body').animate({
      scrollTop: $('.work').offset().top
    }, 2000);
  });


  // Project Navigation //

  $('#surf').on('click', function () {

    // apply active class
    $(this).addClass('active');
    $('#github').removeClass('active');
    $('#market').removeClass('active');

    // apply the correct screenshot
    $('#screenshots').removeClass().addClass('surf-screenshot');

    // show the correct project info
    $('#surf-info').removeClass();
    $('#github-info').addClass('hidden');
    $('#market-info').addClass('hidden');
  });

  $('#github').on('click', function () {

    // apply active class
    $(this).addClass('active');
    $('#surf').removeClass('active');
    $('#market').removeClass('active');

    // apply the correct screenshot
    $('#screenshots').removeClass().addClass('github-screenshot');

    // show the correct project info
    $('#github-info').removeClass();
    $('#surf-info').addClass('hidden');
    $('#market-info').addClass('hidden');
  });

  $('#market').on('click', function () {

    // apply active class
    $(this).addClass('active');
    $('#github').removeClass('active');
    $('#surf').removeClass('active');

    // apply the correct screenshot
    $('#screenshots').removeClass().addClass('market-screenshot');

    // show the correct project info
    $('#market-info').removeClass();
    $('#github-info').addClass('hidden');
    $('#surf-info').addClass('hidden');
  });
});
