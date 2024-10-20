import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material"
import { Button } from "@mui/material"
import logo from '../assets/logo-white.png'
import bilibili from '../assets/icons/bilibili.png'
import wechatVedio from '../assets/icons/wechatVedio.png'
import wechatSmallProgram from '../assets/icons/wechatSmallProgram.png'
import gongan from '../assets/icons/gongan.png'

const Footer = () => {
    return (
        <AppBar position="static">
          <Toolbar sx={{ background: 'rgba(59,59,59,1)' }}>
            <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <Button color="inherit" href="https://www.bilibili.com/">Bilibili</Button>
              <Button color="inherit" href="https://www.Bilibili.com/">小程序</Button>
              <Button color="inherit" href="https://www.Bilibili.com/">视频号</Button>
            </Stack>

            <IconButton>
              <img src={logo} alt="logo" style={{ width: '40%', height: 'auto'}} />
            </IconButton>

            <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <Button color="inherit" href="https://www.bilibili.com/">Bilibili</Button>
              <Button color="inherit" href="https://www.Bilibili.com/">小程序</Button>
              <Button color="inherit" href="https://www.Bilibili.com/">视频号</Button>
            </Stack>
          </Toolbar>

          <Stack direction="row" spacing={5} sx={{ display: "flex", justifyContent: "center", background: 'rgba(59,59,59,1)', padding: '20px'}}>
            <Typography>
                Copyright © 2023 星禾传媒 All Rights Reserved
            </Typography>
            <Typography>
                备案号：浙ICP备9999999号-9
            </Typography>
            <Typography sx={{ display: "flex", direction: 'row', justifyContent: 'center' }}> 
                <img src={gongan} style={{ width: "25px", height: 'auto' }}/>
                浙公网安备：9999999999号
            </Typography>

          </Stack>
        </AppBar>
      )
}

export default Footer