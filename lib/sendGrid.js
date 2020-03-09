const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail(value) {
  const msg = {
    to: 'alexisaac@codingtown.com',
    from: 'edison@codingtown.com',
    subject: 'Successfully data received',
    html: `<p>Hi Team,</p>
    <strong>${value}</strong>
    <p>Regards, <br/> Coding Town India</p>`
  };
  sgMail.send(msg);
}
module.exports = sendMail;
