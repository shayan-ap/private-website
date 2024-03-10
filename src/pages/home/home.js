import MyCard from "../../Components/Card/Card";
import MyFooter from "../../Components/Footer/Footer";
import MyNavbar from "../../Components/Navbar/Navbar";
import "./home.css";
import { Carousel } from "flowbite-react";
import Filter from "../../Components/filter/filter";
function Home() {
  return (
    <>
      <MyNavbar />
      <div className="flex justify-center">
        <div className="lg:w-4/5 h-96 bg-gray-700"></div>
      </div>
      <h4 className="text-center lg:mt-2 lg:mb-2 font-bold">محصولات آینده</h4>
      <MyCard />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="mb-4">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
            alt=""
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
            alt=""
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt=""
          />
        </Carousel>
      </div>
      <div className="w-full h-content flex justify-center filter">
        <div className="right w-1/6  rounded-none border border-solid border-white">
          <Filter />
        </div>
        <div className="left w-4/6 rounded-none border border-solid border-white"></div>
      </div>
      <MyFooter />
    </>
  );
}

export default Home;
