import React, { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      alert("Please verify you're not a robot.");
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      'service_3il9pqb',
      'template_8p3e99g',
      e.target,
      '6F25q7fGwDqTUwEmQ'
    )
      .then(() => {
        alert("Message sent! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
        recaptchaRef.current?.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" onClick={() => window.open('https://www.google.com/maps?q=769,7th+Main+Rd,+KSRTC+Layout,+2nd+Phase,+JP+Nagar,+Bengaluru,+Karnataka+560078&output=embed', '_blank')} />,
      title: "Our Location",
      details: "769, 7th Main Rd, KSRTC Layout, 2nd Phase, JP Nagar, Bengaluru, Karnataka 560078",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Number",
      details: "+91 73496 76668",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: "info@ishanyaindia.org",
    },
  ];

  return (
    <section id="contact" className="section bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
          Contact Us
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Have questions or want to reach out? Contact us now!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {contactInfo.map((item) => (
            <div key={item.title} className="flex gap-4 bg-white shadow-md p-6 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-md p-8 rounded-xl w-full">
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <ReCAPTCHA
                sitekey="6LfVE_wqAAAAAG6Qbo5BFC8fUR6mbpd9Aw9oC4UL"
                ref={recaptchaRef}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
