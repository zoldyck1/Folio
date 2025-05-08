"use server";

import { z } from "zod";
import { sendEmail, type Email } from "@/services/email";
import { personalInfo } from "@/lib/data";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): ContactFormState {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  const emailToSend: Email = {
    from: email, // This should ideally be a no-reply address or your professional email
    to: personalInfo.email, // Your actual email address
    subject: `New Contact Form Submission from ${name} - DevFolio`,
    body: `
      You have received a new message from your DevFolio contact form:
      
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
    `,
  };

  try {
    // In a real app, this would call an email service (e.g., SendGrid, Resend)
 sendEmail(emailToSend);
    return {
      message: "Your message has been sent successfully! I'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      message: "Failed to send message. Please try again later or contact me directly.",
      success: false,
    };
  }
}
