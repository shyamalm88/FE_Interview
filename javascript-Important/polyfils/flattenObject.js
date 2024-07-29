const flattenObject = (input) => {
  let result = {};
  for (const key in input) {
    if (!input.hasOwnProperty(key)) {
      continue;
    }
    if (typeof input[key] === "object" && !Array.isArray(input[key])) {
      var subFlatObject = flattenObject(input[key]);
      for (const subkey in subFlatObject) {
        result[key + "_" + subkey] = subFlatObject[subkey];
      }
    } else {
      result[key] = input[key];
    }
  }
  return result;
};

const input = {
  name: "Mansi",
  age: 25,
  department: {
    name: "Customer Experience",
    section: "Technical",
    branch: {
      name: "Bangalore",
      timezone: "IST",
    },
  },
  company: {
    name: "SAP",
    customers: ["Ford", "Nestle"],
  },
  skills: ["javascript", "node.js", "html"],
};

console.log(flattenObject(input));
