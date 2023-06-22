import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./flexBetween";

type Prop={
    icon ?: React.ReactNode;
    title : string;
    subtitle ?: string;
    sideText : string
}

const BoxHeader=({icon,title,subtitle,sideText}:Prop)=>{
    const {palette}=useTheme()
    
    return(
        <FlexBetween
         color={palette.grey[400]}
         margin="1.5rem 1rem 0rem 1rem"
         >
            {icon}
            <FlexBetween>
                <Box width="100%">
                    <Typography variant="h4" mb="-.1ren">
                        {title}
                    </Typography>
                    <Typography variant="h6">{subtitle}</Typography>
                </Box>
            </FlexBetween>
            <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>{sideText}</Typography>
        </FlexBetween>
    )
}

export default BoxHeader;