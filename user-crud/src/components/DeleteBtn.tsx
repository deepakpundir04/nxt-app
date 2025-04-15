import { deleteById } from "@/services/user";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function DeleteBtn({id}:{id:string}){
    const router = useRouter();  
    const deleteUser = async () =>{
        const confirmed = confirm(`Are you sure ?`)
        if(confirmed){
            let res = await deleteById(id)
            if(res){
                console.log(`REFRESH hhhhh h h hh   `)
                router.push(window.location.href);
                // router.refresh();
                location.reload();

            }
        }
    }
    return (
        <button onClick={deleteUser}>
            <HiOutlineTrash  size={24}/>
        </button>
    )
}
