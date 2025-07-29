import React, { useContext, useState,useEffect } from 'react'
import ExtensionCard from './ExtensionCard'
import { ThemeContext} from '../context/theme'
import Button from './Button'
import { ObjectContext } from '../context/object'

const Extensions = () => {

    const {extensions} = useContext(ObjectContext)
    const {theme} = useContext(ThemeContext) 

    const [filtered, setFiltered] = useState(extensions)
    useEffect(() => {
        setFiltered(extensions)
      }, [extensions])
    
      const handleFilterAll = () => {
        setFiltered(extensions)
      }
    
      const filterActive = () => {
        const active = extensions.filter((extension) => extension.isActive === true)
        setFiltered(active)
      }
    
      const filterInactive = () => {
        const inactive = extensions.filter((extension) => extension.isActive === false)
        setFiltered(inactive)
      }

  return (

    <div>
        <div className='mb-4 flex justify-between flex-wrap gap-3 md:gap-0'>
            <h1 className='text-2xl font-semibold '>Extension List</h1>
            <div className='flex space-x-4'>
                <Button text={"All"} className={theme ?'border-2 border-indigo-950/40' : 'border-2 border-white/40'} onClick={handleFilterAll}/>
                <Button text={"Active"} className={theme ?'border-2 border-indigo-950/40' : 'border-2 border-white/40 '} onClick={filterActive}/>
                <Button text={"Inactive"} className={theme ?'border-2 border-indigo-950/40' : 'border-2 border-white/40 ' } onClick={filterInactive}/>
            </div>
        </div>
        {/*  */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                {filtered.map((extension) => <ExtensionCard key={extension.id} {...extension} /> )}
            </div>
    </div>
  )
}

export default Extensions