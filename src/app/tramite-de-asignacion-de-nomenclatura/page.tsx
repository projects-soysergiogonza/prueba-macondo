'use client';

const Page = () => {
 return (
  <>
   <div className='flex justify-center items-center'>
    <div className=' min-w-full h-5/6 sm:min-w-min my-6 mx-auto max-w-3xl '>
     <div className=' min-w-96 h-4/5 overflow-auto rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
      <div className='flex items-start justify-between p-5 '>
       <h3 className='text-3xl font-semibold text-gray-900'>
        Trámite de Asignación de Nomenclatura
       </h3>
      </div>
      <div className='relative p-6 flex-auto'>
       <form className='px-8 pt-6 pb-8 w-full'>
        <div className='border-b border-gray-900/10 pb-1'>
         <h2 className='text-base font-semibold leading-7 text-gray-900 text-left'>
          Información básica de la solicitud
         </h2>
        </div>
        <div className='mt-4 flex flex-col gap-4'>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Primer Nombre:</span>
           <span className='text-red-600'>*</span>
          </div>
          <input
           name='firstName'
           placeholder='Primer Nombre'
           required
           className='block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
         </label>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Segundo Nombre:</span>
           <span className='text-red-600'>*</span>
          </div>
          <input
           name='firstName'
           placeholder='Segundo Nombre'
           required
           className='block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
         </label>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Primer Apellido:</span>
           <span className='text-red-600'>*</span>
          </div>
          <input
           name='firstName'
           placeholder='Primer Apellido'
           required
           className='block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
         </label>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Segundo Apellido:</span>
           <span className='text-red-600'>*</span>
          </div>
          <input
           name='lastName'
           placeholder='Segundo Apellido'
           required
           className='block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
         </label>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Correo Electrónico:</span>
           <span className='text-red-600'>*</span>
          </div>
          <input
           name='alternatePhoneNumber'
           placeholder='Correo Electrónico'
           type='email'
           required
           className='block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
         </label>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Número Teléfono Contacto:</span>
           <span className='text-red-600'>*</span>
          </div>
          <input
           name='address'
           placeholder='Número Teléfono Contacto'
           required
           className='block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
         </label>
         <label className='block text-sm font-medium leading-6 text-gray-900 text-left'>
          <div>
           <span>Descripción:</span>
           <span className='text-red-600'>*</span>
          </div>
          <textarea
           name='description'
           placeholder='Descripción'
           required
           className=' w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
          />
         </label>
        </div>
        <button type='submit'>Submit</button>
       </form>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Page;
