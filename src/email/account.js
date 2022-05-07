const sendmail = require("sendmail")();

const sendWelcomeEmail = (email, name) => {
  sendmail({
    from: "adamypadan@gmail.com",
    to: email,
    subject: "Welcome",

    html: `Hello, ${name}! Enjoy using the service!`,
  });
};

module.exports = {
  sendWelcomeEmail,
};
