var cronHelper = require("./helper/cronHelper");

function getTriggerTimes(records) {
  var triggerTimes = [];
  console.log(records)
  records.forEach((element) => {
    const { CRON ,TIME_ZONE} = JSON.parse(JSON.stringify(element));
    triggerTimes.push({
      ...element,
      CRON_INFO: getCronInfo(CRON),
      TRIGGER_TIMES: cronHelper.getAllTriggerTime(CRON, TIME_ZONE),
    });
  });
  console.log(triggerTimes)
  return triggerTimes;
}

function getCronInfo(cron) {
  return cronHelper.getCronInfo(cron);
}

module.exports = {
  getTriggerTimes: getTriggerTimes,
  getCronInfo: getCronInfo,
};
