import React from 'react'
import './FootPage.css'

export default function FootPage() {
    return (
        <div className='footy'>
            <div className='bubble b1'></div>
            <div className='bubble b2'></div>
            <div className='col onBubble'>
                <div>INFO</div>
                <div>SOPORTE</div>
                <div>REDES SOCIALES</div>
            </div>
            <div className='mark'>
                <p className='text-muted pl-2 text-start'>Copyright 2022 wetolive.com</p>
                
                <li className=''> 
                    <a href="">Terminos y condiciones</a>
                    -
                    <a href="">Politica y privacidad</a>                  
                </li>
                
                
            </div>
        </div>
    )
}
