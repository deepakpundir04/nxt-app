'use client'

import EditUserDetails from "@/components/EditUser";
import { getUserbyId } from "@/services/user";
import { useEffect, useState } from "react";
import { IUser } from "type/interface";

import { useParams } from "next/navigation";

export default function EditUser(){
    const [ data, setData]= useState<IUser>()
    const params = useParams();
    let id = params.id as string;
    useEffect(()=>{
        async function call(){
            let res = await getUserbyId(id)
            console.log(res)
            if( res.user && Object(res.user).hasOwnProperty('_id')) setData(res.user)
        }
        call();
    },[])
    if(data)
    return (
        <div>
            <div className="flex mx-10 py-1 px-2 w-screen max-w-1/2 mx-auto bg-gray-200 shadow-lg 
    rounded-lg border border-gray-300 my-2 flex justify">Edit User</div>
            <div>
            <EditUserDetails data={data}/>
            </div>
        </div>
    )
}