$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let blockDowId = $(this).data('scroll');
        let DowOff = $(blockDowId).offset().top;

        $("html, body").animate({
            scrollTop: DowOff-300
        });
    });
});
