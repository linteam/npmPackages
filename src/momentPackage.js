const moment = require("moment");

function Test() {
  console.log("---Moment Package---");
  console.log(moment().format("YYYY-MM-DD"));
}

//module.exports.Test = Test;
module.exports = Test;
