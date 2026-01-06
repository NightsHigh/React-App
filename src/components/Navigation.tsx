function Navigation() {
  const links = [
    { name: 'Hjem', url: '#home' },
    { name: 'Om Os', url: '#about' },
    { name: 'Kontakt', url: '#contact' }
  ]

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-[1000]">
      {/* Hidden Checkbox for CSS-only dropdown */}
      <input type="checkbox" id="mobile-menu-toggle" className="hidden peer" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold text-blue-500 no-underline transition-colors duration-300 hover:text-blue-600">
            React App
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none m-0 p-0 gap-8 items-center">
          {links.map((link, index) => (
            <li key={index} className="m-0">
              <a 
                href={link.url} 
                className="text-gray-800 no-underline font-medium text-base py-2 px-4 rounded transition-all duration-300 block relative hover:text-blue-500 hover:bg-blue-50 active:scale-[0.98]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Label for checkbox) */}
        <label 
          htmlFor="mobile-menu-toggle"
          className="md:hidden flex flex-col justify-around w-[30px] h-[30px] bg-transparent border-none cursor-pointer p-0 z-10 transition-transform duration-300 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 [&>span:nth-child(1)]:transition-all [&>span:nth-child(2)]:transition-all [&>span:nth-child(3)]:transition-all peer-checked:[&>span:nth-child(1)]:rotate-45 peer-checked:[&>span:nth-child(1)]:translate-x-[8px] peer-checked:[&>span:nth-child(1)]:translate-y-[8px] peer-checked:[&>span:nth-child(2)]:opacity-0 peer-checked:[&>span:nth-child(3)]:-rotate-45 peer-checked:[&>span:nth-child(3)]:translate-x-[8px] peer-checked:[&>span:nth-child(3)]:-translate-y-[8px]"
          aria-label="Toggle menu"
        >
          <span className="w-full h-[3px] bg-gray-800 rounded-sm origin-center"></span>
          <span className="w-full h-[3px] bg-gray-800 rounded-sm origin-center"></span>
          <span className="w-full h-[3px] bg-gray-800 rounded-sm origin-center"></span>
        </label>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden w-full bg-white border-t border-gray-200 max-h-0 overflow-hidden transition-[max-height] duration-300 peer-checked:max-h-[500px]">
        <ul className="list-none m-0 py-4 px-4 md:px-8 flex flex-col gap-2">
          {links.map((link, index) => (
            <li key={index} className="m-0">
              <a 
                href={link.url} 
                className="text-gray-800 no-underline font-medium text-base py-4 px-4 block w-full border-b border-gray-200 last:border-b-0 transition-all duration-300 hover:bg-blue-50 hover:pl-6"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        #mobile-menu-toggle:checked ~ div:last-child li {
          animation: slideDown 0.3s ease forwards;
        }
        #mobile-menu-toggle:checked ~ div:last-child li:nth-child(1) {
          animation-delay: 0.1s;
        }
        #mobile-menu-toggle:checked ~ div:last-child li:nth-child(2) {
          animation-delay: 0.2s;
        }
        #mobile-menu-toggle:checked ~ div:last-child li:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>
    </nav>
  )
}

export default Navigation

