import Image from "next/image";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header(props) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      <div className="flex item-center bg-green-800 p-1 flex-grow py-2">
        {/* Image Div */}
        <div className="flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://www.grocistore.com/admin/uploads/logo1575713051.png"
            width={150}
            height={55}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* searchBar div */}

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer mt-2 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder={
              router.route === "/" ? "Search in products listed below…" : ""
            }
            onInput={(event) =>
              router.route === "/" && props.onSearchValue(event.target.value)
            }
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right Section */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="link cursor-pointer"
          >
            <p className="hover:underline">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link" onClick={() => router.push("/orders")}>
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            className="relative link flex items-center"
            onClick={() => router.push("/checkout")}
          >
            <span
              className={`absolute top-0 right-0 md:right-10 h-4 ${
                items.length >= 10 ? "w-6" : "w-4"
              } bg-yellow-400 text-center rounded-full text-black font-bold`}
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
