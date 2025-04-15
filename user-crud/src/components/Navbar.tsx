import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between mx-2 my-1 px-2 py-2 text-center bg-black text-white">
            <Link className="text-left" href={"/"}>DP Loading..</Link>
            <Link className="text-right hover:bg-gray-150 bg-white text-black rounded-full mx-1 px-1" href={"/adduser"}>Add Users</Link>
        </nav>
    )
}