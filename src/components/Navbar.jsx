import {Stack,Typography} from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => {
  return (
    <Stack direction="row" alignitems="center" p={2} sx={{ position:'sticky', background:'#0F0F0F', top:0, justifyContent:'space-between'}}>
      <Link to= "/" style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="youtube logo icon" height={45}/>
        <Typography variant="h4"  sx={{ml:'10px' , color:'#FFF'}}>
        Larotube
        </Typography>
      </Link>
        <SearchBar />
    </Stack>
  )
}

export default Navbar