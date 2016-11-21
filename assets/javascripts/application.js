// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
// NOTE: require_directory is NOT recursive (unlike require_tree). This is on purpose so that we can
// use subfolders for JS that we don't want to load everywhere, e.g. active_admin. BUT, make sure to
// add the appropriate file to config.assets.precompile at the bottom of config/application.rb
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_directory .

// Dynamically setting the margins and page dimensions
$(document).ready(function() {
  var slider = null;
  $('input, textarea').placeholder();
  $('.vertically-centered').each(function(index, element) {
    var parent = $(element).parent();
    var height = $(element).height();
    var parentHeight = $(parent).height();

    var margin = (parentHeight / 2) - (height / 2);
    $(element).css('margin-top', margin);
    $(element).css('margin-bottom', margin);
  });
  $('#subscribe-list').submit(function(e) {
    var form = $(this);
    var actionUrl = form.attr("action");

    $.post(actionUrl, form.serialize()).always(function() {
      $('#subscribe-list *').attr('disabled', 'disabled');
      $('p.promise').text("Thanks! You should get a confirmation email :)");
    });

    return false;
  });
  $('#flash').click(function() {
    $(this).fadeTo(300, 0, function() {
      $(this).slideUp(300, function() {
        $(this).remove();
      });
    });
  });
});
