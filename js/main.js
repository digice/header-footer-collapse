/*!
 * header-footer-collapse
 * JavaScript Library
 * Version 1.0.0
 * Roderic Linguri <linguri@digices.com>
 */

var windowHeight;
var bodyHeight;
var readyPosition;

function expandHeader() {
  $('header').addClass('headerexp');
  $('main').addClass('headerexp');
}

function collapseHeader() {
  $('header').removeClass('headerexp');
  $('main').removeClass('headerexp');
}

function expandFooter() {
  $('footer').addClass('footerexp');
  $('main').addClass('footerexp');
}

function collapseFooter() {
  $('footer').removeClass('footerexp');
  $('main').removeClass('footerexp');
}

$('document').ready(function() {

  windowHeight = $(window).innerHeight();
  bodyHeight = $('body')[0].scrollHeight;
  readyPosition = $(window).scrollTop();

  if (readyPosition < 42) {
    expandHeader();
  }

  $(window).on('scroll', function() {

    var scrollPosition = $(window).scrollTop();

    if (scrollPosition < 42) {
      expandHeader();
    }

    if (scrollPosition > 42) {
      collapseHeader();
    }

    var scrollBottom = scrollPosition + windowHeight;

    if (scrollBottom > (bodyHeight - 42)) {
      expandFooter();
    }
    if (scrollBottom < (bodyHeight - 42)) {
      collapseFooter();
    }

  });

  $(window).resize(function() {
    windowHeight = $(window).innerHeight();
    bodyHeight = $('body')[0].scrollHeight;
    readyPosition = $(window).scrollTop();
  });

});
