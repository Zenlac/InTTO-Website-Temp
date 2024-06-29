import React from 'react'
import UC from './images/UC logo.png'
import QBO from './images/QBO Logo 2.png'
import DICT from './images/DICT-Logo-icon_only 2.png'
import DOST from './images/DOST_CMYKB 2.png'
import GDG from './images/GDG 1.png'
import HERIT from './images/HERIT-removebg-preview 2.png'
import hult from './images/hultPrize 1.png'
import usaid from './images/usaid3327-removebg-preview 1.png'
import DTI from './images/DTI_Logo_2019 1.png'

const PartnerSlides = () => {
  return (
    <div className='overflow-x-auto h-auto w-full scroll'>
        <ul className='flex whitespace-nowrap py-2 inset-0 z-10'>
            <li><img src={UC}     className='inline-block mx-2' alt='UC logo' /></li>
            <li><img src={QBO}    className='inline-block mx-2' alt='QBO logo' /></li>
            <li><img src={DOST}   className='inline-block mx-2' alt='DOST logo' /></li>
            <li><img src={HERIT}  className='inline-block mx-2' alt='HERIT logo' /></li>
            <li><img src={usaid}  className='inline-block mx-2' alt='usaid logo' /></li>
            <li><img src={DICT}   className='inline-block mx-2' alt='DICT logo' /></li>
            <li><img src={hult}   className='inline-block mx-2' alt='hult logo' /></li>
            <li><img src={DTI}    className='inline-block mx-2' alt='DTI logo' /></li>
            <li><img src={GDG}    className='inline-block mx-2' alt='GDG logo' /></li>
        </ul>
    </div>
  )
}

export default PartnerSlides