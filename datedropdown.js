// Author: Kenny Khek
/*
To use, include this in html

<select class="dayfield"></select>
<select class="monthfield"></select> 
<select class="yearfield"></select> 

*/  

var monthtext = ['January,'February','March','April','May','June','July','August','September','October','November','December'];

function _init_datedropdown() {
    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();
    var $day = $('.dayfield');
    var $month = $('.monthfield');
    var $year = $('.yearfield');
  
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
