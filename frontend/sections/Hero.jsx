'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Tatum
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row items-center justify-center"
        >
          <h1 className={styles.heroHeading}> Wor</h1>
          {/* <div className={styles.heroRText} /> */}
          <h1 className={styles.heroHeading}> ks</h1>
        </motion.div>
      </div>
      {/* <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          variants={textVariant(1.1)}
          className="flex items-center justify-center w-full h-full"
        >
          <img
            src="/tatum-works-logo.png"
            alt="Tatum Works Logo"
            className="object-contain max-w-[80vw] max-h-[60vh]"
          />
        </motion.div>
      </div> */}



      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
        <img
          src="/tcover.jpg"
          // src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <div
          onClick={(e) => {
            e.preventDefault();

            const isChrome =
              /Chrome/i.test(navigator.userAgent) && !/Edg/i.test(navigator.userAgent);

            if (isChrome) {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=dustin@tatum-works.com&cc=josh@tatum-works.com",
                "_blank",
                "noopener,noreferrer"
              );
            } else {
              window.location.href =
                "mailto:dustin@tatum-works.com?cc=josh@tatum-works.com";
            }
          }}
          className="cursor-pointer w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]"
        >
          <motion.img
            src="/tatum-stamp.png"
            alt="Contact Tatum Works"
            className="sm:w-[200px] w-[140px] sm:h-[200px] h-[140px] object-contain hover:scale-110 transition-transform duration-300"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
          />
        </div>



        {/* <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/tatum-stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: 'loop' }}
            />
          </div>
        </a> */}
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
