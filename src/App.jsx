import { useState } from 'react'
import './App.css'

function App() { 

  return (
    <>
      <div className="navbar bg-[#BB4439] h-222 w-full ">
        <div className='flex justify-between'>  

          <div className="img">
            <img className='h-20 w-50 mx-2.5 md:h-35 md:w-80 md:mx-8 hover:cursor-pointer' src="/images/Loogo.png" alt="" />
          </div>

          <div className="img order-3 m-8 mx-4 flex gap-4 hover:cursor-pointer">
            <img className='md:h-14 md:w-14 md:my-2' src="/images/cart.png" alt="" />
            <img className='md:hidden' src="/images/menu.png" alt="" />

            <div className='text-[#DB4439] hidden md:block bg-white h-20 w-42 text-2xl p-6 hover:bg-[#F1E8D8] shadow-black-300 rounded-full font-Anton'>
            SHOP SAUCES</div>
          </div>

          <div className='img hidden md:block'> 
            <div className='text-[#F1e7DA] gap-7 text-2xl mx-30 my-12 font-Anton flex hover:cursor-pointer'>
              <h1>SHOP</h1>
              <h1>MENU</h1 >
              <h1>OUR ROOTS</h1>
              <h1>VISIT</h1>
              <h1>PRESS</h1>
            </div>
          </div>
        </div>

        <div className='imgg md:flex'>
           <div className='font-Anton text-6xl mt-12 text-[#F1E8D8] m-6 md:text-[10.5rem] md:w-210 md:h-300 md:mx-10 md:mt-15 '>
            <h1 className=''>SAUCE MADE</h1>
            <h1 className='md:-my-4'>WITH LOVE IN</h1>
            <h1 className=''>KANSAS CITY</h1>
            <h1 className='my-6 text-3xl md:my-6 md:text-[2.5rem]'>SINCE 1970… SOMETHING.</h1>
           </div>

           <div className='imgg'>
            <img className='h-88 w-82 mx-8 mt-27 rotate-0.6 md:rotate-1  md:-mx-5 md:h-150 md:w-155 md:mt-22' src="/images/imgg1.png" alt="" />
           </div>
        </div>
      </div>

      <div className="sliding h-100vh w-100%"> 
        <div className="moving text-2xl text-[#DB4439] whitespace-nowrap overflow-x-auto my-8 font-Anton">

          <div className="con inline-block">
            <h1 className='inline-block'>MADE FROM SCRATCH DAILY</h1>
            <div className='inline-block' id='fire'>🔥</div>

            <h1 className='inline-block'>RING THE HEAT HOME</h1>
            <div className='inline-block' id='fire'>🔥</div>

            <h1 className='inline-block'>BBQ SAUCE COMING IN HOT</h1>
            <div className='inline-block' id='fire'>🔥</div>
          </div>

          <div className="con inline-block">
            <h1 className='inline-block'>MADE FROM SCRATCH DAILY</h1>
            <div className='inline-block' id='fire'>🔥</div>

            <h1 className='inline-block'>RING THE HEAT HOME</h1>
            <div className='inline-block' id='fire'>🔥</div>

            <h1 className='inline-block'>BBQ SAUCE COMING IN HOT</h1>
            <div className='inline-block' id='fire'>🔥</div>
          </div>

          <div className="con inline-block">
            <h1 className='inline-block '>MADE FROM SCRATCH DAILY</h1>
            <div className='inline-block ' id='fire'>🔥</div>

            <h1 className='inline-block '>RING THE HEAT HOME</h1>
            <div className=' inline-block' id='fire'>🔥</div>

            <h1 className='inline-block'>BBQ SAUCE COMING IN HOT</h1>
            <div className='inline-block' id='fire'>🔥</div>
          </div>
        </div>
        
      </div>
      
      <div className="mainn bg-[#F1E7DA] h-240 md:h-225 w-100% relative flex"> 

        <div className="mainn mx-8 my-15 md:mx-0 md:my-0 absolute md:relative">

           <div className='md:flex'>
            <img className='h-100 w-80 md:h-225 md:w-190' src="/images/bottle.png" alt="" />

            <div>
              <h1 className="mainn font-Anton text-[#DB4439] mx-1 my-6 text-[3.8rem] leading-15
            md:m-18 md:my-46 md:text-[7rem] md:leading-27 ">THE MAGIC OF JONES BBQ IN YOUR HOME</h1>
             
               <div className='mainn md:mx-20 md:-my-36'>
                <div className="para w-78 mx-0 md:w-145 text-xl font-900 font-normal">
                 <h1>The Jones family has made their sauce from scratch daily for over 50 years. For the first time ever, you can bring that flavor to a grill near you.</h1>
                </div>

                <div className='mainn bg-[#DB4439] text-[#F1E7DA] font-semibold rounded-full hover:cursor-pointer hover:bg-orange-700 mx-0 my-8 h-15 w-40 text-center
                md:mx-0 md:my-8'>
                 <button className='m-4'>Shop Our Sauces</button>
                </div>  
               </div>
            </div>
           </div>
        </div>
      </div>  

      <div className="mainn-1">
        <h1 className='font-Anton text-[#DB4439] text-center my-12 text-2xl'>FEATURED IN</h1>

        <div className="mainn-1 flex flex-col md:flex-row gap-10 md:mx-18 md:h-20 md:w-52 ">
          <img className='md:mb-4 hover:cursor-pointer' src="/images/feast_logo.png" alt="" />
          <img className='md:mb-4 hover:cursor-pointer'  src="/images/refiner29_logo.png" alt="" />
          <img className='md:mb-4 hover:cursor-pointer'  src="/images/eater_logo.png" alt="" />
          <img className='md:mb-4 hover:cursor-pointer'  src="/images/vanityfair_logo.png" alt="" />
          <img className='md:mb-4 hover:cursor-pointer'  src="/images/wsj_logo.png" alt="" />
          <img className='md:mb-4 hover:cursor-pointer'  src="/images/womansday_logo.png" alt="" />
        </div>
      </div>

      <div className="mainn-2 h-245 md:h-215 w-full relative bg-[#DB4439]">
        <div className='font-Anton'>
          <h1 className='mainn-2 font-Anton text-[#F1E7DA] text-[3.8rem] absolute m-6 my-12 leading-15 
          md:mx-20 md:my-40 md:text-[7rem] md:w-140 md:leading-26'>STOP BY OUR RESTAURANT</h1>
        </div>

        <div className='mainn-2 absolute text-[#F1E7DA] text-[1rem] font-medium m-6 my-50 w-76 
        md:w-170 md:mx-20 md:my-100 md:text-[1.4rem] md:leading-6'>
          <h1 className=''>From housemade sausages to racks of ribs, we love to feed our Kansas City community. So come join the party… and come hungry!</h1> 
          <h1 className='my-6 md:font-Anton md:text-[1.35rem]'>Restaurant open 10:45am-3pm or sellout</h1>
          <h1 className='my-5 md:font-Anton md:text-[1.3rem]'>Tuesday through Saturday each week</h1>
          <h1 className='my-5 md:font-Anton md:text-[1.3rem]'>No online orders or call-ins available</h1>
          <button className='mainn bg-[#F1E7DA] text-[#DB4439] p-5 font-semibold  my-7 shadow-2xl hover:bg-amber-50 hover:cursor-pointer rounded-full'>View Our Menu</button>
        </div>

        <div>
          <img className='mainn-2 h-80 w-75 absolute m-5 my-145 md:mx-189 md:-my-0 md:h-215 md:w-1/2' src="/images/nextimg.jpg" alt="" />
        </div>

      </div>

      <div className="mainn-3 bg-[#F1E7DA] h-350 md:h-400 -my-9 w-full relative">
          <div className='mainn-3'>  
            <h1 className='text-[#DB4439] text-center text-[4rem]  font-Anton p-15 leading-17
            md:text-[10rem] md:leading-38 md:w-320 md:mx-26'>“THE BEST ATTITUDE IS GRATITUDE”</h1>
            <h1 className='text-[#DB4439] text-center font-Anton text-[2rem]
            md:text-[3rem]'>-THE JONES SISTERS</h1>
          </div>

          <div className="mainn-3 md:flex absolute">
            <img className='h-110 w-88 m-5
            md:h-180 md:w-160 md:mx-10 md:my-70' src="/images/left.jpg" alt="" />  
            <div>
            <img className='h-60 w-90 m-4
              md:h-120 md:w-180 md:mx-35 md:my-30' src="/images/right.jpg" alt="" />
            <h1 className='p-2 mx-2 md:mx-32 
               md:text-[1rem] font-medium md:w-150'>For sisters Deborah “Little” and Mary “Shorty” Jones, barbeque is a way of life. When they were little girls, their father, Leavy B. Jones Sr., set them up on milk crates to look over the pit at the very first Jones Bar-B-Q restaurant.</h1>
            <button className='bg-[#DB4439] md:mx-32 text-[#F1E7DA] mx-4 hover:cursor-pointer hover:bg-amber-700 rounded-full p-4'>Read Their Story</button>
           </div>

         </div> 

      </div>

      <div className='moving relative my-6 overflow-x-auto inline-block whitespace-nowrap bg-[#76251F] text-2xl w-full h-100vh p-8 text-[#F1E7DA] font-Anton'>
          <div className="con inline-block">
            <h1 className='inline-block'>FOLLOW US ON INSTAGRAM @JONESBBQKC</h1>
            <h1 className='inline-block'>🔥</h1>
          </div>

          <div className="con inline-block">
            <h1 className='inline-block'>FOLLOW US ON INSTAGRAM @JONESBBQKC</h1>
            <h1 className='inline-block'>🔥</h1>
          </div>

          <div className="con inline-block">
            <h1 className='inline-block'>FOLLOW US ON INSTAGRAM @JONESBBQKC</h1>
            <h1 className='inline-block'>🔥</h1>
          </div>

          <div className="con inline-block">
            <h1 className='inline-block'>FOLLOW US ON INSTAGRAM @JONESBBQKC</h1>
            <h1 className='inline-block'>🔥</h1>
          </div>

          <div className="con inline-block">
            <h1 className='inline-block'>FOLLOW US ON INSTAGRAM @JONESBBQKC</h1>
            <h1 className='inline-block'>🔥</h1>
          </div>
      </div>

      <div className="mainn-4 w-full p-10 -my-8 h-128 md:min-h-screen bg-[#DB4439]">

           <h1 className='text-[4rem] my-9 md:text-[9rem] leading-16 text-center font-Anton md:w-200 md:leading-35 md:mx-80 text-[#F1E7DA]'>STAY IN THE KNOW</h1>
           <h1 className='text-[1rem] w-70 mx-3 text-center -my-6 md:w-150 md:text-[16px] md:mx-100 md:font-medium text-[#F1E7DA]'>Enter your email address to receive news and updates from Jones Bar-B-Q</h1>

           <div className='mainn-4 md:w-200 md:mx-150'>
            <input className=" bg-white rounded-full p-5 w-60 my-15 mx-8 md:w-72 md:-mx-30" type="text" placeholder='Email Addess'/>
            <button className='mx-22 -my-10 w-32 bg-[#F1E7DA] text-[#DB4439] rounded-full md:mx-36 p-5 hover:cursor-pointer hover:bg-amber-50'>SUBMIT</button>
           </div>
        
      </div>
      <div className='mainn-5 bg-[#76251E] h-260 md:h-80 -my-25 md:-my-46'>
        <div className="mainn-5 final">
          <img className=' my-20 md:m-0 md:my-0 ' src="/images/loogo.png" alt="" />
        </div>
         <div className='mainn-5 md:flex md:justify-between text-[#F1E7DA] md:gap-10 md:mx-90 md:w-3/4 md:-my-50 leading-9 md:leading-10 '>

          <div className="mainn-5 mx-6 md:mx-0">
           <h1 className='font-Anton text-[1.5rem]'>VISIT US</h1>
           <h1 className='leading-5'>6706 Kaw Drive,</h1>
           <h1 className='leading-5'>Kansas City, KS 66111</h1>
           <h1>Questions? Call</h1>
           <h1>816-541-8270 (office)  or</h1>
           <h1>855-752-7227</h1>
          </div>

          <div className="mainn-5 font-semibold mx-6 my-10 md:mx-0 md:my-0 ">
            <h1 className='font-Anton text-[1.5rem]'>OUR HOURS</h1>
            <h1 className='leading-5'>Restaurant open 10:45am -</h1>
            <h1 className='leading-5'>3pm or sellout Tuesday’s thru</h1>
            <h1 className='leading-5'>Saturday.</h1>
            <h1 className='leading-14'>No online orders or call-ins</h1>
            <h1 className='leading-0'> available</h1>
          </div>

          <div className="mainn-5 mx-6 md:mx-0 my-10 md:my-0">
            <h1 className='font-Anton text-[1.5rem]'>KEEP IN TOUCH</h1>
            <h1 className='leading-5'>Follow us on <a href="#" className='text-orange-600'>Instagram</a></h1>
            <h1 className='leading-5'>Like us on <a href="#" className='text-orange-600'>Facebook</a></h1>
          </div>

          <div className="mainn-5 mx-6 md:mx-0 my-10 md:my-0">
            <h1 className='font-Anton text-[1.5rem]'>FOR MEDIA INQUIRIES</h1>
            <h1>Deborah</h1>
            <h1><a href="#" className='text-orange-600'>orders@jonesbbqkc.com</a></h1>
            <h1>Made with<a href="#" className='text-orange-600'>Squarespace</a></h1>
          </div>

         </div>

      </div>

    </> 
         
       
  )
}
export default App
