// IMAGE

import Image from "next/image";
import pic_6 from '../../public/img/6.jpg';

const Pics = () => {

    const picList = [1,2,3,4,5].map((item) =><li key={item}> <Image  src={ `/img/${item}.jpg` } alt='' height={'200'} width={'300'}/></li>)
    
    return (
        <>
            <h1>Pics</h1>
            <Image  src={pic_6} alt='' placeholder="blur"/>
            <ul>
                {picList}
            </ul>
        </>
    )
}


export default Pics;