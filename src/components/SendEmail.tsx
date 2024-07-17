import React from 'react';

export default function SendEmail() {
  return (
    <div className='flex flex-col gap-1 w-[30%] bg-slate-700 px-4 py-5 rounded-lg'>
      <h3 className='mb-1 text-white font-semibold'>Your Email</h3>
      <input type='text' className='w-full h-8 px-2 py-1' />
      <h3 className='mb-1 text-white font-semibold'>Subject</h3>
      <input type='text' className='w-full h-8 px-2 py-1' />
      <h3 className='mb-1 text-white font-semibold'>Message</h3>
      <textarea className='w-full h-52 px-2 py-1' />
      <button className='w-full bg-yellow-400 mt-3 h-7 rounded-sm font-bold hover:bg-yellow-300'>Submit</button>
    </div>
  );
}

