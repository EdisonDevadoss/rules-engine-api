const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendMail(value, result) {
  const msg = {
    to: 'alexisaac@codingtown.com',
    from: 'edison@codingtown.com',
    subject: 'Alert',
    html: `<p>Hi Team,</p>
    <p>Rule Engine has detected a ${value} for ${result.device_name} please find the below details.</p>
    <p>${JSON.stringify(result)}</p>
    <p>Regards, <br/>Rule Engine</p>`
  };
  sgMail.send(msg);
}
module.exports = sendMail;
