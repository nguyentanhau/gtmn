$(document).ready(function () {
    var ngay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    var thang = [1,2,3,4,5,6,7,8,9,10,11,12];
    var nam = [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007];
    // var tinh = ['TPHCM','Bentre'];
    ngay.forEach(function (t) {
        var opt = document.createElement('option');
        opt.value = t;
        opt.innerHTML = t;
        $('select#ngay').append(opt);
    });
    thang.forEach(function (t) {
       var opt = document.createElement('option');
        opt.value = t;
        opt.innerHTML = t;
        $('select#thang').append(opt);
    });

    nam.forEach(function (t) {
        var opt = document.createElement('option');
        opt.value = t;
        opt.innerHTML = t;
        $('select#nam').append(opt);
    });



});