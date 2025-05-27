import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import Notification from "./common/Notification";

interface NotificationState {
  message: string;
  type: "success" | "error";
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );

  const onSubmit = () => {
    if (!formRef.current) return;
    emailjs
      .sendForm("service_q229owi", "template_c5b0ojl", formRef.current, {
        publicKey: "GdDSof2-ZFkutpkIv",
      })
      .then(() => {
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
        reset();
      })
      .catch(() => {
        setNotification({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      });
  };

  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {" "}
            Lets Work Together
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Want to learn how my services can help your business or want a quick
            30-minute virtual meeting to learn how I can help your business or
            organization grow?
          </p>
          <a
            href="https://calendly.com/daberelevi/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Schedule a Call Now
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          {notification && (
            <div className="mb-4">
              <Notification
                message={notification.message}
                type={notification.type}
              />
            </div>
          )}
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <input type="hidden" name="title" value="Contact Form Submission" />
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-1 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-1 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className={`border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-1 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className={`border rounded-md p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
