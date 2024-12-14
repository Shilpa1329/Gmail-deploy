// import { Drawer, styled } from "@mui/material";
// import SideBarContent from "./SideBarContent";
// import { SideBar_Data } from "./SideBarContent";


// const Sidebar = ({ openDrawer }) => {
//     return (
//         <Drawer
//             anchor='left'
//             open={ openDrawer }
//             hideBackdrop={true}
//             ModalProps={{
//                 keepMounted: true
//             }}
//             variant="persistent"
//             sx={{
//                 '& .MuiDrawer-paper': {
//                     marginTop: '64px',
//                     width: 250,
//                     background: '#F5F5F5',
//                     borderRight: 'none',
//                     height: 'calc(100vh -64px)'

//                 }
//             }}
//         >
//          <SideBarContent/>
            
//         </Drawer>
//     )
// }

// export default Sidebar;


import { Drawer, keyframes} from "@mui/material";
import SideBarContent from "./SideBarContent";


const Sidebar = ({ openDrawer }) => {
    console.log("Sidebar rendered with:", openDrawer); // Debugging log

    return (
        <Drawer
            anchor='left'
            open={openDrawer} // Ensure openDrawer is used correctly
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}
            variant="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop: '64px',
                    width: 250,
                    background: '#F5F5F5',
                    borderRight: 'none',
                    height: 'calc(100vh - 64px)'
                }
            }}
        >
            <SideBarContent />
        </Drawer>
    );
    
};

export default Sidebar;





