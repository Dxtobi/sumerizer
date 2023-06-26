import { Link, useLocation} from "react-router-dom";
import {IoMdNotifications} from 'react-icons/io'
import { BsTwitter } from "react-icons/bs";
// import { useState } from "react";

//const LinksArray = ['watch', 'movies', 'extras', 'life streams', 'pay it forward', 'community']
const logedInLinksArray = ['how to use', ]
function Header() {
   //const logedin = true
    const location = useLocation()

           
                return LogedInHeader(location)
            
    
}

export default Header;

function LogedInHeader(location) {
    return (
        <div className="w-full flex bg-transparent p-4 items-center justify-between px-3 md:px-10 fixed left-0 top-0   bg-glass z-50">
                <div className="flex gap-[3rem] items-center w-full justify-between ">
                    <a href="/" className="font-bold text-2xl text-blue-600">Short<span className="text-orange-600">Man</span></a>
                    <div className="flex gap-10 items-center">
                        {
                            logedInLinksArray.map((link, i) => (
                                <Link key={i} to={`/${link}`} className={`text-sm capitalize py-2 ${location.pathname === `/${link}` ? 'border-b-[lightblue] border-b-4' : ''}`}>{link}</Link>
                            ))
            }
            <a href="https://twitter.com/programmer_dex" target="_blank" className={`capitalize py-2 border-b-[#089aff] border-b-4`} rel="noreferrer"><BsTwitter color="#089aff" size={30}/></a>
                    </div>
                </div>

                
            </div>
    )
}

// eslint-disable-next-line no-unused-vars
function notLogedInHeader(location) {
    return (
        <div className="w-full flex bg-[#CBC5B6] p-4 items-center justify-between px-10">
          <div className="flex gap-[3rem] items-center">
            <a href="/" className="text-2xl font-bold">SPIRACY</a>
          </div>
      
          <div className="flex gap-2 items-center">
            <Link to="/notifications" className="">
              <IoMdNotifications className="text-3xl text-[#EB440F]" />
            </Link>
            <Link to="/signup" className="rounded-full p-3 bg-[#EB440F]">Signup</Link>
          </div>
        </div>
      );
}