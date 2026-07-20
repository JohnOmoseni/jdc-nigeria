import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface ContactEmailProps {
	name: string;
	email: string;
	phone?: string;
	organisation?: string;
	interest: string;
	message: string;
}

export const ContactEmail = ({
	name,
	email,
	phone,
	organisation,
	interest,
	message,
}: ContactEmailProps) => (
	<Html>
		<Head />
		<Preview>New Contact Form Submission from {name}</Preview>
		<Body style={main}>
			<Container style={container}>
				<Section style={box}>
					<Heading style={heading}>New Contact Inquiry</Heading>
					<Hr style={hr} />
					<Text style={paragraph}>
						<b>Name:</b> {name}
					</Text>
					<Text style={paragraph}>
						<b>Email:</b> {email}
					</Text>
					<Text style={paragraph}>
						<b>Phone:</b> {phone || "N/A"}
					</Text>
					<Text style={paragraph}>
						<b>Organisation:</b> {organisation || "N/A"}
					</Text>
					<Text style={paragraph}>
						<b>Interest:</b> {interest}
					</Text>
					<Hr style={hr} />
					<Text style={paragraph}>
						<b>Message:</b>
					</Text>
					<Text style={paragraph}>{message}</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
};

const box = {
	padding: "0 48px",
};

const heading = {
	fontSize: "24px",
	lineHeight: "1.3",
	fontWeight: "700",
	color: "#484848",
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "1.4",
	color: "#484848",
};

const hr = {
	borderColor: "#cccccc",
	margin: "20px 0",
};

export default ContactEmail;
