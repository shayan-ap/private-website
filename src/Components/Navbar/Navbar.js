import { Button, Navbar } from "flowbite-react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function MyNavbar() {
  return (
    <div className="">
      <Navbar className="bg-newgray text-white">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibol text-neworange">
            Puff Clouds
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <TiShoppingCart
            size={25}
            className="text-neworange icon icon1 hover:scale-110 hover:text-white"
          />
          <FaSearch
            size={20}
            className="lg:mr-2 lg:mt-1 text-neworange icon icon2 hover:scale-110 hover:text-white"
          />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <hr />
          <NavLink className="nav-link lg:ml-5 p-1 hover:bg-gray-600" to={"/"}>
            خانه
          </NavLink>
          <hr />
          <NavLink className="nav-link p-1 " to={"/about"}>
            درباره ی ما
          </NavLink>
          <hr />
          <NavLink className="nav-link p-1 " to={"/login"}>
            صفحات
          </NavLink>
          <hr />
          <NavLink className="nav-link p-1 " to={"/product"}>
            محصولات
          </NavLink>
          <hr />
          <NavLink className="nav-link p-1" to={"/contact"}>
            ارتباط با ما
          </NavLink>
          <hr />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default MyNavbar;
