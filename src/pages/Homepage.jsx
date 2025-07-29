import React, { useContext } from 'react'
import Logo from '../assets/images/logo.svg'
import Sun from '../assets/images/icon-sun.svg'
import Moon from '../assets/images/icon-moon.svg'
import Extensions from '../components/Extensions'
import { ThemeContext } from '../context/theme'

const Homepage = () => {

    const {theme, setTheme} = useContext(ThemeContext)

    const handletoggle = () => {
        setTheme(!theme)
    }
    
  return (
    <div className='md:mx-15 '>
        {/*  */}
        <section className='mt-4' >
            <div className='rounded-2xl p-2 px-5  flex justify-between items-center bg-white/50 shadow-md '>
                <img src={Logo} alt="Logo" />
                <div>
                    {theme? (
                        <img src={Moon} alt="sun" onClick={handletoggle} className='cursor-pointer bg-white/40 p-1.5 rounded-md  border-2 border-indigo-950 '/>
                    ):
                    (
                   <img src={Sun} alt="moon" onClick={handletoggle} className='cursor-pointer bg-white/40 p-1.5 rounded-md'/>
                    ) }
                </div>
            </div>
        </section>

        {/*  */}
        <section className='md:mt-14 mt-4 '>
            <Extensions/>
        </section>
    </div>
  )
}

export default Homepage