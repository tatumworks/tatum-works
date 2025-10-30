'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="About Tatum Works"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At <span className="font-extrabold"> Tatum Works </span> , we believe in building things that last — from the ground up. 
        We’re a team that values integrity, hard work, and family above all else. Our philosophy is simple: <span className="font-extrabold">work hard to play harder, but always put family first.
        </span><br></br><br></br>We take pride in every project, every partnership, and every piece of earth we move. 
        What started as an idea between people who value honest work has become a company built on shared experience, trust, and grit.<br></br><br></br> 
        At the end of the day, we’re proud to say: <span className="font-extrabold">Tatum Works begins — and we like to play in the dirt.</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
