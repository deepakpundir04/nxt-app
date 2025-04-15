import { IError } from "type/interface"

export default function Error({error}:{error:IError}){
    console.log(error)
    return (
    <div className="w-screen max-w-1/2 mx-auto bg-gray-200 shadow-lg 
    rounded-lg border border-gray-300 p-4 py-2 my-2 flex justify ">
        <div className="">!</div>
        {error.message}
    </div>
    )
}