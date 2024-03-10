import nodemailder from 'nodemailer'

const account = await nodemailder.createTestAccount()

export const mail = nodemailder.createTransport({
  host: account.smtp.host,
  port: account.smtp.port,
  secure: account.smtp.secure,
  debug: true,
  auth: {
    user: account.user,
    pass: account.pass,
  },
})
