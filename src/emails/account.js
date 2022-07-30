const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

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