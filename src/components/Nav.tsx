import { Briefcase, ChatCenteredText, HouseLine, NewspaperClipping, User } from "phosphor-react";
import { Link } from "react-scroll";

export function Nav() {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[6rem] backdrop-blur-2xl rounded-full max-w-[29rem] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
                    <Link
                        to="home"
                        smooth={true}
                        spy={true}
                        activeClass="active"
                        offset={-150}
                        className="cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center">
                        <HouseLine size={24} />
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        spy={true}
                        activeClass="active"
                        className="cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center">
                        <User size={24} />
                    </Link>
                    <Link
                        to="services"
                        smooth={true}
                        spy={true}
                        activeClass="active"
                        className="cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center">
                        <NewspaperClipping size={24} />
                    </Link>
                    <Link
                        to="work"
                        smooth={true}
                        spy={true}
                        activeClass="active"
                        className="cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center">
                        <Briefcase size={24} />
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        spy={true}
                        activeClass="active"
                        className="cursor-pointer w-[4rem] h-[4rem] flex justify-center items-center">
                        <ChatCenteredText size={24} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}