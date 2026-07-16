import { useMutation } from "@tanstack/react-query";
import type { ContactSchemaType } from "../schemas/contact";

const submitContact = async (data: ContactSchemaType): Promise<void> => {
	// Simulate API request delay
	return new Promise((resolve) => setTimeout(resolve, 1500));
};

export const useSubmitContact = () => {
	return useMutation({
		mutationFn: submitContact,
	});
};
