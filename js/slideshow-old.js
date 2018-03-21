// Siema slideshow

//Slideshow on home page
var mySiema1 = new Siema({
    selector: '.js-siema1',
    loop: true
});

//'Mini Monkeys' slideshow on groups page
var mySiema2 = new Siema({
    selector: '.js-siema2',
    loop: true
});

//'Little Lions' slideshow on groups page
var mySiema3 = new Siema({
    selector: '.js-siema3',
    loop: true
});

//'Jolly Gitaffes' slideshow on groups page
var mySiema4 = new Siema({
    selector: '.js-siema4',
    loop: true
});

//Buttons for Siema slideshow on home page
document.querySelector('.js-prev1').addEventListener('click', function () { mySiema1.prev() });
document.querySelector('.js-next1').addEventListener('click', function () { mySiema1.next() });

//Buttons for Siema slideshow on 'Mini Monkeys' slideshow on groups page
document.querySelector('.js-prev2').addEventListener('click', function () { mySiema2.prev() });
document.querySelector('.js-next2').addEventListener('click', function () { mySiema2.next() });

//Buttons for Siema slideshow on 'Little Lions' slideshow on groups page
document.querySelector('.js-prev3').addEventListener('click', function () { mySiema3.prev() });
document.querySelector('.js-next3').addEventListener('click', function () { mySiema3.next() });

//Buttons for Siema slideshow on 'Jolly Giraffes' slideshow on groups page
document.querySelector('.js-prev4').addEventListener('click', function () { mySiema4.prev() });
document.querySelector('.js-next4').addEventListener('click', function () { mySiema4.next() });