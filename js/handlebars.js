$(document).ready(function () {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var soundcloudUrlStart = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"
  var soundcloudUrlEnd = "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"

  var context = { examples: [
    {
      title: "AZURE SHORES",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Sound Design",
      subtitle: "Sample Pack for Launchpad app [Novation]",
      description: "Azure Shores brings a Future Bass inspired soundscape to Laucnhpad, with a slight tropical twinge. Dive in.",
      audiolink: soundcloudUrlStart+"292485237"+soundcloudUrlEnd
    },

    {
      title: "MERAQI - CONTOURS",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Keys",
      tag4: "Vocals",
      subtitle: "I am lead vocalist, producer & synth player in the band Meraqi.",
      description: "Not shackled to any one sound, Meraqi's music begins live, weaving together glitchy electronics with soulful songwriting, powerful hooks and instrumental prowess. Deep bass, haunting vocals and grass-roots grooves meet in a kaleidoscopic musical experience falling somewhere between a sweaty underground rave and a smoky late-night vinyl discovery.",
      audiolink: soundcloudUrlStart+"215826112"+soundcloudUrlEnd
    },

    {
      title: "HYBRID ELECTRONICA",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Sound Design",
      tag4: "Master",
      tag5: "Vocals",
      tag6: "Sound Design",
      subtitle: "Sample Pack for FreakyLoops/Famous Audio",
      description: "Hybrid Electronica comes with some truly sophisticated sounds with a mellow funk grooves, created exclusively for Famous Audio by Meraqi...rom warm and smooth bass to swung and corrupted slo-mo beats, bright and buzzy synths to lo-fi smooth keys, soulful and gritty chords to euphoric plucks, hazy and dusty atmospheric textures to spacey and otherworldly pads, deep and filtered chord movements to crispy ’n’ crunchy snares, soft analogue kicks to found sound percussions, silky arpeggios to elegant melodics, cosmic-style FXs to ethereal vox and organic instrument loops including deep atmospheric guitars, warped pianos, dreamy harps, ethnic violin melodies and emotive mallets - these loops and samples are gonna inspire you to create your next banger!",
      audiolink: soundcloudUrlStart+"292258996%3Fsecret_token%3Ds-lb2H1"+soundcloudUrlEnd
    },
    {
      title: "SOAR",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Sound Design",
      tag4: "Vocals",
      subtitle: "Sample Pack for Launchpad app [Novation]",
      description: "Jazz/chill out/orchestral style pack I designed for Launchpad/Novation. Releasing very soon!",
      audiolink: soundcloudUrlStart+"296011605"+soundcloudUrlEnd
    },

    {
      title: "MERAQI - VISTAS",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Keys",
      tag4: "Vocals",
      subtitle: "I am lead vocalist, producer & synth player in the band Meraqi.",
      description: "Not shackled to any one sound, Meraqi's music begins live, weaving together glitchy electronics with soulful songwriting, powerful hooks and instrumental prowess. Deep bass, haunting vocals and grass-roots grooves meet in a kaleidoscopic musical experience falling somewhere between a sweaty underground rave and a smoky late-night vinyl discovery.",
      audiolink: soundcloudUrlStart+"202309673"+soundcloudUrlEnd
    },

    {
      title: "CELESTIAL MOVEMENT",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Master",
      tag4: "Vocals",
      tag5: "Sound Design",
      subtitle: "Sample pack for Samplephonics.",
      description: "Created by insanely talented live Electronica outfit Meraqi, this gorgeous collection of ambient electronica loops and samples includes live bass guitars, grainy drum machine loops, chunky acoustic drum sounds, deep Rhodes grooves, haunting pianos, futuristic synth lines, bendy violin melodies and beautiful distinctive female vocals, all of which have been manipulated beyond their traditional form using creative processing techniques.",
      audiolink: soundcloudUrlStart+"234814392"+soundcloudUrlEnd,
      audiolink2: "                              \x3Ciframe class=\"player\" width=\"100%\" height=\"110\" scrolling=\"no\" frameborder=\"no\" src=\"https:\x2F\x2Fw.soundcloud.com\x2Fplayer\x2F?url=https%3A\x2F\x2Fapi.soundcloud.com\x2Ftracks\x2F234814392\&amp;color=0066cc\&amp;auto_play=false\&amp;hide_related=false\&amp;show_comments=true\&amp;show_user=true\&amp;show_reposts=false\"\x3E\x3C\x2Fiframe\x3E\n"
    },

    {
      title: "EMANATA - QUIRST THENCHER",
      tag0: "Mixing",
      audiolink: soundcloudUrlStart+"239703233&amp"+soundcloudUrlEnd
    }
  ]};

  var html = template(context);
  $(document.body).append(html);
});
