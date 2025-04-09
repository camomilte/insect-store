import { Outlet } from "react-router";
/* Import components */
import Navbar from "../components/Navbar";
/* Import icons */
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiVite } from "react-icons/si";

const Rootlayout = () => {
  return (
    <div className="bg-cream min-h-svh font-poppins text-brown grid grid-rows-[auto_1fr_auto]">
        
        {/* Navbar */}
        <Navbar />
 
        <main>
            <Outlet />
        </main>

        {/* Footer */}
        <div className="bg-brown py-4">
            <div className="wrapper">
                <p className="text-cream text-center">&copy; camomilte {new Date().getFullYear()}</p>
                <div className="flex justify-center gap-3 my-2" >
                    <a href="https://react.dev/">
                        <RiReactjsFill className="text-cream text-3xl"/>
                    </a>
                    <a href="https://vite.dev/">
                        <SiVite className="text-cream text-3xl"/>
                    </a>
                    <a href="https://tailwindcss.com/">
                        <RiTailwindCssFill className="text-cream text-3xl"/>
                    </a>
                    <a href="https://www.mongodb.com/">
                        <BiLogoMongodb className="text-cream text-3xl"/>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
};

export default Rootlayout
