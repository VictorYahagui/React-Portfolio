//motion
import { motion } from "framer-motion";
//icon
import { ArrowUpRight } from "phosphor-react";
//variant
import { fadeIn } from '../variants'
//service data

type ServiceType = {
    name: string,
    description: string,
    link: string,
    id: number,
}

const services: ServiceType[] = [
    {
        name: 'UI/UX Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate maiores ea doloribus magni assumenda',
        link: 'localSla',
        id: 1
    },
    {
        name: 'Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate maiores ea doloribus magni assumenda',
        link: 'localSla',
        id: 2
    },
    {
        name: 'Design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate maiores ea doloribus magni assumenda',
        link: 'localSla',
        id: 3
    },
    {
        name: 'Product',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate maiores ea doloribus magni assumenda',
        link: 'localSla',
        id: 4
    },

]
export function Services() {
    return (
        <section className="section" id="services">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Texto e Imagem*/}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                        <h2 className="h2 text-accent mb-6">
                            Oque faço ?
                        </h2>
                        <h3 className="h3 max-w-[28.5rem] mb-16 ">
                            Desenvolvo interfaçes WEB apartir de um layout proposto
                        </h3>
                        <button className="btn btn-sm">
                            <a href="https://victoryahagui.github.io" target="_blank" >Veja meu trabalho</a>
                        </button>
                    </motion.div>
                    {/* Servicos */}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className="flex-1 ">
                        {/* Lista de servicos */}
                        <div>
                            {services.map((service) => {
                                return (
                                    <div className="border-b border-white/20 h-[9.125rem] mb-[2.375rem] flex" key={service.id}>
                                        <div className="max-w-[30rem]">
                                            <h4 className="text-[1.25rem] tracking-wider font-primary font-semibold mb-6">{service.name}</h4>
                                            <p className="font-secondary leading-tight">{service.description}</p>
                                        </div>
                                        <div className="flex flex-col flex-1 items-end">

                                            <a className="btn w-9 h-9 mb-[2.5rem] flex justify-center items-center" href={`${service.link}`}>
                                                <ArrowUpRight size={24} />
                                            </a>
                                            <a href={`${service.link}`} className='text-gradient text-sm'> Mais </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}