//images
import Img from '../assets/about.png'
//tipo de animação
import { TypeAnimation } from 'react-type-animation'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'
//icons
import { GithubLogo, LinkedinLogo } from 'phosphor-react'
//MiniComponents
import { ContactButton } from './microComponents/ContactButton'
import { MyPortfolio } from './microComponents/MyPortfolio'

export function Banner() {
    return (
        <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center justify-center" id="home">
            <div className="container mx-auto">
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12'>
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='uppercase text-[3.43rem] font-bold leading-[0.8] lg:text-[5rem]'>Victor <span>Yahagui</span></motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[2.25rem] lg:text-[3.75rem] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='text-white mr-4'>
                                Sou
                            </span>
                            <TypeAnimation sequence={[
                                'Iniciante',
                                2000,
                                'No',
                                2000,
                                'Front End!',
                                2000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity} />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='mb-8 max-w-lg mx-auto lg:mx-0'>
                            Site feito apenas para uma apresentação, feito de um modo bem minimalista apenas utilizando um layout,
                            as imagens são apenas para ocupar espaços
                        </motion.p>

                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex justify-center items-center max-w-max gap-x-6 mb-12 mx-auto lg:mx-0'>
                            <ContactButton />
                            <MyPortfolio content='Portfolio' />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.7)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className='flex text-[1.250rem] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href="https://www.linkedin.com/in/victoryahagui/" target="_blank">
                                <LinkedinLogo size={36} />
                            </a>
                            <a href="https://github.com/VictorYahagui" target="_blank">
                                <GithubLogo size={36} />
                            </a>
                        </motion.div>

                    </div>

                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className='hidden lg:flex flex-1 max-w-[20rem] lg:max-w-[30.125em]'>
                        <img src={Img} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}