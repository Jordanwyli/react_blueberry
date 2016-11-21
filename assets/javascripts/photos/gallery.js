$(document).ready(function() {
  var slider = null;

  $('.theater').click(function() {
    var album_id = $(this).attr("data-album_id");
    $.ajax({
      url: "/events/export_album",
      dataType: "json",
      data: {
        "album_id": album_id
      },
      success: function(pictures) {
        var gallery = $("<div></div>")
          .attr("id", "gallery")
          .addClass("royalSlider rsDefault");

        for (var i = 0; i < pictures.length; i++) {
          var image = $("<a></a>").addClass("rsImg").attr("href", pictures[i].photo);
          var thumbnail = $("<img></img>")
            .addClass("rsTmb")
            .attr("src", pictures[i].thumbnail.url)
            .attr("width", pictures[i].thumbnail.width)
            .attr("height", pictures[i].thumbnail.height);
          image.append(thumbnail);
          gallery.append(image);
        }

        $.colorbox({
          modal: true,
          fixed: true,
          transition: 'none',
          speed: 0,
          html: gallery,
          onLoad: function() {
            $('#cboxClose').remove();
          },
          onComplete: function(e) {
            slider = gallery.royalSlider({
              controlNavigation: 'thumbnails',
              loop: false,
              imageScaleMode: 'fit-if-smaller',
              navigateByClick: true,
              numImagesToPreload: 3,
              arrowsNavAutoHide: true,
              arrowsNavHideOnTouch: true,
              keyboardNavEnabled: true,
              fadeinLoadedSlide: true,
              thumbs: {
                appendSpan: true,
                firstMargin: true,
                paddingBottom: 4
              },
              autoPlay: {
                enabled: true,
                pauseOnHover: true
              }
            }).data('royalSlider');
          },
          onClose: function() {
            slider.destroy();
          }
        });
      } 
    });
  });
});