/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { motion, AnimatePresence } from '../lib/framer-motion-wrapper'
import { headContentAnimation,slideAnimation } from '../config/motion'
import state from '../store'
import { useSSRSafeSnapshot } from '../hooks'

const Home = () => {
    const snap = useSSRSafeSnapshot(state);
    return (
        <AnimatePresence>
            {/* {
                snap.intro && (
                    <motion.section className='home' {...slideAnimation('left')}>
                        <motion.header>
                            <img src="./threejs.png" alt="logo" />
                        </motion.header>
                    </motion.section>

                )
            } */}
        </AnimatePresence>
    );
}
  

export default Home;