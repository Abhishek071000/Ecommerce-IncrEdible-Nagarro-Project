import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { selectItems } from './../slices/basketSlice';

// Header section-starts
function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    
    return (
        <header className="sticky top-0 z-50">
            {/* Top Nav-starts */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                
                {/* Logo-starts */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        onClick = {() => router.push("/")}
                        src="https://i.imgur.com/gR4x14I.png"
                        width = {150}
                        height = {60}
                        objectFit = "contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* Logo-ends */}


                {/* Search Bar-starts */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md type=text focus:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* Search Bar-ends */}

                
                {/* Right side icons-starts */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>
                            {session ? `Hello, ${session.user.name}` : "Sign In"}
                        </p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    
                    <div 
                        onClick={() =>router.push('/orders')} 
                        className="link"
                    >
                        <p className="font-extrabold md:text-sm">Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div onClick={() => router.push("/checkout")} className="relative link flex items-center">     
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
                {/* Right side icons-ends */}
            </div>
            {/* Top Nav-ends */}

            

        </header>
    );
}
// header section-ends

export default Header
