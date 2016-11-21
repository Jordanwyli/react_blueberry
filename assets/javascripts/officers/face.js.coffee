class @FaceGrid
  constructor: (@officers, @width) ->

  render: (face_grid) ->
    face_grid.empty()
    count = 0

    for officer in @officers
      align_left = (Math.floor(count / @width) % 2 == 0)
      alignment = "right-align"
      if align_left
        alignment = "left-align"

      face_tile = $('<div></div>').addClass('tile')
      face_tile.append(
        $('<img></img>').attr('src', officer.face_url))

      info_tile = $('<div></div>').addClass('tile').addClass('salutation')
      info_tile.append(
        $('<div></div>').addClass(alignment).append(
          $('<span></span>').text(officer.first_name + " " + officer.last_name),
          $('<span></span>').addClass("rank").text(officer.position)
          ))

      officer_div = $('<div></div>').addClass("officer-container")
      if align_left
        officer_div.append(face_tile, info_tile)
      else
        officer_div.append(info_tile, face_tile)

      officer_div.colorbox
        inline: true
        href: '#officer-'.concat(officer.id)
        transition: 'none'
        width: '500px'
        scrolling: false

      face_grid.append(officer_div)
      count += 1

class @FaceGridMobile
  constructor: (@officers, @width) ->

  render: (face_grid) ->
    face_grid.empty()
    count = 0

    for officer in @officers
      align_left = (Math.floor(count / @width) % 2 == 0)
      alignment = "right"
      if align_left
        alignment = "left"

      face_tile = $('<div></div>').addClass('tile')
      face_tile.append(
        $('<img></img>').attr('src', officer.face_url))

      face_tile.append(
        $('<div></div>').append(
          $('<span></span>').text(officer.first_name + " " + officer.last_name),
          $('<br/>'),
          $('<span></span>').addClass("rank").text(officer.position)
          ))

      face_tile.css("text-align", alignment);
      officer_div = $('<div></div>').addClass("officer-container")
      officer_div.append(face_tile)

      officer_div.colorbox
        inline: true
        href: '#officer-'.concat(officer.id)
        transition: 'none'
        width: '100%'
        scrolling: false

      face_grid.append(officer_div)
      count += 1
