import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const contactSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.max(120, "Name is too long"),
	organisation: z.string().optional(),
	email: z
		.string()
		.trim()
		.toLowerCase()
		.email("A valid email address is required"),
	phone: z
		.string()
		.optional()
		.refine((val) => {
			if (!val) return true;
			return isValidPhoneNumber(val);
		}, "Phone must be valid international format, e.g. +2348012345678"),
	interest: z.string().min(1, "Area of interest is required"),
	message: z
		.string()
		.min(1, "Message is required")
		.max(1000, "Message is too long"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
