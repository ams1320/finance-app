import {styled,Box} from "@mui/system";

const DashboardBox =styled(Box)(({theme})=>({
   backgroundColor :theme.palette.background.light,
   borderRadius:"1rem",
   boxShadow : ".15rem .2rem .15rem .1rem rgba(0 , 0 , 0, .8)"
}))

export default DashboardBox;