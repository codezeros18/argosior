import React, { useState } from 'react';

function Navbar() {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-lexend sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Company Logo" /> */}
            <p className='text-2xl text-bluebar font-bold'>Millenial Express</p>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-greenbar" onClick={toggleMobileMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4">

          <a href="#" className="text-sm font-semibold leading-6 bg-greenbar px-4 py-1 rounded-[50px] hover:bg-white hover:text-greenbar hover:transition ease-in-out duration-300">About Us</a>
          <a href="#" className="text-sm font-semibold leading-6 bg-greenbar px-4 py-1 rounded-[50px] hover:bg-white hover:text-greenbar hover:transition ease-in-out duration-300">Layanan</a>
          <div className="relative">
            <button type="button" className="flex items-center gap-x-1 text-sm font-semibold leading-6 bg-greenbar px-4 py-1 rounded-[50px] hover:bg-white hover:text-greenbar hover:transition ease-in-out duration-300" aria-expanded={isProductDropdownOpen} onClick={toggleProductDropdown}>
              Cek Ongkir
              <svg className="h-5 w-5 flex-none text-white hover:text-greenbar" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>

            {isProductDropdownOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg className="h-6 w-6 text-yellowlocate" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-greenbar">
                        Cek Ongkir
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">Get a better understanding of your traffic</p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg className="h-6 w-6 text-yellowlocate " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                      </svg>
                    </div>
                    <div className="flex-auto">
                      <a href="#" className="block font-semibold text-greenbar">
                        Lacak Paket
                        <span className="absolute inset-0"></span>
                      </a>
                      <p className="mt-1 text-gray-600">Speak directly to your customers</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="#" className="text-sm font-semibold leading-6 bg-bluebar px-4 py-1 rounded-[50px] hover:bg-white hover:text-bluebar hover:transition ease-in-out duration-300">Masuk</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="button">Daftar Sekarang</a>

        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <p className='text-2xl text-bluebar font-bold'>Millenial Express</p>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMobileMenu}>
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6 text-greenbar" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-greenbar hover:bg-gray-400/10">About Us</a>
                  <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-greenbar hover:bg-gray-400/10">Layanan</a>
                  <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-greenbar hover:bg-gray-400/10">Cek Ongkir</a>
                  <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-bluebar hover:bg-gray-400/10">Masuk</a>
                </div>
                <hr />
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-bluebar hover:bg-gray-400/10">Daftar Sekarang</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
