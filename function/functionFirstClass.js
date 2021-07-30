function fn(cb) {
  console.log('Execute callBack');
  console.log(typeof cb);
  cb();
}

function callBack() {
  console.log('function in parameter');
}

fn(callBack);

const obj = {
  // callBack: callBack,
  callBack,
};

obj.callBack();

function fn2(n1) {
  return function (n2) {
    return n1 * n2;
  };
}

const func2 = fn2(10);
const mult = func2(3);
console.log(mult);
