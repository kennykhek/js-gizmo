// Author: Kenny Khek
/*
To use, include this in html
Sample Markup
<div class="acc-trigger">title</div>
<div class="acc-container">content</div>

In order to initialize run the function below:
init_accordin();
*/

function init_accordin() {
    $('.acc-container').hide();
    $accordin-title = $('.acc-trigger');
    $title = $(this);
    $accordin-title.click(function () {
        if($title.next().is(':hidden')) {
            $accordin-title.removeClass('active').next().slideUp();
            $title.toggleClass('active').next().slideDown();
        } else {
            $title.next().slideUp();
            $title.toggleClass('active');
        }
    return false;
  });
}
