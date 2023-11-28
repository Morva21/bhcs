import nodemailer from 'nodemailer'
export const Email = (req, res)=>{
    const { name, email, phone, message } = req.body;
    console.log(name, email, phone, message)
  
    // Set up nodemailer transporter with email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
        user: 'bernadettehomeservice@gmail.com',
        pass: process.env.GMAIL_PWD_1, 
        method:'PLAIN'
      },
    });
  
    const mailOptions = {
      from: 'bernadettehomeservice@gmail.com',
      to: 'bernadettehomeservice@gmail.com', 
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
