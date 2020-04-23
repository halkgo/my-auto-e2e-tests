const hoversPage = require('./pages/hoversPage');

Feature('hovers');

Scenario('move', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/hovers");
    I.moveCursorTo(hoversPage.icon);
    I.see('name: user1');
});

Scenario('view profile', (I) => {
    I.amOnPage ("https://the-internet.herokuapp.com/hovers");
    I.moveCursorTo(hoversPage.icon);
    I.click(hoversPage.profile);
    I.waitInUrl('/users/1',3);
});


