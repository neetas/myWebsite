$(document).ready(function () {
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);

  var soundcloudUrlStart = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"
  var soundcloudUrlEnd = "&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
  var audioHeight = "110"
  var audioWidth = "100%"
  var videoHeight = "315"
  var videoWidth = "560"

  var context = { examples: [
    {
      title: "AZURE SHORES",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Sound Design",
      subtitle: "Sample Pack for Launchpad app [Novation]",
      description: "Azure Shores brings a Future Bass inspired soundscape to Laucnhpad, with a slight tropical twinge. Dive in.",
      audiolink: soundcloudUrlStart+"292485237"+soundcloudUrlEnd,
      height: audioHeight
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
      audiolink2: "http://meraqi.co.uk",
      linkname: "Meraqi.co.uk",
      audiolink: soundcloudUrlStart+"215826112"+soundcloudUrlEnd,
      height: audioHeight
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
      audiolink: soundcloudUrlStart+"292258996%3Fsecret_token%3Ds-lb2H1"+soundcloudUrlEnd,
      height: audioHeight
    },
    {
      title: "SOAR",
      tag0: "Composition",
      tag1: "Production",
      tag2: "Mixing",
      tag3: "Sound Design",
      tag4: "Vocals",
      subtitle: "Sample Pack for Launchpad app [Novation]. This made it into the Top 10 Most Sold in 2016",
      description: "Jazz/chill out/orchestral style pack I designed for Launchpad/Novation. Releasing very soon!",
      audiolink: soundcloudUrlStart+"296011605"+soundcloudUrlEnd,
      width: audioWidth,
      height: audioHeight
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
      audiolink2: "http://meraqi.co.uk",
      linkname: "Meraqi.co.uk",
      audiolink: soundcloudUrlStart+"202309673"+soundcloudUrlEnd,
      height: audioHeight
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
      height: audioHeight
    },

    {
      title: "EMANATA - KEEP OFF THE GRASS",
      tag0: "Mixing",
      subtitle: "I mixed Emanata's first EP Something Like That",
      audiolink: soundcloudUrlStart+"272784950"+soundcloudUrlEnd,
      height: audioHeight
    },

    {
      title: "BLONDIE - RAPTURE (TRAILER VERSION COVER) [mp3 DEMO]",
      tag0: "Production",
      tag1: "Composition",
      tag2: "Sound Design",
      tag3: "Mixing",
      subtitle: "I produced this trailer music version of Rapture by Blondie to brief from BMG Chrysalis. I was sent a vocal stem and asked to create a piece similar to other trailer versions such as:",
      audiolink2: "https://www.youtube.com/watch?v=xzCEdSKMkdU",
      linkname: "Lorde (Assassin's Creed)",
      audiolink3: "https://www.youtube.com/watch?v=62E4FJTwSuc",
      linkname2: "Jetta (Terminator Genisys)",
      audiolink: soundcloudUrlStart+"301839348%3Fsecret_token%3Ds-l1Avk"+soundcloudUrlEnd,
      height: audioHeight
    },

    {
      title: "AUDIO LOGO FOR 7DIGITAL",
      tag0: "Production",
      tag1: "Composition",
      tag2: "Sound Design",
      tag3: "Mixing",
      subtitle: "At 7digital I worked with the creative team on video content. I wrote this original piece to brief for promotional content which currently resides on their",
      audiolink2: "http://about.7digital.com/about",
      linkname: "about page",
      audiolink: "https://www.youtube.com/v/WX6A1b3UGVs",
      height: videoHeight
    },

    {
      title: "AUDIO LOGO FOR TECHNICS",
      tag0: "Production",
      tag1: "Composition",
      tag2: "Sound Design",
      tag3: "Mixing",
      subtitle: "Audio Logo I designed to brief for a Technic's promotional piece",
      audiolink: "https://www.youtube.com/v/u7lE1qXPaZY",
      height: videoHeight
    },

    {
      title: "POLAROID 85 - SLOW BREEZE",
      tag0: "Production",
      tag1: "Composition",
      tag2: "Vocals",
      tag3: "Keys",
      tag4: "Arrangements",
      subtitle: "A live/electronica fusion act I led from 2010 - 2013. I composed and produced all the music for this act",
      audiolink: soundcloudUrlStart+"148503413"+soundcloudUrlEnd,
      height: audioHeight
    },

    {
      title: "AVARTAN - SWAN SONG (UNMASTERED)",
      tag0: "Mixing",
      subtitle: "I've mixed the latest EP (unreleased) for Indian classical/jazz trio 'Avartan', put together by indian pianist Rekesh Chauhan",
      audiolink2: "http://www.rekeshchauhan.com/",
      linkname: "http://www.rekeshchauhan.com/",
      audiolink: soundcloudUrlStart+"301858987%3Fsecret_token%3Ds-eAAFk"+soundcloudUrlEnd,
      height: audioHeight
    },

    {
      title: "FEATURED SYNC - VOGUE",
      tag0: "Production",
      tag1: "Composition",
      tag2: "Vocals",
      tag3: "Keys",
      tag4: "Mixing",
      subtitle: "'Victoria Beckham in the Garden' by Vogue",
      audiolink: "https://www.youtube.com/v/ymOsfYK-wZk",
      height: videoHeight
    },

    {
      title: "FEATURED SYNC - 7digital",
      tag0: "Production",
      tag1: "Composition",
      tag2: "Vocals",
      tag3: "Keys",
      tag4: "Mixing",
      subtitle: "'Service Stories Snapshot' by 7digital which currently resides on their",
      audiolink2: "http://about.7digital.com/",
      linkname: "homepage",
      audiolink: "https://www.youtube.com/v/EuMHZxs_C0c",
      height: videoHeight
    }
  ]};



  var html = template(context);
  $(document.body).append(html);
});
