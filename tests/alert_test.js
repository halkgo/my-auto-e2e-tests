const alertPage = require('./pages/alertPage');

Feature('alerts');

Scenario('click for js Alert', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/javascript_alerts");
    I.amAcceptingPopups();
    I.click (alertPage.alert);
    I.acceptPopup();
    I.see('You successfuly clicked an alert');
});

Scenario('click for js Confirm', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/javascript_alerts");
    I.amAcceptingPopups();
    I.click (alertPage.confirm);
    I.acceptPopup();
    I.see('You clicked: Ok');
});

Scenario('click for js Confirm', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/javascript_alerts");
    I.amCancellingPopups;
    I.click (alertPage.confirm);
    I.cancelPopup;
    I.see('You clicked: Cancel');
});

Scenario('click for js Promt', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/javascript_alerts");
    I.amAcceptingPopups();
    I.click (alertPage.promt);
    I.acceptPopup();
    I.see('You entered:');
});


Scenario('click for js Promt:Cansel', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/javascript_alerts");
    pause;
    I.amCancellingPopups;
    I.click (alertPage.promt);
    I.cancelPopup;
    I.see('You entered: null');
});


