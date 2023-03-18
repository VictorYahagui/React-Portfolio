//motion
import { motion } from 'framer-motion'
import { FormEvent } from 'react';
//variants
import { fadeIn } from '../variants'


export function Contact() {
    function handleInviteEmail(event: FormEvent) {
        event.preventDefault();
    }
    return (
        <div className="py-16 lg:section" id="contact">
            <div className="container mx-auto">
                <div className='flex flex-col gap-12 lg:flex-row lg:gap-0'>
                    {/* Texto */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        className='flex-1 flex justify-center items-center'>
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Contato</h4>
                            <h2 className='text-[2.8125rem] lg:text-[5.5rem] leading-none mb-12'>Vamos trabalhar
                                <br />
                                juntos!
                            </h2>
                            <div className='w-auto lg:w-3/4 rounded-2xl bg-black/50 p-5 '>
                                <h5>
                                    Numero de contato: (34) 99984-3382
                                </h5>
                                <h5>
                                    E-mai: victoryahagui@gmail.com
                                </h5>
                                <span>
                                    <a href="https://www.linkedin.com/in/victoryahagui/" className='text-xl text-accent'> LinkedIn </a>
                                    Caso queira saber mais
                                </span>
                            </div>
                        </div>
                    </motion.div>
                    {/*Form*/}
                    <motion.form
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                        onSubmit={handleInviteEmail}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-6 p-6'>


                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            placeholder='Nome'
                            type="text"
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            placeholder='Email'
                            type="text"
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                            placeholder='Sua mensagem'
                        ></textarea>
                        <button className='btn btn-lg' type='submit' >Mande sua mensagem</button>
                        <div className='p-2 rounded-2xl bg-black/50'>
                            <h2 className='text-center font-tertiary uppercase'> <span className='text-accent'>Desculpe</span> <br />
                                ainda não funciona ;-;</h2>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    )
}