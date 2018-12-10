// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let highEarners = driversWithRevenueOver(drivers, revenue)
    return highEarners.map(function(driver) {
      return driver.name;
    });
  }

function exactMatch(drivers, object) {
  key = Object.keys(object)[0];
  return drivers.filter(function(driver) {
    return driver[key] === object[key];
  });
}

function exactMatchToList(drivers, object) {
  let matches = exactMatch(drivers, object)
    return matches.map(function(driver) {
      return driver.name;
    });
  }
