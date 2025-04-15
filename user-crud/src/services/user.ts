'use server'
import { redirect } from "next/navigation"
import { IUser, response, sResponse } from "type/interface";

const getUserList = async ():Promise<response> =>{
    try{
        const res = await fetch(`${process.env.EXPRESS_API_URL}/api/users`);
        if (!res.ok) {
            console.log(res)
            throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        console.log(result)
        return result;
    }catch(err){
        console.log(err)
        let er:response ={
            user:[],
            totalCount:'0',
            message:'Failed to fetch data',
        }
        return er;
    }
}

const addUser = async (formData: FormData) =>{
    try{
        const user:IUser = {
            name:formData.get('name') as string,
            age:formData.get('age') as string,
            email:formData.get('email') as string,
            interest:JSON.parse(formData.get('interest') as any) ,
            mobile:formData.get('mobile') as string,
        }
        const res = await fetch(`${process.env.EXPRESS_API_URL}/api/users`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
          console.log(res)
        const result = await res.json();
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        redirect(`/`)
    }
}

const editUser = async (formData: FormData) =>{
    try {
        const user:IUser = {
            name:formData.get('name') as string,
            age:formData.get('age') as string,
            email:formData.get('email') as string,
            interest:JSON.parse(formData.get('interest') as any) ,
            mobile:formData.get('mobile') as string,
            _id:formData.get('_id') as string
        }
        console.log(`object collected`)
        console.log(user)
        const res = await fetch(`${process.env.EXPRESS_API_URL}/api/users`, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          });
        //   console.log(res)
        const result = await res.json();
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }finally{
        redirect(`/`)
    }
    
}

const getUserbyId = async (id: string):Promise<sResponse> =>{
    try{
        const res = await fetch(`${process.env.EXPRESS_API_URL}/api/users/${id}`);
        console.log(res)
        const result = await res.json();
        console.log(result)
        return {
            user:result,
            totalCount:'1',
            message:""
        }
    }catch(e:unknown){
        console.log(e)
        return {
            user:null,
            totalCount:'0',
            message:"Error in fetching Data"
        }
    }
    
}

const deleteById = async(id:string):Promise<any> =>{
    try{
        const res = await fetch(`${process.env.EXPRESS_API_URL}/api/users/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          });
        console.log(res)
        if(res.ok) return true;  
        else{
            let result = await res.json()
            throw new Error(result)
        }
    }catch(e:unknown){
        console.log(e)
        return {
            message:"Error in fetching Data"
        }
    }
}

export {
    getUserList,
    addUser,
    editUser,
    getUserbyId,
    deleteById
}