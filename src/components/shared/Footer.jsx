const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#243136] text-neutral-content items-center py-4 px-16">
        <aside className="grid-flow-col items-center">
          <p className="text-sm font-semibold">
            Copyright © 2025 - All rights reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.instagram.com/aslshippinglinellc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M7.001 2c-2.763 0-5.001 2.238-5.001 5v10c0 2.762 2.238 5 5.001 5h10c2.762 0 5-2.238 5-5v-10c0-2.762-2.238-5-5-5h-10zm0-2h10c3.866 0 7.001 3.134 7.001 7v10c0 3.866-3.135 7-7.001 7h-10c-3.867 0-7.001-3.134-7.001-7v-10c0-3.866 3.134-7 7.001-7zm5.001 6.333c-3.682 0-6.666 2.984-6.666 6.667s2.984 6.667 6.666 6.667 6.667-2.984 6.667-6.667-2.985-6.667-6.667-6.667zm0 11.334c-2.576 0-4.666-2.09-4.666-4.667s2.09-4.667 4.666-4.667c2.577 0 4.667 2.09 4.667 4.667s-2.09 4.667-4.667 4.667zm6.502-10.587c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75z"></path>
            </svg>
          </a>

          <a
            href="https://x.com/aslshippingllc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current  transition-all duration-300"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>

          <a
            href="https://www.facebook.com/alsshippinglinellc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
