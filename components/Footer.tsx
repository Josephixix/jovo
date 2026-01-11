"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f1f1f] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Left Column: Jovo + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <h1 className="text-[8vw] md:text-[5rem] font-bold uppercase leading-none">
            Jovo
          </h1>
          <p className="text-gray-400 text-sm">
            © 2026 Jovo. All rights reserved.
          </p>
        </div>

        {/* Right Column: Quote + Social Buttons */}
        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right w-full md:w-auto">
          <p className="text-gray-300 text-lg md:text-xl italic">
            "Design is intelligence made visible."
          </p>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 mt-4">

            {/* Email */}
            <a
              href="mailto:josephukohaobasi@gmail.com"
              className="flex items-center justify-center gap-2 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm transition"
            >
              Email
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4v16h20V4H2zm18 2v.511L12 13 4 6.511V6h16zm0 12H4V8.689l8 6.529 8-6.529V18z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/josephixix"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm transition"
            >
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.774.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.652.242 2.873.12 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.218.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/jovo_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm transition"
            >
              Twitter
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.825 9.825 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.379 4.482A13.944 13.944 0 0 1 1.671 3.149 4.916 4.916 0 0 0 3.195 9.723 4.897 4.897 0 0 1 .96 9.14v.062a4.917 4.917 0 0 0 3.946 4.817 4.902 4.902 0 0 1-2.212.084 4.919 4.919 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.539a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.514 14.009-14.02 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm transition"
            >
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.55c-1.14 0-2.06-.93-2.06-2.08 0-1.15.92-2.08 2.06-2.08s2.06.93 2.06 2.08c0 1.15-.92 2.08-2.06 2.08zm15.11 12.9h-3.56v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.53v6.27z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/09042562509"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-gray-300 hover:bg-gray-700 px-4 py-2 text-sm transition"
            >
              WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339-44.9 224-24 224-24S109 5.9 67.1 97.1C28.9 171.5 0 245 0 320c0 85 69 154 154 154 75 0 148.5-28.9 222.9-67.1 92.2-41.9 121.1-157.9 121.1-157.9s-30.9-116-121.1-157.9zM224 426c-58.1 0-106-47.9-106-106S165.9 214 224 214s106 47.9 106 106-47.9 106-106 106zm0-182c-41.3 0-75 33.7-75 75s33.7 75 75 75 75-33.7 75-75-33.7-75-75-75z"/>
              </svg>
            </a>
          </div>

          <p className="text-gray-300 mt-4 md:mt-2 text-sm md:text-base max-w-xs font-semibold">
            Thanks for reviewing my portfolio,<br /> I look forward to working with you!
          </p>
        </div>
      </div>
    </footer>
  );
}
