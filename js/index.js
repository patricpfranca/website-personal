$("document").ready(() => {
  const nav = $("#menu");

  $(window).scroll(() => {
    if ($(this).scrollTop() >= 25) {
      nav.addClass("f-nav");
    } else {
      nav.removeClass("f-nav");
    }
  });

  $('a[href^="#"]:not(a[href="#"])').click(function () {
    $("html, body").animate(
      {
        scrollTop: $('[name="' + $.attr(this, "href").substr(1) + '"]').offset()
          .top,
      },
      500
    );

    return false;
  });
});
