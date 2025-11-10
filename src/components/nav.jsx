import React from 'react';
 export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50   px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
       <img
         src="./logo.png"
         alt="Rave Meets Wave"
        loading="lazy"
        decoding="async"
       className="h-20"/>
      </div>
      <div className='text-xl bg-white text-black p-2.5 '>
        <a href='https://links.myvendy.com/ravemeetswave'>Buy Ticket</a>
      </div>
    </nav>
  );
}
