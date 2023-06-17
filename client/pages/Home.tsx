/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { motion, AnimatePresence } from '../lib/framer-motion-wrapper'
import { headContentAnimation,slideAnimation } from '../config/motion'
import state from '../store'
import { useSnapshot } from 'valtio';
import Image from 'next/image'
// import { useSSRSafeSnapshot } from '../hooks'

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {
                snap.intro && (
                    <motion.section className='home' {...slideAnimation('left')}>
                        <motion.header>
                            <Image src="/threejs.png" alt="logo" width={30} height={30}/>
                        </motion.header>
                    </motion.section>

                )
            }
        </AnimatePresence>
    );
}
  

export default Home;