$(document).ready(function () {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var context = {
    title: "AZURE SHORES",
    tag0: "Composition",
    tag1: "Production",
    tag2: "Mixing",
    tag3: "Sound Design",
    subtitle: "Sample Pack for Launchpad app [Novation]",
    description: "Azure Shores brings a Future Bass inspired soundscape to Launhpad, with a slight tropical twinge. Dive in.",
    audiolink: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/292485237&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
  }

  var html = template(context);
  $(document.body).append(html);
});
