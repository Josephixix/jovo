"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
    id="contact"
      className="flex justify-center items-center py-22 px-4 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-md"> {/* Smaller width */}

        {/* Heading */}
        <h2 className=" text-center text-xl sm:text-xl md:text-2xl  font-bold text-gray-700 mb-6">
          Let's Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8 font-semibold text-sm sm:text-base">
     Click the button to send me an email or connect with me on my social platforms.
             </p>

        {/* Single Box - Flex Column */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl  p-6 md:p-10 flex flex-col gap-4">

          {/* Email */}
          <a
            href="mailto:josephukohaobasi@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-black hover:bg-gray-50 text-gray-200 text-lg font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a3 3 0 003.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            Email
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/jovo_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-black hover:bg-gray-100 text-gray-200 text-lg font-semibold  transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-blue-500"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1a9.03 9.03 0 01-2.88 1.1A4.48 4.48 0 0016.5 0c-2.63 0-4.5 2.28-4.5 5.07 0 .39.04.77.12 1.13A12.94 12.94 0 013 1.64s-4 9 5 13a14.16 14.16 0 01-8 2c12 7.5 26 0 26-14.09 0-.22 0-.43-.02-.64A9.4 9.4 0 0023 3z"/>
            </svg>
            Twitter
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/josephixix"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-black hover:bg-gray-100 text-gray-200 text-lg font-semibold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.42 7.87 10.96.58.11.79-.25.79-.56v-2.05c-3.2.7-3.87-1.57-3.87-1.57-.52-1.33-1.27-1.68-1.27-1.68-1.03-.7.08-.68.08-.68 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.65 1.23 3.3.94.1-.74.4-1.23.72-1.51-2.56-.3-5.26-1.29-5.26-5.74 0-1.27.45-2.3 1.18-3.11-.12-.3-.51-1.52.11-3.17 0 0 .96-.31 3.15 1.19a10.88 10.88 0 015.74 0c2.18-1.5 3.14-1.19 3.14-1.19.62 1.65.23 2.87.11 3.17.73.81 1.18 1.84 1.18 3.11 0 4.46-2.7 5.44-5.27 5.72.41.35.77 1.03.77 2.08v3.09c0 .31.21.67.8.56A10.52 10.52 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
            </svg>
            GitHub
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.link/wy0uuk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-black hover:bg-gray-100 text-gray-200 text-lg font-semibold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-green-500"
            >
              <path d="M20.52 3.48A11.83 11.83 0 0012 0C5.37 0 .02 5.37.02 12a11.91 11.91 0 002.05 6.37L0 24l5.9-2.05A11.91 11.91 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.82a9.82 9.82 0 01-5.1-1.46l-.36-.22-3.49 1.21 1.17-3.4-.23-.35a9.83 9.83 0 014.02-13.32 9.82 9.82 0 0113.43 4.02 9.82 9.82 0 01-4.02 13.43 9.77 9.77 0 01-2.42.69z"/>
            </svg>
            WhatsApp
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/josephukohaobasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-black hover:bg-gray-100 text-gray-200 text-lg font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 text-blue-600">
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.1c-29.88 0-54.12-24.24-54.12-54.12S24 0 53.88 0s54.12 24.24 54.12 54.12-24.24 54.12-54.12 54.12zm394.34 340.1h-92.68V302.4c0-34.7-.7-79.4-48.36-79.4-48.36 0-55.74 37.7-55.74 76.7V448h-92.68V148.9h88.98v40.8h1.3c12.4-23.6 42.64-48.36 87.68-48.36 93.76 0 111.04 61.7 111.04 141.9V448z"/>
            </svg>
            LinkedIn
          </a>

        </div>
      </div>
    </motion.section>
  );
}
