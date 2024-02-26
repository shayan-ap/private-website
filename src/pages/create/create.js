import MyNavbar from "../../Components/Navbar/Navbar";
import "./create.css";
import { FaGoogle, FaApple } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Create() {
  return (
    <>
      <div className="container w-full h-screen">
        <MyNavbar />
        <div className="parent flex justify-center items-center">
          <div className="left lg:w-2/6 h-3/4 border border-neworange">
            <div className="">
              <h1 className="text-white text-center text-3xl font-bold mt-14 flex justify-center">
                ساخت اکانت
              </h1>
              <div className="inputs-parent flex justify-center mt-6">
                <input
                  type="text"
                  id="text"
                  className="text-right border border-neworange placeholder-white bg-black rounded-2xl"
                  placeholder="نام"
                />
                <input
                  type="text"
                  id="text"
                  className="text-right border border-neworange placeholder-white bg-black rounded-2xl lg:mr-1"
                  placeholder="نام خانوادگی"
                />
              </div>
              <div class="mb-4 flex justify-center">
                <input
                  type="email"
                  id="email"
                  class="w-5/6 text-right border border-neworange placeholder-white bg-black lg:mt-8 rounded-2xl"
                  placeholder="ایمیل خود را وارد کنید..."
                />
              </div>
              <div className="inputs-parent flex justify-center mt-6">
                <input
                  type="password"
                  id="password"
                  className="text-right border border-neworange placeholder-white bg-black rounded-2xl"
                  placeholder="پسورد"
                />
                <input
                  type="password"
                  id="password"
                  className="text-right border border-neworange placeholder-white bg-black rounded-2xl lg:mr-1"
                  placeholder="تکرار پسورد"
                />
              </div>
              <div class="mb-4 flex justify-center">
                <input
                  type="email"
                  id="email"
                  class="w-5/6 text-center border border-neworange placeholder-white bg-black lg:mt-8 rounded-2xl"
                  placeholder="ساخت اکانت"
                />
              </div>
              <div className="container lg:mt-6 flex justify-center items-center">
                <div className="w-5/6 h-px bg-gray-400 mt-5"></div>
              </div>
              <div className="container lg:mt-6 flex justify-center items-center">
                <div className="w-1/4 h-12 border border-neworange rounded-2xl flex items-center justify-center">
                  <FaGoogle size={25} className="text-neworange" />
                </div>
                <div className="w-1/4 h-12 border border-neworange rounded-2xl mx-1 flex items-center justify-center">
                  <FaApple size={30} className="text-neworange" />
                </div>
                <div className="w-1/4 h-12 border border-neworange rounded-2xl flex items-center justify-center">
                  <CiFacebook size={30} className="text-neworange" />
                </div>
              </div>
            </div>
          </div>
          <div className="right lg:w-2/6 h-3/4 border border-neworange lg:mr-2"></div>
        </div>
      </div>
    </>
  );
}

export default Create;
