// 'use client';

// import { motion } from 'framer-motion';
// import { socials } from '../constants';

// import styles from '../styles';
// import { footerVariants } from '../utils/motion';

// const Footer = () => (
//   <motion.footer
//     variants={footerVariants}
//     initial="hidden"
//     whileInView="show"
//     className={`${styles.xPaddings} py-8 relative`}
//   >
//     <div className="footer-gradient" />
//     <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
//       <div className="flex items-center justify-between flex-wrap gap-5">
//         <h4 className="font-bold md:text-[64px] text-[44px] text-white">
//           Enter the Metaverse
//         </h4>
//         <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
//           <img
//             src="/headset.svg"
//             alt="headset"
//             className="w-[24px] h-[24px] object-contain"
//           />
//           <span className="font-normal text-[16px] text-white">
//             Enter Metaverse
//           </span>
//         </button>
//       </div>

//       <div className="flex flex-col">
//         <div className="mb-[50px] h-[2px] bg-white opacity-10" />

//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <h4 className="font-extrabold text-[24px] text-white">
//             METADROID
//           </h4>
//           <p className="font-normal text-[14px] text-white opacity-50">
//             Copyright © 2021 - 2022 Metadroid. All rights reserved.
//           </p>

//           <div className="flex gap-4">
//             {socials.map((social) => (
//               <a key={social.name} href={social.link}>
//                 <img
//                   src={social.url}
//                   alt={social.name}
//                   className="w-[24px] h-[24px] object-contain"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </motion.footer>
// );

// export default Footer;


'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      {/* --- Top Heading --- */}
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white leading-tight">
          Let’s Build Something That Lasts
        </h4>
      </div>

      {/* --- Divider + Footer Bottom --- */}
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white tracking-wider">
            TATUM WORKS
          </h4>

          <div
            onClick={(e) => {
              e.preventDefault();

              // Detect if user is in Chrome (most likely Gmail users)
              const isChrome = /Chrome/i.test(navigator.userAgent) && !/Edg/i.test(navigator.userAgent);

              if (isChrome) {
                // Open Gmail compose in new tab
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=dustin@tatum-works.com&cc=josh@tatum-works.com",
                  "_blank",
                  "noopener,noreferrer"
                );
              } else {
                // Fallback to mailto for all other browsers
                window.location.href = "mailto:dustin@tatum-works.com?cc=josh@tatum-works.com";
              }
            }}
            className="flex items-center gap-2 text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            aria-label="Email Dustin (CC Josh)"
          >
            {/* Inline SVG mail icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-[22px] h-[22px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 7.5l-9.75 6.75L2.25 7.5m19.5 0A2.25 2.25 0 0021.75 5.25H2.25A2.25 2.25 0 000 7.5v9A2.25 2.25 0 002.25 18.75h19.5A2.25 2.25 0 0024 16.5v-9z"
              />
            </svg>
            <span className="text-[14px] font-light">Contact</span>
          </div>


        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;



