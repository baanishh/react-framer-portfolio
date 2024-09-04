import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { LINKS } from "../constants"
import { AnimatePresence,motion, animate } from "framer-motion"

const Navbar = () => {

    const [isOpen,setIsOpen]=useState(false)
    
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    useState(()=>{
        if(isOpen){
            document.body.style.overflow="hidden";
        }else{
            document.body.style.overflow="auto";
        }
    },[isOpen])

    const containerVariants={
        hidden:{opacity:0, y:"-100%"},
        visible:{opacity:1, y: 0,
            transition:{
                staggerChildren:0.1
            }
        }
    }

    const linkVariants={
        hidden:{opacity:0, y:-50},
        visible:{opacity:1, y: 0}
        }
    


  return (
   <>
        <nav className="fixed top-0 right-0 z-30 p-4 ">
            <button onClick={toggle} className="rounded-md p-2">
                {isOpen ? (
                    <FaTimes className="h-6 w-6" />
                ):(
                    <FaBars className="h-6 w-6" />
                ) }
            </button>
        </nav>

        <AnimatePresence>

       
        {isOpen && (
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
            className="text-white fixed inset-0 flex flex-col items-center justify-center bg-black z-20">
                <ul className="text-3xl space-y-6">
                    {LINKS.map((item,)=>(
                        <motion.li 
                        variants={linkVariants}
                        key={item.id}>
                            <a href={`#${item.id}`} onClick={toggle} className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl text-white" >{item.name}</a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}

         </AnimatePresence>
   </>
  )
}

export default Navbar
