import {Box ,Typography,useTheme} from "@mui/material"
import FlexBetween from "../flexBetween"
import {useState} from "react"
import {Pix} from "@mui/icons-material"
import { Link } from "react-router-dom"

type Props={}

const Navbar = ({}:Props)=>{
    const {palette} = useTheme()
    const [selected , setSelected] = useState<string>("dashboard")

    return(
        <>
        <FlexBetween mb=".25rem" p=".5rem 5rem" color={palette.grey[300]}>
            <FlexBetween gap=".75rem">
                <Pix sx={{fontSize:28}}/>
                <Typography variant="h4" fontSize="16px">finanseer</Typography>
            </FlexBetween>

            <FlexBetween gap="2rem">
                <Box sx={{":hover":{color:palette.primary[100]}}}>
                    <Link to="/" onClick={()=>setSelected("dashboard")}
                    style={{color:selected === "dashboard" ?"inherit" : palette.grey[700], textDecoration:"inherit"}}>
                        dashboard
                    </Link>
                </Box>
                <Box sx={{":hover":{color:palette.primary[100]}}}>
                    <Link to="/prediction" onClick={()=>setSelected("prediction")}
                    style={{color:selected === "prediction" ?"inherit" : palette.grey[700], textDecoration:"inherit"}}>
                        prediction
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
        </>
    )
}

export default Navbar;