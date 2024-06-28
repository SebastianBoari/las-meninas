import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import Crown from '../Partials/Ornaments/OrnamentCrown'
import FooterLeft from '../Partials/Ornaments/OrnamentFooterLeft'
import FooterRight from '../Partials/Ornaments/OrnamentFooterRight'

let tabs = [
  { id: 'home', label: 'Inicio', href: '/' },
  { id: 'products', label: 'Productos', href: '/productos' },
  { id: 'contact', label: 'Contacto', href: '/contacto' },
]

const Navbar = () => {
  const location = useLocation()
  let [activeTab, setActiveTab] = useState(tabs[0].id)

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === location.pathname)
    if (currentTab) {
      setActiveTab(currentTab.id)
    } else {
      setActiveTab(null)
    }
  }, [location.pathname])

  return (
    <div className="flex items-center justify-center w-full gap-4 spxs:mt-8 splg:mt-16">
      <div className="flex p-1 space-x-1 rounded-full bg-militar drop-shadow-lg w-fit">
        {tabs.map((tab) => (
          <NavLink
            to={tab.href}
            key={tab.id}
            className={
              'relative spsm:px-8 py-1 spsm:text-sm font-medium text-white transition spxs:px-4 spxs:text-xs'
            }
          >
            {/* Placeholder of ornament */}
            <div
              className={`${activeTab === tab.id ? 'hidden' : 'flex items-center justify-center relative z-10'}`}
            >
              <Crown width={'14px'} height={'9px'} />
            </div>

            {activeTab === tab.id && (
              <>
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 z-10 rounded-full bg-blackened drop-shadow-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />

                <motion.div
                  className="relative inset-0 z-10 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Crown width={'14px'} height={'9px'} color={'#FCEFBB'} />
                </motion.div>

                <span className="relative z-10 text-base font-normal font-primary text-vanilla">
                  {tab.label}
                </span>

                <motion.div
                  className="relative inset-0 z-10 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <FooterLeft
                    width={'10px'}
                    height={'10px'}
                    color={'#FCEFBB'}
                  />
                  <FooterRight
                    width={'10px'}
                    height={'10px'}
                    color={'#FCEFBB'}
                  />
                </motion.div>
              </>
            )}
            <span
              className={`${activeTab === tab.id ? 'hidden' : 'font-primary text-base font-normal text-vanilla'}`}
            >
              {tab.label}
            </span>

            {/* Placeholder of ornament */}
            <div
              className={`${activeTab === tab.id ? 'hidden' : 'flex items-center justify-between relative z-10'}`}
            >
              <FooterLeft width={'10px'} height={'10px'} />
              <FooterRight width={'10px'} height={'10px'} />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Navbar
