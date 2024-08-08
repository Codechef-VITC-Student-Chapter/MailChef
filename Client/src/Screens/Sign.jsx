import { useState } from "react";
import {Link} from "react-router-dom"
import Ldeg from "./assets/images/LoginSignin_Leftimg.jpeg"
import Rdeg from "./assets/images/LoginSignin_righttimg.jpeg"
import Gog from "./Google.jsx"

function Sign() {
    const [email,setEmail]=useState("");
    const [passwrd,setPasswrd]=useState("");

    const newEmail=(event)=>{
        setEmail(event.target.value);
    }

    const newPasswrd=(event)=>{
        setPasswrd(event.target.value);
    }



    return (
      <div className='h-screen w-screen bg-[#ACC9F8]'>
        {/* title */}
        <div className='text-center text-3xl w-[100%] h-[50px] font-bebas pt-2  text-[#2E3446] '>UNLEASH YOUR CREATIVITY</div>
  
        {/* login box */}
        <div className='absolute flex justify-center items-center h-screen w-screen  -top-1'>
          <div className='bg-[#FDEFCF] h-[70vh] md:w-[25vw] sm:w-[35vw] rounded-2xl max-sm:w-[60vw] '>

            <div className="w-[100%] " ><p className="font-bebas text-3xl pt-4 pl-7 " >WELCOME BACK</p></div>
            <div className="w-[100%]"><p className="font-bebas text-1xl pt-2 pl-7 " >EMAIL</p></div>
            {/* EMAIL INPUT */}
            <div className="flex justify-center pt-1 w-[100%] " ><input type="email" placeholder="Example@email.com" className="h-[5vh] md:w-[21vw] sm:w-[26vw] max-sm:w-[50vw] rounded-lg pl-3 " value={email} onChange={newEmail} /></div>
            <div className="w-[100%]"><p className="font-bebas text-1xl pt-4 pl-7 " >PASSWORD</p></div>
            {/* PASS INPUT */}
            <div className="flex justify-center pt-1 w-[100%] " ><input type="password" placeholder="At least 8 characters" className="h-[5vh] md:w-[21vw] sm:w-[26vw] max-sm:w-[50vw] rounded-lg pl-3 " value={passwrd} onChange={newPasswrd} /></div>
            
            <div className="font-bebas text-[#1E4AE9] w-[100%] flex justify-end pr-[10%] pt-[2%] " >FORGOT PASSWORD?</div>
            {/* SIGNUP */}
            <div className="flex justify-center pt-4 w-[100%] " ><button className="font-bebas text-1xl h-[5vh] md:w-[21vw] sm:w-[25vw] max-sm:w-[50vw] bg-[#2E3446] rounded-lg text-white " >SIGN IN</button></div>
            <div className="flex items-center justify-center gap-1 w-[100%] pt-[10%] " >
                <hr className="  h-[0.25vh] my-1 w-1/3 bg-[#CFDFE2] border-0 " ></hr>
                <h3 className="font-bebas text-2xl font-normal text-[#294957]  ">OR</h3>
                <hr className=" h-[0.25vh] my-1 w-1/3 bg-[#CFDFE2] border-0 " ></hr>
             </div>
            
            <div className="w-[100%] flex justify-center pt-[10%] " ><button className="font-bebas text-1xl h-[5vh] md:w-[21vw] sm:w-[26vw] max-sm:w-[50vw] bg-[#F3F9FA] rounded-xl text-black text-center " ><div className="flex flex-nowrap justify-center sm:pt-1 " ><Gog className=" " />SIGN IN WITH GOOGLE</div></button></div>
            <div className="w-[100%] pt-9 flex justify-center " ><p className="font-bebas text-[#313957]" >DO YOU HAVE AN ACCOUNT <span className="text-[#1E4AE9]"><Link to="/Login" >SIGN UP</Link></span></p></div>
          </div>
        </div>
  
        {/* images */}
        <div className='flex justify-between w-screen pr-[15%] pl-[15%] max-sm:pr-[5%] max-sm:pl-[5%] m-0'>
          <div className='h-[85vh] w-[28vw] border-white border-8 flex-shrink-0.5'><img src={Ldeg} alt="Left image" className='w-full h-full'/></div> 
          <div className='h-[85vh] w-[28vw] border-white border-8 flex-shrink-0.5'><img src={Rdeg} alt="Right image" className='w-full h-full'/></div>
        </div>
      </div>
    )
  }

export default Sign