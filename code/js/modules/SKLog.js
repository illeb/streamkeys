;(function() {
  "use strict";

  /**
   * Log messages to console with prepended message. Also dispatches a JS event
   * to interact with tests
   * @param msg {String} message to log
   * @param [obj] {Object} object to dump with message
   * @param [err] {Boolean} TRUE if the message is an error
   */
  module.exports = function(msg, obj, err) {
    if(msg) {
      obj = obj || "";
      if(err) {
        console.error("STREAMKEYS-ERROR: " + msg, obj);
        msg = "ERROR: " + msg;
      }
      else { console.log("STREAMKEYS-INFO: " + msg, obj); }

      document.dispatchEvent(new CustomEvent("streamkeys-test-response", {detail: msg}));
    }
  };
})();
