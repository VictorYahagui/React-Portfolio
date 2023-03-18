import { Link } from "react-scroll";

export function Header() {
    return (
        <header className="py-8">
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href="#">
                        <h3 className='text-2xl font-bold font-primary uppercase text-center'><span className='text-gradient'>Victor</span><br /> Yahagui</h3>
                    </a>
                    <Link to="contact">
                        <button className='btn btn-sm'>Fale Comigo</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}