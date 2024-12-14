// import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// const Main = ()=>{
//     const [openDrawer, setOpenDrawer] = useState(true);

//     const toggleDrawer = () =>{
//         setOpenDrawer(prevState => !prevState);
//         console.log("state changed")
//     }

//     return (
//     <div>
//         <Header toggleDrawer={toggleDrawer}/>
//         <Sidebar openDrawer={openDrawer}/>

//     </div>
// )
// }

// export default Main;


 

import { useState, Suspense } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";

const Main = () => {
    const [openDrawer, setOpenDrawer] = useState(true);

    const toggle = () => {
        console.log("toggleDrawer function called"); // Debugging log
        setOpenDrawer(prevState =>!prevState);
    };

    console.log("Main component rendered"); // Debug when Main renders

    return (
        <>
            <Header toggle={toggle} />
            <Sidebar openDrawer={openDrawer} />
            <Suspense fallback={<SuspenseLoader />}>
               <Outlet context={{ openDrawer }}/>
            </Suspense>
            
           
        </>
    )
};

export default Main;

