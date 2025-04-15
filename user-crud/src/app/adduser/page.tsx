'use client';
import TagInput from '@/components/Mutlivaluefield';
import { addUser } from '@/services/user';
import Form from 'next/form'
import { useState } from 'react';

export default function AddUser() {
    const [interests, setInterests] = useState<string[]>([]);

  return (
    <div className="py-5 my-1">
      <Form action={addUser} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email"  name="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" name='name' id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Full name" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
    <input type="number" min="1" max="100" name='age' id="age" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Age" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No</label>
    <input type="tel" minLength={9} pattern="[0-9]{10}"
    maxLength={14} name='mobile' id="mobile" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Contact No." required />
  </div>
  <div className="mb-5">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interests</label>
  <TagInput tags={interests} setTags={setInterests}></TagInput>
  </div>
  
    
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add User</button>
</Form>
      
    </div>
    
  );
}   