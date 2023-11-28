// ContactUsForm.tsx

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { ClipLoader } from "react-spinners";
import { sendEmail } from "../../api/fetchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/Layout/Layout";

interface ContactFormState {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    });
    setLoading(true);
   var isSent= await sendEmail({
      firstName: formData.firstName,
      lastName: formData.lastName,
      subject: formData.subject,
      email: formData.email,
      message: formData.message,
    });
    setLoading(false);
    if(isSent){
      toast("Email has been sent successfully", {
        position: "top-center",
        type: "success",
      });
    }
   
  };

  return (
    <Layout>
    <div className={styles.formContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </label>

        <label className={styles.formLabel}>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </label>

        <label className={styles.formLabel}>
          Subject
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.formInput}
            required
          />
        </label>

        <label className={styles.formLabel}>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.formTextarea}
            required
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          {isLoading ? <ClipLoader color="white" /> : "Submit"}
        </button>
      </form>
      <ToastContainer/>
    </div>
    </Layout>
  );
};

export default ContactUsForm;
