"use client"
import Spinner from "./Spinner"
import Error from "./Error";
import {getUserList} from "@/services/user"
import { useState,useEffect } from "react";
import { IUser, response } from "type/interface";
import {HiPencilAlt} from "react-icons/hi"
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";

export default function UserList () {
   const [loading,setLoading] = useState(true)
   const [error,setError] = useState<string|any>()
   const [user,setUser] = useState<IUser[]>([])
   const [count, setCount] = useState(0);
   useEffect(()=>{
        getUserList().then((data:response) => {
          console.log(`response data ${data}`)
          if(Object(data).hasOwnProperty('message')){
            setError(data)
          }else{
            setUser(data.user)
          }
          console.log(data?.user)
          setLoading(false)
        }).catch((err:unknown)=>{
          setLoading(false)
          console.log(err)
          setError(err)
        });

   },[])
    if (loading) return <>Loading... <div><Spinner /></div></>
    if (error) return <Error error={error}/>
    if(user && !user.length) return (
      <><div className="w-screen max-w-1/2 mx-auto bg-gray-500 shadow-lg 
    rounded-lg border border-gray-300 p-4 py-2 my-2 flex justify "><div className="">!</div>
        No users present</div></>)
    if(user && user.length)
    return ( <>
    {user.map(user =>(
      <div key={user._id} className=" flex justify-between w-screen max-w-1/2 mx-auto bg-white shadow-lg rounded-lg border border-gray-300 p-4 py-2 my-2">
      <div className=" items-center min-w-8/9 text-sm font-medium">
        <ul className="text-gray-900  bg-white border dark:text-white px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <li className="flex justify-items-center "><p>Name :</p><p className="px-1">{user.name}</p></li>
        <li className="flex justify-items-center"><p>Email :</p><p className="px-1">{user.email}</p></li>
        <li className="flex justify-items-center"><p>Contact No :</p><p className="px-1">{user.mobile}</p></li>
        <li className="flex justify-items-center"><p>Interest :</p><p className="px-1">{user.interest.join(', ')}</p></li>
        <li className="flex justify-items-center"><p>Age :</p><p className="px-1"> {user.age}</p></li>
        </ul>
      </div>
      <div className="font-icon-wrapper max-w-10 mx-1" >
        <DeleteBtn id={user?._id as string}/>
        <Link href={`/edituser/${user._id}`}>
        <HiPencilAlt size={24}></HiPencilAlt>
        </Link>
      </div>
    </div>
    ))}    
    </>
    );
  }