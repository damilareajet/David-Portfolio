import  { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full   py-4 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className=" font-bold text-yellow" style={{ fontSize: 35,}} >David</div>

        {/* Menu icon visible on all screen sizes */}
        <div className=" cursor-pointer"   onClick={() => setShow(!show)}
          >    
            {
                show ? 
                <CgClose className=" cursor-pointer" style={{
                    fontSize: 35,
                    color: "white",
                }}/>
                :
                <HiMiniBars3BottomRight className=" cursor-pointer"  style={{
                    fontSize: 35,
                    color: "white",
                }}/>
            }
            </div>

        {/* Mobile Menu */}
        {
      show &&
          <div className="absolute right-20 pl-10 py-10   top-5  bg-white  ">
            <ul className="space-y-4 pr-12  ">
              <li><Link to={"work"} className="  text-blue ">My Work</Link></li>
              <li><a href="#about" className="  text-lg">My Shelf</a></li>
              <li><a href="#services" className="  text-lg">My Resume</a></li>
              <p className=' text-lg  font-medium text-lime pt-5'>Say Hello</p>
              <li><a href="" className=' text-lg ' >hello@David.dev</a></li>
              <li><a href="" className=' text-lg ' >t.me/mrdavid</a></li>
              <div className=' flex text-blue gap-8'>
                <li className=' text-lg ' >TW</li>
                <li className=' text-lg ' >GH</li>
                <li className=' text-lg ' >LN</li>
                <li className=' text-lg ' >YT</li>
              </div>
            </ul>
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
