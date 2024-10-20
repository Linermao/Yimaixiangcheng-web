import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const styleButton = {
  width: '90px',
  color: 'black'
}

const Navbar = () =>{
  return (
    <AppBar position="static">
      <Toolbar sx={{ background: "white" }}>
        <IconButton sx={{ flexGrow: 1, justifyContent: 'flex-start'}}>
          <img src={logo} alt="logo" style={{ width: '40%', height: 'auto'}} />
        </IconButton>
        <Stack direction='row'>
          <Link to="/">
            <Button color="inherit" sx={styleButton}>新闻资讯</Button>
          </Link>
          <Link to="/second">
            <Button color="inherit" sx={styleButton}>立体网展</Button>
          </Link>
          <Link to="/VirtualPavillion">
            <Button color="inherit" sx={styleButton}>虚拟展馆</Button>
          </Link>
          <Button color="inherit" sx={styleButton}>旅游板块</Button>
          <Button color="inherit" sx={styleButton}>政府合作</Button>
          <Button color="inherit" sx={styleButton}>课程教育</Button>
          <Button color="inherit" sx={styleButton}>对外窗口</Button>
          <Button color="inherit" sx={styleButton}>数据展现</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar