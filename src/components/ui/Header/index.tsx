'use client';

import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
  <header className='h-32'>
   <nav
    className='mx-auto flex max-w-7xl items-center justify-between h-full p-6 lg:px-8 lg:gap-3 bg-no-repeat bg-right bg-[url(/assets/images/vector.jpg)]'
    aria-label='Global'
   >
    {!mobileMenuOpen && (
     <>
      <Link href='/' className='-m-1.5 p-1.5'>
       <img className='h-12 w-40' src='/assets/images/logo.png' alt='Logo' />
      </Link>
      <div className='flex lg:hidden items-center gap-3'>
       <button type='button' onClick={() => setMobileMenuOpen(true)}>
        <Bars3Icon className='w-6 text-black' aria-hidden='true' />
       </button>
      </div>
     </>
    )}
    <PopoverGroup className=' text-black hidden lg:flex lg:gap-x-12 h-full items-center tracking-wide'>
     <Link href='/' className='text-base text-medium '>
      Inicio
     </Link>
     <Link
      href='/tramite-de-asignacion-de-nomenclatura'
      className='text-base text-medium'
     >
      Trámite de Asignación de Nomenclatura
     </Link>
    </PopoverGroup>
   </nav>
   <Dialog
    className='lg:hidden'
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
   >
    <div className='fixed inset-0 z-10' />
    <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
     <div className='flex items-center justify-between'>
      <Link href='/' className='-m-1.5 p-1.5'>
       <img className='h-8 w-auto' src='/assets/images/logo.png' alt='' />
      </Link>
      <button
       type='button'
       className='-m-2.5 rounded-md p-2.5 text-gray-700'
       onClick={() => setMobileMenuOpen(false)}
      >
       <span className='sr-only'>Close menu</span>
       <XMarkIcon className='h-6 w-6' aria-hidden='true' />
      </button>
     </div>
     <div className='mt-6 flow-root'>
      <div className='-my-6 divide-y divide-gray-500/10'>
       <div className='space-y-2 py-6'>
        <Link
         href='/'
         className='-mx-3 block rounded-lg px-3 py-2 text-base text-medium leading-7 text-gray-900 hover:bg-gray-50'
        >
         Inicio
        </Link>
        <Link
         href='/tramite-de-asignacion-de-nomenclatura'
         className='-mx-3 block rounded-lg px-3 py-2 text-base text-medium leading-7 text-gray-900 hover:bg-gray-50'
        >
         Trámite de Asignación de Nomenclatura
        </Link>
       </div>
      </div>
     </div>
    </DialogPanel>
   </Dialog>
  </header>
 );
};
