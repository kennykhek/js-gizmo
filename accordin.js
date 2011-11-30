// Author: Kenny Khek
/*
To use, include this in html

<div class="acc-trigger">title</div>
<div class="acc_container">content</div>
<div class="acc-trigger">title2</div>
<div class="acc_container">content2</div>
.
.
.

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
