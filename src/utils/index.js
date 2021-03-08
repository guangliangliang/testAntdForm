const setObjDefaultValue = (obj, value = null) => {
  return new Proxy(obj, {
    get(obj, prop) {
      return prop in obj ? obj[prop] : value;
    }
  });
};

// 进行类型判断
const is = {
  types: [
    "Array",
    "Boolean",
    "Date",
    "Number",
    "Object",
    "Function",
    "RegExp",
    "String",
    "Window",
    "HTMLDocument"
  ]
};
// eslint-disable-next-line array-callback-return
is.types.map((item) => {
  is[item] = (function (type) {
    return function (obj) {
      return Object.prototype.toString.call(obj) === `[object ${type}]`;
    };
  })(item);
});

const callFun = (result) => {
  is.Function(result) ? result() : null;
};

export { is, callFun, setObjDefaultValue };
