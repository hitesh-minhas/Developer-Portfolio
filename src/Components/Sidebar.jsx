import { useState, useEffect } from 'react';
import { FaHome, FaBox, FaFileAlt, FaCommentAlt, FaCalendarAlt, FaTable, FaUsers, FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Simple resize handler
  useEffect(() => {
    const checkIfMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      isMobileView ? setIsOpen(false) : setIsOpen(true);
    };
    // Initial check
    checkIfMobile();

    // Adding resize listener to check everytime screen size changes 
    window.addEventListener('resize', checkIfMobile);

    // Cleanup : Removing event listener 
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const iconSize = 15;
  const menuItems = [
    { icon: <FaHome size={17} />, label: 'Home', link: '/' },
    { icon: <FaBox size={iconSize} />, label: 'Projects', link: '/projects' },
    { icon: <FaCommentAlt size={iconSize} />, label: 'Contact', link: '/contact' },
    { icon: <FaCalendarAlt size={iconSize} />, label: 'Education', link: '/education' },
    { icon: <FaUsers size={iconSize} />, label: 'About', link: '/about' },
  ];

  return (
    <aside className="font-poppins antialiased max-h-screen sticky top-0 z-50">
      {/* Mobile toggle button - shows hamburger or close icon */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="p-2 m-2 border-2 bg-gray-800 rounded-md border-gray-700 shadow-lg text-gray-300 hover:text-white fixed top-0 left-0 z-50 transition-colors"
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      )}

      {/* Sidebar Container */}
      <div
        className={`bg-gray-900 h-screen shadow-xl px-3 fixed md:relative z-40 transition-all duration-300 ${!isMobile ? 'w-60 translate-x-0' :
          // For mobile view checking if sidebar is open or close 
          isOpen
            ? 'translate-x-0 w-60'     // Sidebar opens on mobile
            : 'w-16 -translate-x-full'  // Sidebar closed on mobile
          }`}
      >
        <div className="space-y-6 md:space-y-10 py-10">
          {/* Showing title "Portfolio." on desktop and "P." on mobile */}
          {(!isMobile || isOpen) && (
            <>
              <h1 className="font-bold text-4xl text-center md:hidden text-blue-400">
                P<span className="text-blue-300">.</span>
              </h1>
              <h1 className="hidden md:block font-bold text-xl text-center text-blue-400">
                Portfolio<span className="text-blue-300">.</span>
              </h1>
            </>
          )}

          {/* Profile picture- hidden when collapsed on mobile */}
          {(!isMobile || isOpen) && (
            <div className="space-y-3">
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Profile"
                className="w-10 md:w-16 rounded-full mx-auto border-2 border-blue-400"
              />
              <div>
                <h2 className="font-medium text-sm text-center text-blue-300">
                  HITESH KUMAR
                </h2>
                <p className="text-xs text-gray-400 text-center">Web Developer</p>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="flex flex-col space-y-2">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.link}
                className={({ isActive }) => `text-sm font-medium py-2 px-2 hover:bg-blue-900 hover:text-white rounded-md transition flex justify-between items-center 
                ${isMobile && !isOpen ? 'justify-center' : ''}
                ${isActive ? 'bg-blue-900 text-white' : 'text-gray-300'}
              `}
                onClick={() => { isMobile && setIsOpen(!isOpen) }}>
                <span className={isMobile && !isOpen ? 'hidden' : 'block'}>
                  {item.label}
                </span>
                <span className="ml-3 text-blue-300">{item.icon}</span>
              </NavLink>

            ))}
          </div>
        </div>
      </div>

      {/* Dark overlay - only shows on mobile when sidebar is open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-30"
          onClick={toggleSidebar}
        />
      )}
    </aside>
  );
};

export default Sidebar;