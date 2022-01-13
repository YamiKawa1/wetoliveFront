import React from 'react'
import './FootPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function FootPage() {
    return (
        <div className='footy text-start'>
            <div className='bubble b1'></div>
            <div className='bubble b2'></div> 
            <div className='mt-4 pt-4 ms-4'><h1 className='title'><FontAwesomeIcon icon={faHouseUser} className='me-2'/>WeToLive</h1></div>
            <div className='row ms-3'>
                <div className='col-md-4 onBubble'>
                    <h4 className='m-4'>Mas de WeToLive</h4>
                    <li className='m-1'><a href="" className='a m-1'>Inmuebles en Venezuela</a></li>  
                    <li className='m-1'><a href="" className='a m-1'>Publicar tu Inmueble</a></li>
                    <li className='m-1'><a href="" className='a m-1'>Ayuda</a></li>
                    <li className='m-1'><a href="" className='a m-1'>Mapa del sitio</a></li>
                    <li className='m-1'><a href="" className='a m-1'>Publicidad</a></li>
                    <li className='m-1'><a href="" className='a m-1'>Noticias</a></li>
                </div>
                <div className='col-md-4 onBubble'>
                    <h4 className='m-4'>Anunciantes</h4>
                    <li className='m-1'><a href="" className='a m-1'>Inmoviliarias</a></li>  
                    <li className='m-1'><a href="" className='a m-1'>Agentes</a></li>
                </div>
                <div className='col-md-4  onBubble'>
                    <h4 className='m-4'>Nuestras redes</h4> 
                    <div className='row m-3'>
                        <h3 className='col-1 me-4'><a href="" className='a'><FontAwesomeIcon icon={faFacebook} className='me-2'/></a></h3>
                        <h3 className='col-1'><a href="" className='a'><FontAwesomeIcon icon={faTwitter} className='me-2'/></a></h3>
                    </div>
                
                </div>
            </div>
            <div className='subfoot'>
                <p className='text-muted'>Copyright 2022 wetolive.com</p>
                
                    <a href="" className='a'>Terminos y condiciones</a>
                    <span>                 -                 </span>
                    <a href="" className='a'>Politica y privacidad</a>                  
            </div>
        </div>
    )
}
