var base = require("../basetest.js"),
    driver = base.getDriver();

base.test.describe("Grooveshark", function() {

  // base.test.before(function(done) {
  //   base.loadSite(driver, "http://www.grooveshark.com", done);
  // });

  // base.test.after(function() {
  //   driver.quit();
  // });

  shared.shouldBehaveLikeAMusicSite(driver, "http://www.grooveshark.com");

});