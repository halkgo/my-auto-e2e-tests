const { Helper } = codeceptjs;

class MyPlaywright extends Helper {
  
  /* обращаемся к странице, теперь page можно использовать во всех функциях 
  или добавлять в каждую как в примере:
  async goBack() {
  const { page } = this.helpers.MyPlaywright;
  await page.goBack();
}
  */
  page() {
  return this.helpers.Playwright.page;
  }
  browser() {
    return this.helpers.Playwright.browser;
    }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    this.err = null;
    this.page().on('pageerror', exception => {
      this.err = exception;
    });
  }

  _afterStep() {
    if (this.err) {
      throw new Error(`Page JS error ${this.err}`);
    }
    
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }
 
  async goBack(){
    await this.page().goBack();
  }

}

module.exports = MyPlaywright;
