import { FaFacebook, FaStar, FaTelegram} from "react-icons/fa";
import MyNavbar from "../../Components/Navbar/Navbar";

function Product() {
  return (
    <>
      <MyNavbar />
        <div className='bg-newgray w-3/4 text-white m-auto block sm:flex center-cus'>
            <div className='3/3 sm:w-1/3'>
              <img src="https://www.javaheribina.com/blogs/wp-content/uploads/2020/05/wwww.jpg"  alt="عکس دانلود نشد" />
            </div>
            <div className='w-3/3 sm:w-2/3 px-4 border border-neworange'>
              <h1 className='mt-3'>Name</h1>
              <div className='flex mt-3 text-neworange'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                {/* <FaRegStarHalfStroke/> */}
              </div>
              <h1 className='mt-3 text-3xl'>$<b>100</b> </h1>
              <p className='text-justify mt-4'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
              <div className='mt-4'>
                <button className='border py-1 px-4 mx-1 rounded-tr-2xl rounded-bl-2xl'>INCREASE</button>
                <button className='border border-neworange py-1 px-6 mx-2 rounded-br-2xl rounded-tl-2xl'>ADD TO CARD</button>
              </div>
              <p className='mt-3'>category : cloathing</p>
              <p className='mt-3'>share this product :</p>
              <div className='text-neworange flex my-3 items-center text-3xl justify-evenly md:justify-start'>
                <FaTelegram/>
                <FaFacebook/>
                {/* <IoLogoWhatsapp/> */}
              </div>
            </div>
        </div>
            <div className='w-3/4 flex m-auto my-6 '>
              <div className='w-1/3'>
              </div>
              <div className='w-2/3 flex justify-between flex-wrap'>
مجله جواهری بینا | انگشتر، گردنبند، جواهرات نقره، نگین، تسبیح
مدیر بلاگ
مجله جواهری بینا | انگشتر، گردنبند، جواهرات نقره، نگین، تسبیح
مجله جواهرات نقره ، زیورآلات گردنبند مروارید ، گوشواره الماس و انگشتر عقیق انواع نگین ، خواص سنگ درم
Image
<h1 className='bg-newgray w-32 h-32 my-2 mx-3 border border-neworange'></h1>
                <h1 className='bg-newgray w-32 h-32 my-2 mx-3 border border-neworange'></h1>
                <h1 className='bg-newgray w-32 h-32 my-2 mx-3 border border-neworange'></h1>
                <h1 className='bg-newgray w-32 h-32 my-2 mx-3 border border-neworange'></h1>
              </div>
            </div>
              <div className='text-white text-center pt-3 border-dotted border-b-2 border-neworange pb-5'>
                <span className='mx-4'>Sedcription</span>
                <span className='mx-4'>Rewiews (1)</span>
              </div>
              <div className='w-3/4 text-white flex flex-col my-8 m-auto'>
                <p className='text-justify  my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis</p>
                <p className='text-justify  mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta lorem mollis</p>
              </div>
              <div className=' text-neworange '>
                <p className='border-b-2 pb-3 w-48 m-auto text-center text-2xl'>Related Product</p>
              </div>
              <div>

              </div>
      </>
  );
}


export default Product;
