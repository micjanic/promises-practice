function wait(ms) {
  return new Promise(function (resolve, reject) {
    if (ms <= 0) {
      reject(new Error("cannot wait 0 seconds or less than 0"));
    }
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

wait(-10)
  .then(function () {
    console.log("we have waited 1 second");
  })
  .catch(function (error) {
    console.log(`there was an error ${error}`);
  });
