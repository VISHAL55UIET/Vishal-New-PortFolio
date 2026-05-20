import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_28co9jg",
        "template_d5hej4q",
        form.current,
        "JHGPApx_8QC88ZZUl"
      )
      .then(
        (result) => {
          console.log("SUCCESS =>", result);
          form.current.reset();
          setIsSubmitting(false);

          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.log("EMAILJS FULL ERROR =>", error);
          setIsSubmitting(false);

          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <ToastContainer />

      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Get In <span className="text-[#8245ec]">Touch</span>
        </h2>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Open to software engineering opportunities, backend development,
          full stack collaboration, scalable systems, and impactful tech
          projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#8245ec]/10">
                  <Mail className="h-6 w-6 text-[#8245ec]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vishalsingh962849@gmail.com"
                    className="text-gray-400 hover:text-[#8245ec] transition"
                  >
                    vishalsingh962849@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#8245ec]/10">
                  <Phone className="h-6 w-6 text-[#8245ec]" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919984977210"
                    className="text-gray-400 hover:text-[#8245ec] transition"
                  >
                    +91 9984977210
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-[#8245ec]/10">
                  <MapPin className="h-6 w-6 text-[#8245ec]" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400">
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/5 p-8 rounded-xl shadow-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send a Message
            </h3>

            <form
              ref={form}
              className="space-y-6"
              onSubmit={sendEmail}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-[#131025] text-white focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
                  placeholder="Enter your name..."
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-[#131025] text-white focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
                  placeholder="Enter your email..."
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-[#131025] text-white focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
                  placeholder="Enter subject..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-[#131025] text-white focus:outline-none focus:ring-2 focus:ring-[#8245ec] resize-none"
                  placeholder="Tell me about your project, opportunity, or collaboration..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cosmic-button flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;