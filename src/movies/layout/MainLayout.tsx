import { FC, ReactNode } from "react";
import { Header } from "../components"
import { Box } from "@mui/material";
export {MainLayout}; 


interface Props{
  children : ReactNode
}


const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header>
      </Header>
      <Box sx={{ 
        padding: '68px 1rem 1rem 1rem',
        backgroundColor: '#707070'
      }}>
      {children}
      </Box>


    {/* Diferentes componentes */}
      {/* Footer */}
    </div>
  )
}

export default MainLayout
