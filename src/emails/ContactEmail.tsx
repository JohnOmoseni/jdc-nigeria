interface ContactEmailProps {
	name: string;
	email: string;
	phone?: string;
	organisation?: string;
	interest: string;
	message: string;
}

export const ContactEmailHtml = ({
	name,
	email,
	phone,
	organisation,
	interest,
	message,
}: ContactEmailProps) => `
<!DOCTYPE html>
<html>
  <head>
    <title>New Contact Form Submission from ${name}</title>
  </head>
  <body style="background-color: #f6f9fc; font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Ubuntu,sans-serif;">
    <div style="background-color: #ffffff; margin: 0 auto; padding: 20px 0 48px; margin-bottom: 64px;">
      <div style="padding: 0 48px;">
        <h1 style="font-size: 24px; line-height: 1.3; font-weight: 700; color: #484848;">New Contact Inquiry</h1>
        <hr style="border-color: #cccccc; margin: 20px 0;" />
        <p style="font-size: 16px; line-height: 1.4; color: #484848;"><b>Name:</b> ${name}</p>
        <p style="font-size: 16px; line-height: 1.4; color: #484848;"><b>Email:</b> ${email}</p>
        <p style="font-size: 16px; line-height: 1.4; color: #484848;"><b>Phone:</b> ${phone || "N/A"}</p>
        <p style="font-size: 16px; line-height: 1.4; color: #484848;"><b>Organisation:</b> ${organisation || "N/A"}</p>
        <p style="font-size: 16px; line-height: 1.4; color: #484848;"><b>Interest:</b> ${interest}</p>
        <hr style="border-color: #cccccc; margin: 20px 0;" />
        <p style="font-size: 16px; line-height: 1.4; color: #484848;"><b>Message:</b></p>
        <p style="font-size: 16px; line-height: 1.4; color: #484848;">${message}</p>
      </div>
    </div>
  </body>
</html>
`;

