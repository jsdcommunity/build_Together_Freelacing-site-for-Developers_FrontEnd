import React from "react";
import { Drawer, Box } from "@mui/material";

const MobileDrawer = ({ isOpen, closeFunc, children }) => {
   return (
      <>
         <Drawer anchor="bottom" open={isOpen} onClose={closeFunc}>
            <Box
               sx={{
                  p: 1,
                  ml: -1,
                  boxSizing: "border-box",
               }}
            >
               {children}
            </Box>
         </Drawer>
      </>
   );
};

export default MobileDrawer;
