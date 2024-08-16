'use client';

import Link from 'next/link';
export const Footer = () => {
 return (
  <footer
   className='bg-no-repeat bg-right-bottom bg-[url(/assets/images/vector.png)]'
   style={{
    backgroundColor: '#00557f',
   }}
  >
   <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
    <div>
     <div className='flex flex-col gap-16'>
      <div className='flex flex-col gap-16 md:flex-row'>
       <div>
        <h2
         className='font-bold text-2xl'
         style={{
          color: '#FCD157',
         }}
        >
         Sobre la Institución
        </h2>
        <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500'>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          Dirección: Calle 11 No. 5-49 Palacio Municipal.
         </span>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          Barrio: Centro
         </span>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          Cúcuta, Norte de Santander, Colombia.
         </span>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          Teléfono: (+577) 5784949
         </span>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          Fax:(+577) 5718895
         </span>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          Horario de atención: Lunes a Viernes de 7:00 a.m. a 11:30 a.m. y de
          2:00 p.m. a 5:30 p.m.
         </span>
         <span className='hover:opacity-75 text-white flex items-center text-lg'>
          E-mail:contactenos@cucuta-nortedesantander.gov.co
         </span>
        </nav>
       </div>
       <div>
        <h2
         className='font-bold text-2xl'
         style={{
          color: '#FCD157',
         }}
        >
         Ingreso al Sistema
        </h2>
        <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500'>
         <Link
          className='hover:opacity-75 text-white flex items-center text-base '
          href='http://nexura-egov.com/user.php'
         >
          Ingreso al Sistema
         </Link>
         <Link
          className='hover:opacity-75 text-white flex items-center text-base '
          href='http://nexura-egov.com/user.php'
         >
          Intranet
         </Link>
        </nav>
       </div>
      </div>
      <div>
       <h2
        className='font-bold text-2xl'
        style={{
         color: '#FCD157',
        }}
       >
        Políticas de privacidad
       </h2>
       <nav className='flex flex-col mt-4 space-y-2 text-sm text-gray-500'>
        <Link
         className='hover:opacity-75 text-white flex items-center text-base '
         href='http://nexura-egov.com/Publicaciones/politicas_de_privacidad_y_condiciones_de_uso'
        >
         Políticas de privacidad y condiciones de uso
        </Link>
        <Link
         className='hover:opacity-75 text-white flex items-center text-base '
         href='http://nexura-egov.com/Publicaciones/ley_de_proteccion_de_datos'
        >
         Ley de protección de datos
        </Link>
       </nav>
      </div>
     </div>
    </div>
   </div>
   <article className='mt-8 flex flex-col sm:flex-row justify-between gap-2'>
    <div className='w-full flex flex-col items-center mx-auto py-8 px-4 gap-4 md:justify-around md:flex-row'>
     <p className='text-sm'>Copyright 2013 | All rights reserved.</p>
    </div>
   </article>
  </footer>
 );
};
