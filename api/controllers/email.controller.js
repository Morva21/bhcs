import nodemailer from 'nodemailer'
export const Email = (req, res)=>{
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message)
  
    // Set up nodemailer transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ddw.web.dev.services@gmail.com', // Your email address
        pass: process.env.GMAIL_PWD, // Your email password or an app-specific password
      },
    });
  
    const mailOptions = {
      from: 'ddw.web.dev.services@gmail.com',
      to: 'ddw.web.dev.services@gmail.com', // Receiver's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({success: "Email sent successfully"});
      }
    });

}
export default Email