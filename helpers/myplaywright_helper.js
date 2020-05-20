const { Helper } = codeceptjs;

class MyPlaywright extends Helper {
  
  
  page() {
  return this.helpers.Playwright.page;
  }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }
  
  async goBack(){
    await page().goBack();
  }
  
}

module.exports = MyPlaywright;
