const sumAll = function (start, stop) {
  let sum = 0;

  if (start < 0 || stop < 0) {
    return "ERROR";
  } else if (typeof start !== "number" || typeof stop !== "number") {
    return "ERROR";
  }
  if (start < stop) {
    loopStart = start;
    loopStop = stop;
  } else {
    loopStart = stop;
    loopStop = start;
  }
  for (let i = loopStart; i <= loopStop; ++i) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
