const generateOTP = (nums) => {
  let digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  let otp = "";
  for (let i = 0; i < nums; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  console.log(otp);
};

generateOTP(6);
