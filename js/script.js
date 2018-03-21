//Handle navigation 

$(document).ready(function () {

    var logoVibrate = $('#Logo').vibrate("long"); //Vibrate is only available on Android devices - vibration is added to every button
    $('#logo').click(function (logoVibrate) { //navigate to index.html page when user clicks on logo
        location.href = 'index.html';
    })

    $('#home').click(function (e) { //navigate to index.html when user clicks on home button (desktop only)
        location.href = 'index.html'; 
    })

    var homeMobileVibrate = $('#home-mobile').vibrate("long"); 
    $('#home-mobile').click(function (homeMobileVibrate) { //navigate to index.html when user clicks on home button in the hamburger menu (mobile only)
        location.href = 'index.html';
    })

    $('#daytoday').click(function (e) { 
        location.href = 'daytoday.html'; //navigate to day-to-day page    
    })

    var dayToDayVibrate = $('#daytoday-mobile').vibrate("long"); 
    $('#daytoday-mobile').click(function (dayToDayVibrate) { //navigate to day-to-day page (mobile only)
        location.href = 'daytoday.html';
    })

    $('#groups').click(function (e) { //navigate to groups page
        location.href = 'groups.html'; 
    })

    var groupsMobileVibrate = $('#groups-mobile').vibrate("long"); 
    $('#groups-mobile').click(function (groupsMobileVibrate) { //navigate to groups page (mobile only)
        location.href = 'groups.html';
    })

    $('#team').click(function (e) { //meet the team button
        featureUnavailable();
    })

    var teamMobileVibrate = $('#team-mobile').vibrate("long"); 
    $('#team-mobile').click(function (teamMobileVibrate) { //meet the team button (mobile only)
        featureUnavailable();
    })

    $('#parents').click(function (e) { //parents area button
        featureUnavailable();
    })

    var parentsMobileVibrate = $('#parents-mobile').vibrate("long"); 
    $('#parents-mobile').click(function (parentsMobileVibrate) { //parents area button (mobile only)
        featureUnavailable();
    })

    $('#contact').click(function (e) { //contact us button
        featureUnavailable();
    })

    var contactMobileVibrate = $('#contact-mobile').vibrate("long"); 
    $('#contact-mobile').click(function (contactMobileVibrate) { //contact us button (mobile only)
        featureUnavailable();
    })

    function featureUnavailable() { //activated when the user clicks/taps on a page button for a page that does not yet exist
        window.alert('This feature is not available in this prototype');
    }

    //Group icon navigation (applicable only to 'groups' page)

    $('#minimonkeys-icon').click(function (e) { //Mini Monkeys
        location.href = '#minimonkeys'; //navigate to a CSS ID called 'minimonkeys'
    })

    $('#littlelions-icon').click(function (e) { //Little Lions
        location.href = '#littlelions'; //navigate to a CSS ID called 'littlelions'
    })

    $('#jollygiraffes-icon').click(function (e) { //Jolly Giraffes
        location.href = '#jollygiraffes'; //navigate to a CSS ID called 'jollygiraffes'
    })

    //Return to top navigation (applicable only to 'groups' page)

    $('#topofpage-minimonkeys').click(function (e) { //Mini Monkeys
        location.href = '#container'; //navigate to the 'container' which holds all site elements, i.e. top of the page
    })

    $('#topofpage-littlelions').click(function (e) { //Little Lions
        location.href = '#container'; //navigate to the 'container' which holds all site elements, i.e. top of the page 
    })

    $('#topofpage-jollygiraffes').click(function (e) { //Jolly Giraffes
        location.href = '#container'; //navigate to the 'container' which holds all site elements, i.e. top of the page
    })
});
