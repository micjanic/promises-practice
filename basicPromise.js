function divide(a, b) {
  return new Promise(function (resolve, reject) {
    if (b === 0) {
      reject(new Error("you cannot divide by 0!"));
      return;
    }
    resolve(a / b);
  });
}

divide(10, 0)
  .then(function (result) {
    console.log(`division success: ${result}`);
  })
  .catch(function (error) {
    console.log("there was an error");
    console.log(error);
  });
