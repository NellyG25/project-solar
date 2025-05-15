import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method === "POST") {

    try {

    const {
      first_text,
      email,
      full_address,
      state,
      placeholder,
      
    } = await req.json();


      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "nelsonobilonu@gmail.com",
          pass: "vnwb gzrt ejxd ysph",
        },
      });

      const mailOptions = {
        from: email,
        to: "nelsonobilonu@gmail.com",
        subject: "Contact Form Submission",
        html: `
                    <h1>Contact Form</h1>
                    <p>First Name: ${first_text}</p>
                    <p>Email: ${email}</p>
                    <p>Full address: ${full_address}</p>
                    <p>State: ${state}</p>
                
                    <p>Company Name: ${placeholder}</p>
                  
                `,
      };

 
      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json('method not allowed');
  }

}