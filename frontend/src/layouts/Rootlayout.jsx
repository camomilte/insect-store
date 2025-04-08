import { Outlet } from "react-router";
import { FaGithub } from "react-icons/fa";

const Rootlayout = () => {
  return (
    <div className="bg-cream min-h-svh text-brown grid grid-rows-[auto_1fr_auto]">
        
        {/* Navbar */}
        <div className="h-30 border-b border-b-brown-300">Navbar</div>
        
        <main>
            <Outlet />
        </main>

        {/* Footer */}
        <div className="bg-brown py-4">
            <div className="wrapper">
                <p className="text-cream text-center">&copy; camomilte {new Date().getFullYear()}</p>
                <div>
                    <FaGithub />

                </div>
            </div>
        </div>

    </div>
  )
};

export default Rootlayout
