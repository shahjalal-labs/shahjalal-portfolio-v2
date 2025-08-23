import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdEmail,
  MdPhone,
  MdWhatsapp,
  MdLocationOn,
  MdSend,
} from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_nynr5dj",
        "template_4hpms5h",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          time: new Date().toLocaleString(),
          message: data.message,
        },
        "z20e81QJ7954OO52b",
      );
      MySwal.fire({
        title: <p className="text-2xl font-bold">🚀 Message Sent!</p>,
        html: (
          <p className="text-gray-700 dark:text-gray-300">
            Thanks for reaching out! I’ll respond within 24 hours. 🕒
          </p>
        ),
        icon: "success",
        confirmButtonColor: "#6366f1",
        confirmButtonText: "Great!",
        customClass: {
          popup: "rounded-xl shadow-2xl dark:bg-gray-900",
          confirmButton: "px-6 py-2 rounded-lg",
        },
      });
      reset();
    } catch (error) {
      MySwal.fire({
        title: "❌ Error!",
        text: "Message not sent. Please try again later.",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-24 px-6 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
            📬 Let's Talk!
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Got an idea, question or collaboration in mind? I’m all ears. ✨
          </p>
        </motion.div>

        <div className="grid  md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <MdEmail className="text-pink-400 text-2xl" />,
                title: "Email",
                value: "muhommodshahjalal@gmail.com",
                link: "mailto:muhommodshahjalal@gmail.com",
              },
              {
                icon: <FaLinkedin className="text-sky-400 text-2xl" />,
                title: "LinkedIn",
                value: "Connect with me",
                link: "https://www.linkedin.com/in/shahjalal-labs/",
              },
              {
                icon: <FaGithub className="text-gray-400 text-2xl" />,
                title: "GitHub",
                value: "shahjalal-labs",
                link: "https://github.com/shahjalal-labs",
              },
              {
                icon: <MdPhone className="text-green-400 text-2xl" />,
                title: "Phone",
                value: "01540325659",
                link: "tel:+8801540325659",
              },
              {
                icon: <MdWhatsapp className="text-emerald-400 text-2xl" />,
                title: "WhatsApp",
                value: "01540325659",
                link: "https://wa.me/+8801540325659",
              },
              {
                icon: <MdLocationOn className="text-purple-400 text-2xl" />,
                title: "Location",
                value: "Sharifpur, Gazipur, Dhaka, Bangladesh",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                className="flex items-start gap-4 p-4 bg-white/5 hover:bg-white/10 transition backdrop-blur-md rounded-xl border border-white/10 hover:shadow-md hover:shadow-purple-500/10"
              >
                <div className="p-3 bg-white/10 rounded-full">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-300">{item.title}</h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-purple-300">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl border border-white/10 space-y-6 shadow-2xl shadow-fuchsia-700/10"
            noValidate
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              💬 Send a Message
            </h3>
            {[
              {
                id: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Jane Doe",
                validation: {
                  required: "Name is required",
                  minLength: { value: 3, message: "At least 3 characters" },
                  maxLength: { value: 50, message: "Less than 50 characters" },
                },
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "jane@example.com",
                validation: {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                },
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "Web Development Inquiry",
                validation: {
                  required: "Subject is required",
                  minLength: { value: 5, message: "At least 5 characters" },
                  maxLength: {
                    value: 100,
                    message: "Less than 100 characters",
                  },
                },
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.id, field.validation)}
                  className={`w-full px-4 py-3 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all border ${
                    errors[field.id] ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors[field.id] && (
                  <p className="text-sm text-red-400 mt-1">
                    {errors[field.id].message}
                  </p>
                )}
              </div>
            ))}

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "At least 10 characters" },
                  maxLength: {
                    value: 1000,
                    message: "Less than 1000 characters",
                  },
                })}
                className={`w-full px-4 py-3 bg-white/10 text-white rounded-lg outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all border ${
                  errors.message ? "border-red-500" : "border-white/10"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 font-semibold rounded-lg transition-all shadow-xl ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed bg-gradient-to-r from-fuchsia-600 to-pink-600"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-700 hover:to-fuchsia-700"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <MdSend className="text-lg" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
