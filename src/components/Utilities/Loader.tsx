import React, {useEffect} from 'react';
import { useLottie } from "lottie-react";
import animation from '../../assets/lottie/loader-geral.json'

export default function Loader({width= '100px', height ='100px', margin='0 auto'}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation
    };

    const style = {
        width:width,
        height:height ,
        margin:margin
    };

    const { View } = useLottie(defaultOptions,style);
  
    useEffect(() => {
        return () => { 
            // console.log('Desmontou') 
        }
    }, []);

    return (
        <div className='rounded-2 '>{View}</div>
    )

}
