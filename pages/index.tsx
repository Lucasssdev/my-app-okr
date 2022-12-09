import { useState } from 'react'
import ButtonSubmit from '../assets/Componets/ButtonSubmit'
import Input from '../assets/Componets/Input'
import * as S from '../assets/Styles/Home'

export default function Home() {
  const [i,setI] = useState('')
  return (
  <>
    <Input Placeholder='Nome' Icon='m'/> 
    <ButtonSubmit/>
  </>
  )
}
