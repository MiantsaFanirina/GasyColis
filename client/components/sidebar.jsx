"use client"
import React, { useState, createContext, useContext} from "react"
import {
    ChevronFirst,
    ChevronLast, 
    LogOut, 
} from "lucide-react"

const NavbarContext = createContext()


export function Sidebar({children}) {
    const [expanded, setExpanded] = useState(false)

    return (
        <aside className="h-screen z-50 fixed top-0 left-0 w-fit">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <div className={`logo flex items-center overflow-hidden transition-all ${expanded ? 'w-42' : 'w-0'}`}>
                        <img src="/img/logo.png" className="w-10" alt="logo" />
                        <h1 className="p-1.5 text-xl font-bold">GasyColis</h1>
                    </div>
                    <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded ? <ChevronFirst/> : <ChevronLast/>}
                    </button>
                </div>
                <NavbarContext.Provider value={{expanded}}>
                    <ul className="flex-1 px-3">
                        {children}
                    </ul>
                </NavbarContext.Provider>
                <div className="border-t flex p-3 w-full">
                    <img 
                        src="/img/profile-male.svg"
                        className="w-14 h-14 rounded-md" 
                        alt="profile picture" 
                    />
                    <div className={`
                        flex justify-center items-center
                        overflow-hidden transition-all ${expanded ? 'w-full ml-6' : 'w-0'}
                    `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold text-sm">
                                Miantsa Fanirina
                            </h4>
                            <span className="text-sm text-gray-600">
                                MiantsaFanirinaRakotondrafara@gmail.com
                            </span>
                        </div>
                        <LogOut size={20} className="ml-6"/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, text, active, alert}) {
    const {expanded} = useContext(NavbarContext)
    return (
      <li className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active 
            ? "bg-gradient-to-tr from-rose-200 to-rose-100 text-pink-500" 
            : "hover:bg-rose-300"}
        }
      `}>
        {icon}
        <span className={`overflow-hidden text-base transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-pink-500 ${expanded ? "" : "top-2"}`}>{alert}</div>
        )}
        {!expanded && <div className={`
            absolute left-full rounded-md
            ml-6 px-2 py-1
            bg-white text-rose-400 text-base
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}>{text}</div>}
      </li>
    )
  }
  