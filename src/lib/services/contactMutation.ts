import { useMutation } from "@tanstack/react-query";
import type { ContactSchemaType } from "../schemas/contact";

const submitContact = async (data: ContactSchemaType): Promise<void> => {
	// return new Promise((resolve) => setTimeout(resolve, 1500));
	const response = await fetch("/api/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.error || "Failed to submit contact form");
	}

	const res = await response.json();
	return res;
};

export const useSubmitContact = () => {
	return useMutation({
		mutationFn: submitContact,
	});
};
