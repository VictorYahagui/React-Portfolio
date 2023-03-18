
//motion
import { motion } from "framer-motion";
//icon
import { ArrowUpRight } from "phosphor-react";
//variant
import { fadeIn } from '../variants'

//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

export function Work() {
    return (
        <section className="section" id="work">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10 ">
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        {/*texto*/}
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                meu ultimo <br />
                                trabalho
                            </h2>
                            <p className="max-w-sm mb-16">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, repudiandae explicabo tempore dolores architecto
                            </p>
                            <button className="btn btn-sm"> <a href="https://victoryahagui.github.io" target="_blank" >Veja meu trabalho</a></button>
                        </div>
                        {/*img*/}
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/*overlay*/}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">

                            </div>
                            {/*img*/}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img1}
                                alt="" />
                            {/*pre Titulo*/}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                                <span className="text-gradient">UI/Ux Design</span>

                            </div>
                            {/*Titulo*/}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50">
                                <span className="text-3xl text-white"> Projeto title</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 flex flex-col gap-y-10 ">
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/*overlay*/}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">

                            </div>
                            {/*img*/}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img2}
                                alt="" />
                            {/*pre Titulo*/}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                                <span className="text-gradient">UI/Ux Design</span>

                            </div>
                            {/*Titulo*/}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50">
                                <span className="text-3xl text-white"> Projeto title</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                            {/*overlay*/}
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">

                            </div>
                            {/*img*/}
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={Img3}
                                alt="" />
                            {/*pre Titulo*/}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-500 z-50">
                                <span className="text-gradient">UI/Ux Design</span>

                            </div>
                            {/*Titulo*/}
                            <div className="absolute -bottom-full left-12 group-hover:bottom-9 transition-all duration-700 z-50">
                                <span className="text-3xl text-white"> Projeto title</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}