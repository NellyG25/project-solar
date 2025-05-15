


import ActionButtons from "./action-buttons";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";

const Navbar = () => {
    return ( 
    <div className=" sticky top-0 bg-green-600 z-50 shadow-md p-4
    flex 
    justify-between
    items-center px-10 border-b h-20 ">
       <Logo />
       <NavigationMenuBar />
       <ActionButtons />
    </div> );
}
 
export default Navbar;