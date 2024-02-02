import { Box } from "@mui/material";
import Header from "../header/header";
import Footer from "../footer/footer";





interface wrapperProps {
    children: JSX.Element | JSX.Element[];
  }

  const Wrapper =(props:wrapperProps)=>{
    const {children} = props
  

  return(
    
       <Box><Header/>{children}<Footer/></Box>
    
  )
  }


  export default Wrapper;