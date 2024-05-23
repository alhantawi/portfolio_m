import React from 'react';
import Image from "next/image"; 
import img3 from "../../public/insta.svg"
import img1 from "../../public/gsap.svg"
import img4 from "../../public/next.svg"
import Marquee from 'react-fast-marquee';


const Stack = () => {
  return (
    <div>
      <div className='w-full flex justify-between gap-3'> 
             <Marquee>  
                <div>
                 <Image src={img3}  
                
                    alt="GFG logo imported from public directory" />
                     </div> 
                     <div>
                    <Image src={img1} alt="GFG logo imported from public directory" /> 
                    </div>
                    <div>
                    <Image src={img4} alt="GFG logo imported from public directory" />
                    </div>
                    </Marquee> 
            </div> 
    </div>
  );
};

export default Stack;