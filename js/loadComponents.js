function hideVideos() {
    $("#vidshowreel").slideUp("slow","linear", function showTabContent(){
        $(".tab-content").fadeIn("5000");
    });
}

function showVideos() {
    $(".tab-content").hide();
    $("#vidshowreel").slideDown("slow");
}
