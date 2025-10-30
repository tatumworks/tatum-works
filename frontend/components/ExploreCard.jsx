// 'use client';

// import { motion } from 'framer-motion';
// import styles from '../styles';
// import { fadeIn } from '../utils/motion';

// const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
//   <motion.div
//     variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//     className={`relative ${
//       active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
//     } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
//     onClick={() => handleClick(id)}
//   >
//     <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />

//     { active !== id ? (
//       <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
//         {title}
//       </h3>
//     ) : (
//       <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
//         <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[12px]`}>
//           <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-cotain" />
//         </div>
//         <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">Enter Metaverse</p>
//         <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
//           {title}
//         </h2>
//       </div>
//     )}
//   </motion.div>

// );

// export default ExploreCard;

'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  shortTitle,
  description,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative group ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px]
    transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden rounded-[24px]`}
    onClick={() => handleClick(id)}
  >
    {/* background image */}
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {/* ACTIVE CARD: full description overlay on hover */}
    {active === id && (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center
        bg-[rgba(0,0,0,0.65)] backdrop-blur-md text-white opacity-0
        transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-20 p-8"
      >
        <h2 className="text-2xl font-bold mb-3">{title}</h2>
        <p className="text-base text-gray-200 leading-relaxed max-w-[85%] whitespace-pre-line">
          {description.trim()}
        </p>
      </div>
    )}

    {/* INACTIVE CARD: overlay on hover */}
    {active !== id && (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center
        bg-[rgba(0,0,0,0.6)] backdrop-blur-md text-white opacity-0
        transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-20 p-8"
      >
        <h2 className="text-2xl font-semibold">{shortTitle}</h2>
      </div>
    )}

    {/* INACTIVE TITLE (vertical) */}
    {active !== id && (
      <h3
        className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-10
        lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
      >
        {title}
      </h3>
    )}

    {/* ACTIVE TITLE (horizontal, bottom bar) */}
    {active === id && (
      <div className="absolute bottom-0 p-8 w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px] z-10">
        <h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;



