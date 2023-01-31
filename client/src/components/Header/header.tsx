import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0  px-4">
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            className="cursor-pointer" alt={"amazon logo"}          />
        </div>
        {/* Search bar */}
        <div className="hidden sm:flex items-center h-8 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text" onChange={props.onChange}
          ></input>
          <SearchIcon />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Mike</p> 
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-9 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">{props.totalLength}</span>
            <AddShoppingCartIcon fontSize="medium"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 md:py-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1 text-xl"/> All
        </p>
        <p className="link text-xs">Today's deal</p>
        <p className="link text-xs">Customer Service</p>
        <p className="link text-xs">Registery</p>
        <p className="link text-xs">Gift Cards</p>
        <p className="link text-xs lg:inline-flex">Sell</p>
        <p className="link hidden lg:inline-flex text-xs">Shop deals on Electronics</p>




      </div>
    </header>
  );
}

export default Header;
