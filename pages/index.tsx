import { useState } from 'react'
import ButtonSubmit from '../assets/Componets/ButtonSubmit'
import Input from '../assets/Componets/Input'
import * as S from '../assets/Styles/Home'
import { faHeart  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


export default function Home() {
  
  console.log(typeof faHeart)
  return (
  <>
    <Input Placeholder='Nome' Icon={faHeart}/> 
    <ButtonSubmit Text={'Enviar'} Icon={faHeart}/>
  </>
  )
}
