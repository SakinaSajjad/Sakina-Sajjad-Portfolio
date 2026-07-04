// import React from 'react'
// import Style from './birthday.module.scss';
// import { Box } from '@mui/material';
// import self from "../../img/self.png"
// import banner from '../../img/banner.png'
// import BalloonBorder from '../../img/BalloonBorder.png'

// function Birthday() {
//   return (
//     <Box >
//       <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//         <img src={BalloonBorder} alt="balloon border" style={{ width: '100%' }} />

//         {/* Banner Positioned Inside the Balloon Border */}
//         <Box position={'absolute'} top={'3%'} left={'35%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//           <img src={banner} alt="banner" style={{ width: '100%', height: 'auto' }} />
//         </Box>
//       </Box>
//       <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
//         justifyContent={'center'}>
//         {/* <img src={banner} alt="img" /> */}
//         <Box className={Style.card}>
//           <Box className={Style.outside}>
//             <Box className={Style.front}>
//               <p>Happy Birthday</p>
//               <Box className={Style.cake}>
//                 <Box className={Style.toplayer}></Box>
//                 <Box className={Style.middlelayer}></Box>
//                 <Box className={Style.bottomlayer}></Box>
//                 <Box className={Style.candle}></Box>
//               </Box>
//             </Box>
//             <Box className={Style.back}>
//               <img src={self} alt="img" />
//             </Box>
//           </Box>
//           <Box className={Style.inside}>
//             <p>Wishing you a very happy birthday filled with love and laughter</p>
//             <h1>&#127873;</h1>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default Birthday

// import React from 'react'
// import Style from './birthday.module.scss';
// import { Box } from '@mui/material';
// import self from "../../img/self.png";
// import banner from '../../img/banner.png';
// import BalloonBorder from '../../img/BalloonBorder.png';

// function Birthday() {

//   const [balloonPosition, setBalloonPosition] = useState({ top: '50%', left: '50%' });

//   // Function to randomly change the position of the balloon
//   const getRandomPosition = () => {
//     const top = `${Math.random() * 60 + 10}%`; // Random top position between 10% and 70%
//     const left = `${Math.random() * 60 + 10}%`; // Random left position between 10% and 70%
//     return { top, left };
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBalloonPosition(getRandomPosition());
//     }, 3000); // Change position every 3 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <Box>
//       <Box position={'relative'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//         <img 
//           src={BalloonBorder} 
//           alt="balloon border" 
//           style={{ 
//             width: '100%', 
//             maxHeight: '90vh', // Control the max height
//             // objectFit: 'contain' // Ensure it scales without distorting the aspect ratio
//           }} 
//         />

//         {/* Banner Positioned Inside the Balloon Border */}
//         <Box position={'absolute'} top={'3%'} left={{md:'40%'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//           <img src={banner} alt="banner" style={{ width: '100%', height: 'auto' }} />
//         </Box>
//       </Box>
//       <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
//         justifyContent={'center'}>
//         <Box className={Style.card}>
//           <Box className={Style.outside}>
//             <Box className={Style.front}>
//               <p>Happy Birthday</p>
//               <Box className={Style.cake}>
//                 <Box className={Style.toplayer}></Box>
//                 <Box className={Style.middlelayer}></Box>
//                 <Box className={Style.bottomlayer}></Box>
//                 <Box className={Style.candle}></Box>
//               </Box>
//             </Box>
//             <Box className={Style.back}>
//               <img src={self} alt="img" />
//             </Box>
//           </Box>
//           <Box className={Style.inside}>
//             <p>Wishing you a very happy birthday filled with love and laughter</p>
//             <h1>&#127873;</h1>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Birthday;

// import React, { useEffect, useState } from 'react';
// import Style from './birthday.module.scss';
// import { Box } from '@mui/material';
// import self from "../../img/self.png";
// import banner from '../../img/banner.png';
// import BalloonBorder from '../../img/BalloonBorder.png';
// import b10 from '../../img/b10.png'; // Import the floating balloon image

// function Birthday() {
//   const [balloonPosition, setBalloonPosition] = useState({ top: '50%', left: '50%' });

//   // Function to randomly change the position of the balloon
//   const getRandomPosition = () => {
//     const top = `${Math.random() * 60 + 10}%`; // Random top position between 10% and 70%
//     const left = `${Math.random() * 60 + 10}%`; // Random left position between 10% and 70%
//     return { top, left };
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBalloonPosition(getRandomPosition());
//     }, 3000); // Change position every 3 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <Box>
//       <Box position="relative" display="flex" justifyContent="center" alignItems="center">
//         {/* Balloon Border */}
//         <img 
//           src={BalloonBorder} 
//           alt="balloon border" 
//           style={{ 
//             width: '100%', 
//             maxHeight: '90vh',
//           }} 
//         />

//         {/* Randomly Floating Balloon */}
//         <Box
//           position="absolute"
//           top={balloonPosition.top}
//           left={balloonPosition.left}
//           zIndex={1} // Make sure it's behind the card but in front of the border
//           style={{
//             animation: `${Style.float} 6s ease-in-out infinite`, // Custom floating animation
//           }}
//         >
//           <img src={b10} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//         </Box>

//         {/* Banner Positioned Inside the Balloon Border */}
//         <Box
//           position="absolute"
//           top="3%"
//           left={{ md: '40%' }}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <img src={banner} alt="banner" style={{ width: '100%', height: 'auto' }} />
//         </Box>
//       </Box>
      
//       <Box
//         component="main"
//         display="flex"
//         flexDirection={{ xs: 'column', md: 'row' }}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Box className={Style.card} zIndex={2}> {/* Ensure the card is in front */}
//           <Box className={Style.outside}>
//             <Box className={Style.front}>
//               <p>Happy Birthday</p>
//               <Box className={Style.cake}>
//                 <Box className={Style.toplayer}></Box>
//                 <Box className={Style.middlelayer}></Box>
//                 <Box className={Style.bottomlayer}></Box>
//                 <Box className={Style.candle}></Box>
//               </Box>
//             </Box>
//             <Box className={Style.back}>
//               <img src={self} alt="img" />
//             </Box>
//           </Box>
//           <Box className={Style.inside}>
//             <p>Wishing you a very happy birthday filled with love and laughter</p>
//             <h1>&#127873;</h1>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Birthday;

// import React, { useEffect, useState } from 'react';
// import Style from './birthday.module.scss';
// import { Box } from '@mui/material';
// import self from "../../img/self.png";
// import banner from '../../img/banner.png';
// import BalloonBorder from '../../img/BalloonBorder.png';
// import b1 from '../../img/b1.png'; // Import the floating balloon image
// import b2 from '../../img/b2.png';
// import b3 from '../../img/b3.png';
// import b4 from '../../img/b4.png';
// import b5 from '../../img/b5.png';
// import b6 from '../../img/b6.png';
// import b7 from '../../img/b7.png';
// import b8 from '../../img/b8.png';
// import b9 from '../../img/b9.png';
// import b10 from '../../img/b10.png';


// function Birthday() {
//   const [balloonPosition, setBalloonPosition] = useState({ top: '50%', left: '50%' });

//   // Function to randomly generate new top and left positions
//   const getRandomPosition = () => {
//     const top = `${Math.random() * 80}%`; // Random top position between 0% and 80%
//     const left = `${Math.random() * 80}%`; // Random left position between 0% and 80%
//     return { top, left };
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBalloonPosition(getRandomPosition());
//     }, 4000); // Change position every 4 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <Box>
//       <Box position="relative" display="flex" justifyContent="center" alignItems="center">
//         {/* Balloon Border */}
//         <img 
//           src={BalloonBorder} 
//           alt="balloon border" 
//           style={{ 
//             width: '100%', 
//             maxHeight: '90vh',
//           }} 
//         />

//         {/* Randomly Floating Balloon */}
//         <Box
//           position="absolute"
//           top={balloonPosition.top}
//           left={balloonPosition.left}
//           zIndex={1} // Ensure it's behind the card but in front of the border
//           style={{
//             transition: 'top 4s ease-in-out, left 4s ease-in-out', // Smooth transition
//           }}
//         >
//           <img src={b1} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b2} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b3} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b4} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b5} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b6} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b7} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b8} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b9} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//           <img src={b10} alt="floating balloon" style={{ width: '50px', height: 'auto' }} />
//         </Box>

//         {/* Banner Positioned Inside the Balloon Border */}
//         <Box
//           position="absolute"
//           top="3%"
//           left={{ md: '40%' }}
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <img src={banner} alt="banner" style={{ width: '100%', height: 'auto' }} />
//         </Box>
//       </Box>
      
//       <Box
//         component="main"
//         display="flex"
//         flexDirection={{ xs: 'column', md: 'row' }}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Box className={Style.card} zIndex={2}> {/* Ensure the card is in front */}
//           <Box className={Style.outside}>
//             <Box className={Style.front}>
//               <p>Happy Birthday</p>
//               <Box className={Style.cake}>
//                 <Box className={Style.toplayer}></Box>
//                 <Box className={Style.middlelayer}></Box>
//                 <Box className={Style.bottomlayer}></Box>
//                 <Box className={Style.candle}></Box>
//               </Box>
//             </Box>
//             <Box className={Style.back}>
//               <img src={self} alt="img" />
//             </Box>
//           </Box>
//           <Box className={Style.inside}>
//             <p>Wishing you a very happy birthday filled with love and laughter</p>
//             <h1>&#127873;</h1>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Birthday;


import React, { useEffect, useState } from 'react';
import Style from './birthday.module.scss';
import { Box } from '@mui/material';
import self from "../../img/self.png";
import banner from '../../img/banner.png';
import BalloonBorder from '../../img/BalloonBorder.png';
import b1 from '../../img/b1.png';
import b2 from '../../img/b2.png';
import b3 from '../../img/b3.png';
import b4 from '../../img/b4.png';
import b5 from '../../img/b5.png';
import b6 from '../../img/b6.png';
import b7 from '../../img/b7.png';
import b8 from '../../img/b8.png';
import b9 from '../../img/b9.png';
import b10 from '../../img/b10.png';

const balloons = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10]; // Store all balloon images in an array

function Birthday() {
  const [balloonPositions, setBalloonPositions] = useState(
    Array(balloons.length).fill({ top: '50%', left: '50%' })
  );

  // Function to randomly generate new top and left positions
  const getRandomPosition = () => {
    const top = `${Math.random() * 80}%`; // Random top position between 0% and 80%
    const left = `${Math.random() * 80}%`; // Random left position between 0% and 80%
    return { top, left };
  };

  useEffect(() => {
    const updateBalloonPositions = () => {
      setBalloonPositions(
        balloonPositions.map(() => getRandomPosition())
      );
    };

    const intervalId = setInterval(updateBalloonPositions, 4000); // Change positions every 4 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [balloonPositions]);

  return (
    <Box>
      <Box position="relative" display="flex" justifyContent="center" alignItems="center">
        {/* Balloon Border */}
        <img 
          src={BalloonBorder} 
          alt="balloon border" 
          style={{ 
            width: '100%', 
            maxHeight: '90vh',
          }} 
        />

        {/* Randomly Floating Balloons */}
        {balloons.map((balloon, index) => (
          <Box
            key={index}
            position="absolute"
            top={balloonPositions[index].top}
            left={balloonPositions[index].left}
            zIndex={1} // Ensure balloons are behind the card but in front of the border
            style={{
              transition: 'top 4s ease-in-out, left 4s ease-in-out', // Smooth transition
            }}
          >
            <img src={balloon} alt={`floating balloon ${index + 1}`} style={{ width: '80px', height: 'auto' }} />
          </Box>
        ))}

        {/* Banner Positioned Inside the Balloon Border */}
        <Box
          position="absolute"
          top="3%"
          left={{ md: '40%' }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={banner} alt="banner" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Box>
      
      <Box
        component="main"
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
      >
        <Box className={Style.card} zIndex={2}> {/* Ensure the card is in front */}
          <Box className={Style.outside}>
            <Box className={Style.front}>
              <p>Happy Birthday</p>
              <Box className={Style.cake}>
                <Box className={Style.toplayer}></Box>
                <Box className={Style.middlelayer}></Box>
                <Box className={Style.bottomlayer}></Box>
                <Box className={Style.candle}></Box>
              </Box>
            </Box>
            <Box className={Style.back}>
              <img src={self} alt="img" />
            </Box>
          </Box>
          <Box className={Style.inside}>
            <p>Wishing you a very happy birthday filled with love and laughter</p>
            <h1>&#127873;</h1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Birthday;


