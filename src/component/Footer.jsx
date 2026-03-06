export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8  mt-20">
      <div className=" grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 w-11/12 mx-auto gap-12 border-b border-gray-800 pb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">CS — Ticket System</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            CS — Ticket System is a comprehensive customer support solution designed to streamline communication and enhance customer satisfaction. Our platform offers a range of features to help businesses manage and resolve customer inquiries efficiently.
          </p>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Saled
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h3 className="font-bold">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Download Apps
              </a>
            </li>
          </ul>
        </div>

        {/* Info & Socials */}
        <div className="space-y-4">
          <h3 className="font-bold">Information</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Social Links</h3>
          <div className="space-y-2 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                𝕏
              </span>
              <span>@CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                in
              </span>
              <span>@CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                f
              </span>
              <span>@CS — Ticket System</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                ✉
              </span>
              <span>support@cst.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center pt-8">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};
