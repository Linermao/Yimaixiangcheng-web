import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fullBack from '../assets/StartPage/fullBack.png'
import block1 from '../assets/StartPage/block1.png'
import block2 from '../assets/StartPage/block2.png'
import block4 from '../assets/StartPage/block4.png'
import block5 from '../assets/StartPage/block5.png'
import block6 from '../assets/StartPage/block6.png'
import block7 from '../assets/StartPage/block7.png'
import block8 from '../assets/StartPage/block8.png'
import block9 from '../assets/StartPage/block9.png'
import block10 from '../assets/StartPage/block10.png'
import block11 from '../assets/StartPage/block11.png'
import { Stack, IconButton } from '@mui/material';


const StartPage = () => {
    return (
        <div>
            <Navbar />
                <img src={fullBack} style={{ width: '100%', height: 'auto', alignItems: 'flex-end' }} />
                <Stack>
                    <Stack sx={{ flexDirection: 'row', padding: '10px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <img src={block1} alt="block1" style={{ width: '60%', height: 'auto' }} />
                        <img src={block4} alt="block4" style={{ width: '35%', height: 'auto' }} />
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', padding: '10px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <img src={block2} alt="block2" style={{ width: '62%', height: 'auto' }} />
                        <img src={block4} alt="block4" style={{ width: '39%', height: 'auto' }} />
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', padding: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
                        <img src={block5} alt="block5" style={{ width: '35%', height: 'auto' }}/>
                        <img src={block6} alt="block6" style={{ width: '51%', height: 'auto' }}/>
                        <img src={block7} alt="block7" style={{ width: '13%', height: 'auto' }}/>
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', padding: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
                        <img src={block8} alt="block8" style={{ width: '33%', height: 'auto' }}/>
                        <img src={block9} alt="block9" style={{ width: '33%', height: 'auto' }}/>
                        <Stack sx={{ flexDirection: 'column', width: '30%', alignItems: 'center', justifyContent: 'space-between' }}>
                            <img src={block10} alt="block10" style={{ width: '90%', height: 'auto' }}/>
                            <img src={block11} alt="block11" style={{ width: '90%', height: 'auto' }}/>
                        </Stack>
                    </Stack>
                </Stack>
            <Footer />
        </div>
    );
};

export default StartPage;