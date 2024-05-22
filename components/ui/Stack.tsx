import React from 'react';
import Image from "next/image"; 
import img3 from "../../public/insta.svg"
import img1 from "../../public/gsap.svg"
import Marquee from 'react-fast-marquee';


const Stack = () => {
  return (
    <div>
      <div className='w-full flex justify-between'> 
             <Marquee>  
                 <Image src={img3}  
                    alt="GFG logo imported from public directory" /> 
                    <Image src={img1} alt="GFG logo imported from public directory" /> 
                    </Marquee> 
            </div> 
    </div>
  );
};

export default Stack;