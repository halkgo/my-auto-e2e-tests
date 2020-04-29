const { I } = inject();
const checkboxesPage = require('../pages/checkboxesPage');
const passwordPage = require('../pages/passwordPage');

Feature('checkBoxes');

Scenario('check checkboxes', () => {
    I.amOnPage (checkboxesPage.url);
    I.dontSeeCheckboxIsChecked(checkboxesPage.firstcheck);
    I.seeCheckboxIsChecked(checkboxesPage.secondcheck);
    I.click(checkboxesPage.firstcheck);
    I.seeCheckboxIsChecked(checkboxesPage.firstcheck);
    I.click(checkboxesPage.secondcheck);
    I.dontSeeCheckboxIsChecked(checkboxesPage.secondcheck);
});

Scenario('check links', () => {
    I.amOnPage ("https://the-internet.herokuapp.com/");
    I.click('File Download');
    I.see('File Downloader','h3');
    I.executeScript("window.history.back();");
    I.clickLink('File Upload');
    I.see('File Uploader','h3');
});


Scenario('recovery password', () => {
    I.amOnPage (passwordPage.url);
    I.fillField(passwordPage.email,'test1@yiopmail.com');
    I.click(passwordPage.retrievePassword);
    I.waitInUrl('email_sent',3);
});

Scenario('tab navigation', () => {
    I.amOnPage ("http://the-internet.herokuapp.com/windows");
    I.click('Click Here');
    I.switchToNextTab();
    I.seeInTitle('New Window');
    I.dontSeeInTitle('The Internet');
});








