'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Experience" textStyles="text-center" />

        <TitleText
          title={
            <>
              The experience that built <br className="md:block hidden" />
              Tatum Works
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;






// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import styles from '../styles';
// import { TypingText, ExploreCard, TitleText } from '../components';
// import { staggerContainer } from '../utils/motion';

// const Explore = () => {
//   const [active, setActive] = useState('world-2');
//   const [worlds, setWorlds] = useState([]);

//   // Fetch Django data on mount
//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/features/')
//       .then((res) => res.json())
//       .then((data) => {
//         // adapt backend fields to what ExploreCard expects
//         const formatted = data.map((item, i) => ({
//           id: `world-${i + 1}`,
//           imgUrl: '/planet-01.png',   // placeholder image path
//           title: item.title || `Feature ${i + 1}`,
//           desc: item.desc || '',
//         }));
//         setWorlds(formatted);
//       })
//       .catch((err) => console.error('Error fetching worlds:', err));
//   }, []);

//   return (
//     <section className={`${styles.paddings}`} id="explore">
//       <motion.div
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         className={`${styles.innerWidth} mx-auto flex flex-col`}
//       >
//         <TypingText title="| The World" textStyles="text-center" />
//         <TitleText
//           title={
//             <>
//               Choose the world you want <br className="md:block hidden " />
//               to Explore
//             </>
//           }
//           textStyles="text-center"
//         />

//         <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
//           {worlds.length > 0 ? (
//             worlds.map((world, index) => (
//               <ExploreCard
//                 key={world.id}
//                 {...world}
//                 index={index}
//                 active={active}
//                 handleClick={setActive}
//               />
//             ))
//           ) : (
//             <p className="text-center text-white w-full">Loading worlds...</p>
//           )}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Explore;

