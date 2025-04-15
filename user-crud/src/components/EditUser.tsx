import Form from "next/form";
import TagInput from "./Mutlivaluefield";
import { IUser } from "type/interface";
import { editUser } from "@/services/user";
import { useState } from "react";

export default function EditUserDetails({ data}: { data: IUser}){
    let value:string[] = data.interest
      const [interests, setInterests] = useState<string[]>(value);
    //   setInterests()
    
    return (
    <div className="">
    <form action={editUser} className="max-w-sm mx-auto">
    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email"  name="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" defaultValue={data.email} required />
    </div>
    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" name='name' id="name" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="Full name" defaultValue={data.name} required />
    </div>
    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
        <input type="number" min="1" max="100" name='age' id="age" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Age" defaultValue={data.age} required />
    </div>
    <div className="mb-5">
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact No</label>
        <input type="tel" minLength={9} pattern="[0-9]{10}"
    maxLength={14} name='mobile' id="mobile" className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "  placeholder="Contact No." defaultValue={data.mobile} required />
    </div>
    <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Interests</label>
    <TagInput tags={interests} setTags={setInterests}></TagInput>
    </div>
    <input type="hidden"  name="_id" id="_id" className="" defaultValue={data._id} required />
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Edit User</button>
</form>
      
    </div>
    )
}