
const loginPage = require('./pages/loginPage');

Feature('login');

Scenario('login empty', (I) => {
    I.amOnPage ("http://the-internet.herokuapp.com/login");
    I.click (loginPage.button);
    I.see('Your username is invalid!');
});

Scenario('login with incorrect username', (I) => {
    I.amOnPage ("http://the-internet.herokuapp.com/login");
    I.click (loginPage.username);
    I.pressKey(['CommandOrControl', 'A']);
    I.fillField(loginPage.username, 'AAAAA');
    I.click (loginPage.button);
    I.see('Your username is invalid!');
});

Scenario('login with incorrect password', (I) => {
    I.amOnPage ("http://the-internet.herokuapp.com/login");
    I.click (loginPage.username);
    I.fillField(loginPage.username, 'tomsmith');
    I.fillField(loginPage.password, 'AAAAA');
    I.click (loginPage.button);
    I.see('Your password is invalid!');
});

Scenario('login successful', (I) => {
    I.amOnPage ("http://the-internet.herokuapp.com/login");
    I.click (loginPage.username);
    I.fillField(loginPage.username, 'tomsmith');
    I.fillField(loginPage.password, 'SuperSecretPassword!');
    I.click (loginPage.button);
    I.see('You logged into a secure area!');
});
