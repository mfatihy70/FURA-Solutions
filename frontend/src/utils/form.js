import { useTranslation } from "react-i18next"
import emailjs from "@emailjs/browser" // Updated package import

// Custom hook to handle form data and submission
export const useFormHandlers = (
  setFormData, // Function to update form data state
  setErrors, // Function to update form validation errors state
  setStatus, // Function to update form submission status
  setShowModal // Function to control modal visibility
) => {
  const { t } = useTranslation() // Translation hook
  const devTemplate = "template_cttbgcc" // Email template ID for development
  const prodTemplate = "template_gjbgd32" // Email template ID for production

  // Function to handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value })) // Update form data state
    setErrors((prev) => ({ ...prev, [name]: "" })) // Clear the error for the updated field
  }

  // Function to handle form submission
  const handleSubmit = (e, formData) => {
    e.preventDefault() // Prevent default form submission behavior

    // Validate form data
    const newErrors = {}
    if (formData.name.trim().length < 3) {
      newErrors.name = t("form.nameTooShort") // Set error if name is too short
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("form.invalidEmail") // Set error if email is invalid
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = t("form.messageTooShort") // Set error if message is too short
    }
    if (!formData.receiver) {
      newErrors.receiver = t("form.receiverRequired") // Set error if receiver is not selected
    }

    // If there are validation errors, update errors state and stop the process
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Choose the appropriate email template based on the receiver value
    const selectedTemplate =
      formData.receiver === "fatih" ? devTemplate : prodTemplate

    // Send the email using EmailJS
    emailjs
      .send(
        "service_ikms96m", // Replace with your actual service ID
        selectedTemplate, // Template ID
        formData, // Form data
        "w4_NTeotCfTVu7JH1" // Your public user ID (API key)
      )
      .then(() => {
        // On success, update the submission status and show a success modal
        setStatus({ success: true, message: t("form.emailSuccess.title") })
        setShowModal(true)

        // Clear the form data after successful submission
        setFormData({ name: "", email: "", message: "", receiver: "" })
      })
      .catch((error) => {
        // Extract a detailed error message if available
        const errorDetail =
          error.text || error.message || t("form.emailFailure.unknown")
        const errorMessage = `${t("form.emailFailure.error")} ${errorDetail}`

        // Update submission status with the error and show a failure modal
        setStatus({ success: false, message: errorMessage })
        setShowModal(true)

        // Log the error to the console for debugging purposes
        console.error("Email send failed:", error)
      })
  }

  return { handleChange, handleSubmit } // Return the form handlers
}
