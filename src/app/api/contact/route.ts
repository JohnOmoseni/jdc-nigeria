import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";
import ContactEmail from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const result = contactSchema.safeParse(body);

		if (!result.success) {
			return NextResponse.json(
				{ error: "Invalid form data", details: (result.error as any).errors },
				{ status: 400 },
			);
		}

		const { name, email, phone, organisation, interest, message } = result.data;

		const { data, error } = await resend.emails.send({
			from: "JDC Nigeria <onboarding@resend.dev>",
			to: ["info@jdcnigeria.com"],
			subject: `New Contact Inquiry: ${interest} - ${name}`,
			react: ContactEmail({
				name,
				email,
				phone,
				organisation,
				interest,
				message,
			}),
			replyTo: email,
		});

		if (error) {
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json({ success: true, data });
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
