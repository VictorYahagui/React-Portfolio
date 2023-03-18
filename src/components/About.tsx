
//contup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from '../variants'
//MicroComponents
import { ContactButton } from "./microComponents/ContactButton";
import { MyPortfolio } from "./microComponents/MyPortfolio";

export function About() {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section className="section" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    {/*IMG*/}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 bg-about bg-contain bg-no-repeat h-[40rem] mix-blend-lighten bg-top">

                    </motion.div>
                    {/*Texto*/}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1">
                        <h2 className="h2 text-accent"> Sobre.</h2>
                        <h3 className="h3 mb-4">Sou Iniciante no desenvolvimento Front End com <span className="text-accent">React</span></h3>
                        <p className="mb-6">
                            Este Site foi apenas um desafio que fiz, com responsividade para testar minhas skills
                        </p>
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="font-tertiary text-[2.5rem] text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Anos de <br />
                                    Experiencia
                                </div>
                            </div>
                            <div>
                                <div className="font-tertiary text-[2.5rem] text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={9} duration={3} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Projetos <br />
                                    Completos
                                </div>
                            </div>
                            <div>
                                <div className="font-tertiary text-[2.5rem] text-gradient mb-2">
                                    {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Anos de <br />
                                    Estudo em <br />
                                    <span className="uppercase text-gradient">react</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-8 items-center">
                            <ContactButton />
                            <MyPortfolio content="Portfolio" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}