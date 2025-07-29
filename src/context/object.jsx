import React, { createContext, useState } from "react";

const ObjectContext = createContext();

const ObjectProvider = ({children}) => {

    const [extensions, setExtensions] = useState(

        [{
            id:1,
            logo: "/assets/images/logo-devlens.svg",
            name: "Dev Lens",
            description: "Quickly inspect page layouts and visualize element boundaries.",
            isActive: false
        },
        {
            id:2,
            logo: "/assets/images/logo-style-spy.svg",
            name: "Style Spy",
            description: "Instantly analyze and copy CSS from any webpage element.",
            isActive: false
        },
        {
            id:3,
            logo: "/assets/images/logo-speed-boost.svg",
            name: "Speed Boost",
            description: "Optimizes browser resource usage to accelerate page loading.",
            isActive: false
        },
        {
            id:4,
            logo: "/assets/images/logo-json-wizard.svg",
            name: "JSON Wizard",
            description: "Formats, validates, and prettifies JSON responses in-browser.",
            isActive: false
        },
        {
            id:5,
            logo: "/assets/images/logo-tab-master-pro.svg",
            name: "TabMaster Pro",
            description: "Organizes browser tabs into groups and sessions.",
            isActive: false
        },
        {
            id:6,
            logo: "/assets/images/logo-viewport-buddy.svg",
            name: "Viewport Buddy",
            description: "Simulates various screen resolutions directly within the browser.",
            isActive: false
        },
        {
            id:7,
            logo: "/assets/images/logo-markup-notes.svg",
            name: "Markup Notes",
            description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
            isActive: false
        },
        {
            id:8,
            logo: "/assets/images/logo-grid-guides.svg",
            name: "Grid Guides",
            description: "Overlay customizable grids and alignment guides on any webpage.",
            isActive: false
        },
        {
            id:9,
            logo: "/assets/images/logo-palette-picker.svg",
            name: "Palette Picker",
            description: "Instantly extracts color palettes from any webpage.",
            isActive: false
        },
        {
        
            id:11,
            logo: "/assets/images/logo-link-checker.svg",
            name: "Link Checker",
            description: "Scans and highlights broken links on any page.",
            isActive: false
        },
        {
            id:12,
            logo: "/assets/images/logo-dom-snapshot.svg",
            name: "DOM Snapshot",
            description: "Capture and export DOM structures quickly.",
            isActive: false
        },
        {
            id:13,
            logo: "/assets/images/logo-console-plus.svg",
            name: "Console Plus",
            description: "Enhanced developer console with advanced filtering and logging.",
            isActive: false
        }]
    )
    return (
    <ObjectContext.Provider value={{extensions, setExtensions}}>
        {children}
    </ObjectContext.Provider>
    )
}

export {ObjectContext, ObjectProvider}