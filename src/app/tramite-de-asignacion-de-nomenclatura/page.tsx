'use client';

import {ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Page = () => {
 const [formData, setFormData] = useState({
  firstName: '',
  secondName: '',
  firstLastName: '',
  secondLastName: '',
  email: '',
  phoneNumber: '',
  description: ''
 });

 const handleChange = (event:ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [event.target.name]: event.target.value });
 };

 const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tramite-asignacion`, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });
   if (response.ok) {
    toast.success('Formulario enviado con éxito');
    setFormData({
     firstName: '',
     secondName: '',
     firstLastName: '',
     secondLastName: '',
     email: '',
     phoneNumber: '',
     description: ''
    });
   } else {
    toast.error('Error al enviar el formulario');
   }
  } catch (error) {
   console.error('Error:', error);
   toast.error('Error al enviar el formulario');
  }
 };
 return (
  <>
   <ToastContainer />
   <div className='flex justify-center items-center'>
    <div className=' min-w-full h-5/6 sm:min-w-min my-6 mx-auto max-w-3xl '>
     <div className=' min-w-96 h-4/5 overflow-auto rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
      <div className='flex items-start justify-between p-5 '>
       <h3 className='text-3xl font-semibold text-gray-900'>
        Trámite de Asignación de Nomenclatura
       </h3>
      </div>
      <div className='relative p-6 flex-auto'>
       <form onSubmit={handleSubmit} className='px-8 pt-6 pb-8 w-full'>
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
           value={formData.firstName}
           onChange={handleChange}
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
           name='secondName'
           value={formData.secondName}
           onChange={handleChange}
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
           name='firstLastName'
           value={formData.firstLastName}
           onChange={handleChange}
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
           name='secondLastName'
           value={formData.secondLastName}
           onChange={handleChange}
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
           name='email'
           value={formData.email}
           onChange={handleChange}
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
           name='phoneNumber'
           value={formData.phoneNumber}
           onChange={handleChange}
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
           value={formData.description}
           onChange={handleChange}
           placeholder='Descripción'
           required
           className=' w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
          />
         </label>
        </div>
        <button
            type="submit"
  className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
>
  <span
    className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
  >
    <span
      className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>
  <span
    className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
  ></span>
  <span
    className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Enviar</span
  >
</button>
       </form>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Page;
