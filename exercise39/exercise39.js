const checkEmail = (email) => {
  let testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return testEmail;
};

module.exports = checkEmail;
