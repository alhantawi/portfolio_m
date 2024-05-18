import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'


const Grid = () => {
  return (
   <section id='about'>
 <BentoGrid >
       {[{ title:"title1", description:"des1", id:1 }
       ,{ title:"title2", description:"des2", id:2 }
       ,{ title:"title3", description:"des3", id:3 }
       ,{ title:"title4", description:"des4", id:4 }
       ,{ title:"title5", description:"des5", id:5 }
       ].map((item) => ( 
         <BentoGridItem 
         id={item.id} key={item.id} title={item.title} description={item.description} />	
            ))}
         
         
      
      </BentoGrid>
   </section>
  )
}

export default Grid