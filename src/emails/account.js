const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'santanallanes@hotmail.com',
        subject: 'Thanks for joining task-manager.',
        text: `Welcome to task-manager, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'santanallanes@hotmail.com',
        subject: `We\'re sorry to see you leave, ${name}.`,
        text: `This message confirms user ${name} has been deleted.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}