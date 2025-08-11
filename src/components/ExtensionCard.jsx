import React, { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from '../context/theme'
import { ObjectContext } from '../context/object'

const ExtensionCard = ({logo, name, description, id, isActive}) => {

    // global reuseable state for them and extensions
    const {theme} = useContext(ThemeContext)
    const {extensions, setExtensions} = useContext(ObjectContext)

    // function to toggle extension active state
    const handleActive = () => {
        const updated = extensions.map((extension) =>
            id === extension.id
              ? { ...extension, isActive: !extension.isActive }
              : extension
          );
          setExtensions(updated);
    }

    // function to remove extension
    const remove = () => {
        const removeupdated = extensions.filter((extension) => extension.id !== id);
        setExtensions(removeupdated);
    }

  return (
    <div className={theme ? 'border-2 border-indigo-950/40 bg-white/20 rounded-2xl p-4 shadow-md grid gap-8' : ' border-2 border-white/40 bg-white/20 rounded-2xl p-4 shadow-md grid gap-8' }>
        <div className='flex space-x-3'>
            <img src={logo}  alt="image" className='h-15 w-15 ' />
            {/*  */}
            <section className='flex flex-col space-y-1'>
                <p className='text-xl font-semibold '>
                {name}
                </p>
                <p className='text-sm '>
                {description}
                </p>
            </section>
        </div>

        {/*card lower design */}
        <div className='flex justify-between items-center'>

            <Button text={"Remove"} onClick={remove} className={theme ? 'border-2 border-indigo-950/40' : 'border-2 border-white/40' }/>

            {/* Toggle Button for Active/Inactive */}
            <div className={ theme ? (isActive ? 'bg-red-400 h-5 w-11 rounded-3xl flex items-center cursor-pointer transition-all duration-100 ease-linear border-2 border-indigo-950/40 ' : 'bg-white/30 h-5 w-11 rounded-3xl flex items-center cursor-pointer border-2 border-indigo-950/40 ') : ( (isActive ? 'bg-red-400 h-5 w-11 rounded-3xl flex items-center cursor-pointer transition-all duration-100 ease-linear ' : 'bg-white/30 h-5 w-11 rounded-3xl flex items-center cursor-pointer '))} onClick={handleActive}>
                <div className={isActive ? 'h-4.5 w-4.5 rounded-full bg-neutral-400  translate-x-6.5 transition-all duration-100 ease-linear ' : 'h-4.5 w-4.5 rounded-full bg-neutral-400 transition-all duration-100 ease-linear'} ></div>
            </div>
        </div>
    </div>
  )
}

export default ExtensionCard