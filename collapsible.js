// Author: Kenny Khek
/*
Sample Markup
<div class="collapsible">
  <h3>Title</h3>
  <div class="c-content">Content goes here</div>
</div>

In order to initialize run the function below:
init_collapsible();
*/

function init_collapsible(){
  $('.collapsible').each(function(){
    $collapsible = $(this);
    $title = $collapsible.find('h3');
    $c_content = $collapsible.find('.c-content');

    $title.prepend('<div class="c-arrow"></div>');
    $title.click(function(){
      $(this).parents('.collapsible').toggleClass('c-active');
      $(this).siblings('.c-content').slideToggle();
    });
  });
}
