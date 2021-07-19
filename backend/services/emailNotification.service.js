const { transporter } = require('config/nodemailer');

const sendEmailToken = (mailTo, emailToken) => {
  transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: mailTo,
    subject: 'React Auth Kit',
    html:
      `Code verification is: ${emailToken.token}`,
  })
}

module.exports = {
  sendEmailToken,
}
