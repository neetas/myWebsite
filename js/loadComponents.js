function hideVideos() {
    $("#vidshowreel").hide();
    $(".tab-content").fadeIn("slow");
    $(".abt").removeClass("active");
}

function showVideos() {
    $(".tab-content").hide();
    $("#vidshowreel").fadeIn("slow");
}
