import MyNavbar from "../../Components/Navbar/Navbar";
import "./login.css";
import { FaGoogle, FaApple } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

function Login() {
  return (
    <>
      <div className="container w-full h-screen">
        <MyNavbar />
        <div className="parent flex justify-center items-center">
          <div className="left lg:w-2/6 h-3/4 border border-neworange lg:ml-2">
            <div className="">
              <h1 className="text-white text-center text-3xl font-bold mt-14 flex justify-center">
                سلام
                <br />
                خوش اومدید
              </h1>
              <div class="mb-4 flex justify-center">
                <input
                  type="email"
                  id="email"
                  class="w-3/4 text-right border border-neworange placeholder-white bg-black lg:mt-12 rounded-2xl"
                  placeholder="ایمیل خود را وارد کنید..."
                />
              </div>
              <div class="mb-3 flex justify-center">
                <input
                  type="Password"
                  id="Password"
                  class="w-3/4 text-right border border-neworange placeholder-white bg-black rounded-2xl"
                  placeholder="پسورد خود را وارد کنید..."
                />
              </div>
              <p className="text-white text-xs w-3/4 text-left bg-black lg:mr-16 mb-6">
                پسورد خود را فراموش کرده اید؟
              </p>
              <div class="mt-4 flex justify-center">
                <input
                  type="text"
                  id="text"
                  class="w-3/4 border border-neworange bg-black rounded-2xl placeholder-white text-center font-bold"
                  placeholder="وارد شدن"
                />
              </div>
              <div className="container lg:mt-6 flex justify-center items-center">
                <div className="w-1/4 h-px bg-gray-400 mt-1"></div>
                <div className="text-white text-sm mx-2">ادامه دادن با</div>
                <div className="w-1/4 h-px bg-gray-400 mt-1"></div>
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
              <p className="text-white text-xs w-3/4 text-right bg-black lg:mr-16 mt-6">
                حساب کاربری ندارید؟ ساخت حساب کاربری
              </p>
            </div>
          </div>
          <div className="right lg:w-2/6 h-3/4 border border-neworange"></div>
        </div>
      </div>
    </>
  );
}

export default Login;
