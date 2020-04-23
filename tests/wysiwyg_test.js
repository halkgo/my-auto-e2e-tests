const wysiwygPage = require('../pages/wysiwygPage');

Feature('wysiwyg');

Scenario('test something', (I) => {
    I.amOnPage ("http://the-internet.herokuapp.com/");
    I.click ("WYSIWYG Editor");
    I.switchTo(wysiwygPage.iframe);
    I.click(wysiwygPage.textarea);
    I.pressKey(['CommandOrControl', 'A']);
    I.fillField(wysiwygPage.textarea, 'AAAAA');
    I.switchTo();
    I.click(wysiwygPage.button.bold);
    I.switchTo(wysiwygPage.iframe);
    I.pressKey('Enter');
    I.fillField(wysiwygPage.textarea, 'Bold text');
    I.saveScreenshot ("editor_test.png");

});
