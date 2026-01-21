import { useState, useEffect } from "react";
import { Menu, X, Triangle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceMenu = {
    consultancy: [
      "ISO 9001", "ISO 27001", "ISO 14001", "ISO 45001", "TISAX", "Data Privacy",
    ],
    training: [
      "Awareness Training – ISO Standards", "Awareness Training – DPDPA",
    ],
  };

  // Shared Gold Line Component - Visible if isActive or on hover
  const GoldLine = ({ isActive }) => (
    <div className={`
      absolute bottom-0 left-0 w-full h-[3.5px] 
      bg-gradient-to-r from-transparent via-[#9c7a3c] to-transparent 
      transition-all duration-500 shadow-[0_0_12px_#9c7a3c]
      ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
    `}></div>
  );

  // Shared Shiny Reflection Effect
  const Shimmer = () => (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
  );

  const SectionWithSubmenu = ({ title, items }) => (
    <div className="relative group/submenu">
      <div
        className="
          relative overflow-hidden flex items-center justify-between
          font-bold mb-2 cursor-pointer
          text-muted-foreground px-4 py-3 rounded-xl
          hover:bg-[#2c4a5e] hover:text-white hover:shadow-lg
          transition-all duration-300 group
        "
      >
        <Shimmer />
        {title}
        <Triangle size={10} fill="currentColor" className="rotate-90 ml-2" />
        <GoldLine isActive={false} />
      </div>

      <div className="absolute top-0 right-[-20px] w-[20px] h-full z-10"></div>

      <div
        className="
          absolute left-full top-0 ml-2
          opacity-0 invisible scale-95
          group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:scale-100
          transition-all duration-300 z-50 origin-left
        "
      >
        <div className="w-64 rounded-xl bg-background/95 backdrop-blur-2xl shadow-2xl border border-border/40 p-3">
          <ul className="space-y-1 text-sm">
            {items.map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-muted-foreground hover:text-white hover:bg-[#2c4a5e] transition-all font-semibold"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/30 shadow-md"
          : "bg-background/95 backdrop-blur-lg border-b border-border/20"
      }`}
      style={{ overflow: "visible" }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          <Link to="/" className="flex-shrink-0 transition-transform duration-500 hover:scale-[1.03]">
            <img
              src="https://ik.imagekit.io/meznljfns/logo.png?updatedAt=1767541764225"
              alt="Logo"
              className="h-18 lg:h-20 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;

              if (item.label === "Services") {
                return (
                  <div key={item.label} className="relative group py-4">
                    <button
                      className={`
                        relative overflow-hidden flex items-center gap-2 px-6 py-2.5 
                        text-base lg:text-lg font-bold rounded-xl transition-all duration-500
                        ${isActive 
                          ? "bg-[#2c4a5e] text-white shadow-lg translate-y-[-1px]" 
                          : "text-muted-foreground hover:bg-[#2c4a5e] hover:text-white hover:shadow-xl hover:translate-y-[-1px]"}
                        group
                      `}
                    >
                      <Shimmer />
                      Services
                      <Triangle 
                        size={12} 
                        fill="currentColor" 
                        className={`transition-transform duration-500 group-hover:rotate-180`} 
                      />
                      <GoldLine isActive={isActive} />
                    </button>

                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="w-[340px] rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/40 p-5">
                        <div className="space-y-3">
                          <SectionWithSubmenu title="Consultancy Services" items={serviceMenu.consultancy} />
                          <SectionWithSubmenu title="Training" items={serviceMenu.training} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`
                    relative overflow-hidden px-6 py-2.5 text-base lg:text-lg font-bold rounded-xl transition-all duration-500 group
                    ${isActive 
                      ? "bg-[#2c4a5e] text-white shadow-lg translate-y-[-1px]" 
                      : "text-muted-foreground hover:bg-[#2c4a5e] hover:text-white hover:shadow-xl hover:translate-y-[-1px]"}
                  `}
                >
                  <Shimmer />
                  {item.label}
                  <GoldLine isActive={isActive} />
                </Link>
              );
            })}
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 pt-3 border-t border-border space-y-2 text-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 text-lg font-bold text-muted-foreground hover:text-[#2c4a5e] hover:bg-muted rounded-xl transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;