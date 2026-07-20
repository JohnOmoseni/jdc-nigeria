import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";
import { ContactEmailHtml } from "@/emails/ContactEmail";

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

		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
			},
			body: JSON.stringify({
				from: "JDC Nigeria <onboarding@resend.dev>",
				to: ["info@jdcnigeria.com"],
				subject: `New Contact Inquiry: ${interest} - ${name}`,
				html: ContactEmailHtml({
					name,
					email,
					phone,
					organisation,
					interest,
					message,
				}),
				reply_to: email,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			return NextResponse.json({ error: errorData.message || "Failed to send email" }, { status: response.status });
		}

		const data = await response.json();
		return NextResponse.json({ success: true, data });
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
