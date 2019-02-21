//jshint esversion:6

exports.getDate = function() {
  const today = new Date();
  const currentDay = today.getDate();
  const dateOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  return today.toLocaleDateString('en-CA', dateOptions);
};

exports.getDay = function() {
  const day = new Date();
  const currentDay = day.getDate();
  const dateOptions = {
    weekday: 'long',
  };

  return day.toLocaleDateString('en-CA', dateOptions);
};
