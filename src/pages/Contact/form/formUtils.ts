import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

// Custom hook to handle form data and submission
export const useFormHandlers = (
  setFormData: any, // Function to update form data state
  setErrors: any, // Function to update form validation errors state
  setStatus: any, // Function to update form submission status
  setShowModal: any // Function to control modal visibility
) => {
  const { t } = useTranslation(); // Translation hook
  const devTemplate = "template_cttbgcc"; // Email template ID for development
  const prodTemplate = "template_gjbgd32"; // Email template ID for production

  // Function to handle changes in form input fields
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value })); // Update form data state
    setErrors((prev: any) => ({ ...prev, [name]: "" })); // Clear the error for the updated field
  };

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }, formData: any) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form data
    const newErrors: { [key: string]: string } = {};
    if (formData.name.length < 3) {
      newErrors.name = t("form.nameTooShort"); // Set error if name is too short
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("form.invalidEmail"); // Set error if email is invalid
    }
    if (formData.message.length < 10) {
      newErrors.message = t("form.messageTooShort"); // Set error if message is too short
    }
    if (!formData.receiver) {
      newErrors.receiver = t("form.receiverRequired"); // Set error if receiver is not selected
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Update errors state if there are validation errors
      return;
    }

    // Choose the template based on the receiver value
    const selectedTemplate =
      formData.receiver === "fatih" ? devTemplate : prodTemplate;

    emailjs.init("w4_NTeotCfTVu7JH1"); // Initialize emailjs with user ID
    emailjs
      .send("service_ikms96m", selectedTemplate, formData) // Send email using emailjs
      .then(() => {
        setStatus({ success: true, message: t("form.emailSuccess.title") }); // Set status on success
        setShowModal(true); // Show modal on success
        setFormData({ name: "", email: "", message: "", receiver: "" }); // Clear form data
      })
      .catch((error) => {
        // Extract detailed error message if available
        const errorDetail =
          error.text || error.message || "An unknown error occurred.";
        const errorMessage = `${t("form.emailFailure.error")} ${errorDetail}`;

        setStatus({ success: false, message: errorMessage }); // Set status on failure
        setShowModal(true); // Show modal on failure
        console.error("Email send failed:", error); // Log error to console
      });
  };

  return { handleChange, handleSubmit }; // Return the handlers
};
