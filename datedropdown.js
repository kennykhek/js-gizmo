// Author: Kenny Khek
/*
Sample Markup
<select class="dd-dayfield"></select>
<select class="dd-monthfield"></select> 
<select class="dd-yearfield"></select> 

In order to initialize run the function below:
_init_datedropdown();
*/  

function _init_datedropdown() {
    var monthtext = ['January,'February','March','April','May','June','July','August','September','October','November','December'];
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    var $day = $('.dd-dayfield');
    var $month = $('.dd-monthfield');
    var $year = $('.dd-yearfield');
  
    $day.each(function() {
        for (var i=0; i<31; i++) {
            if (i+1 == todayDate) {
                this.options[i] = new Option(i+1, i+1, true, true);
            } else {
                this.options[i] = new Option(i+1, i+1);
            }
        }
    });

    $month.each(function() {
        for (var m=0; m<12; m++) {
            if (m+1 == todayMonth) {
              this.options[m] = new Option(monthtext[m], m+1, true, true);
            } else {
              this.options[m] = new Option(monthtext[m], m+1);
            }
        }
    });

    $year.each(function() {
        var startYear = todayYear-10;
        for (var y=0; y<20; y++) {
            if (startYear == todayYear) {
                this.options[y] = new Option(startYear, startYear, true, true);
            } else {
                this.options[y] = new Option(startYear, startYear);
            };
        startYear+=1;
        } 
    });
}
