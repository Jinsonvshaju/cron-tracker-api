var cronjsMatcher = require("@datasert/cronjs-matcher");
var parser = require("@datasert/cronjs-parser");
var cronTrue = require("cronstrue");
var config = require("../../../config");

function getAllTriggerTime(cron, tz) {
  return isValidCron(cron)
    ? cronjsMatcher.getFutureMatches(cron, {
        startAt: getStartDate().toISOString(),
        endAt: getEndDate().toISOString(),
        formatInTimezone: true,
        hasSeconds: true,
        maxLoopCount: 10000,
        matchCount: 10000,
        timezone: tz,
      })
    : [];
}

function isValidCron(cron) {
  try {
    parser.parse(cron, { hasSeconds: true });
    return true;
  } catch (err) {
    console.log(config.error_messages.INVALID_CRON_MESSAGE, err);
    return false;
  }
}

function getCronInfo(cron) {
  return isValidCron(cron)
    ? cronTrue.toString(cron)
    : config.error_messages.INVALID_CRON_MESSAGE;
}

function getStartDate() {
  var oneDay = 24 * 60 * 60 * 1000;
  var startDate = new Date();
  var dateOffset =
    startDate.getDay() + config.look_back.CRON_NUMBER_OF_WEEKS * 7;
  startDate.setTime(startDate.getTime() - dateOffset * oneDay);
  return startDate;
}

function getEndDate() {
  var oneDay = 24 * 60 * 60 * 1000;
  var endDate = new Date();
  var dateOffset =
    6 - endDate.getDay() + config.look_back.CRON_NUMBER_OF_WEEKS * 7;
  endDate.setTime(endDate.getTime() + dateOffset * oneDay);
  return endDate;
}

module.exports = {
  getAllTriggerTime: getAllTriggerTime,
  getStartDate: getStartDate,
  getEndDate: getEndDate,
  isValidCron: isValidCron,
  getCronInfo: getCronInfo,
};
