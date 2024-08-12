var numUniqueEmails = function (emails) {
  let set = new Set();
  for (let email of emails) {
    let [local, domain] = email.split("@");
    let localWithoutPlus = local.split("+")[0];
    let localWithDot = localWithoutPlus.replace(/\./g, "");
    set.add(localWithDot + "@" + domain);
  }
  return set.size;
};

console.log(
  numUniqueEmails([
    "arghya.majumder@gmail.com",
    "arghya.majumder+ybz@gmail.com",
  ])
);
