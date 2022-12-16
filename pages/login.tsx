
import GuestLayout from '../assets/Layout/GuestLayout';
import * as S from '../assets/Styles/Login'
import React, { useState } from 'react';
import { ReactNode } from 'react';
import Input from '../assets/Componets/Inputs/Input';
import {  faLock, faArrowRight, faEnvelope} from '@fortawesome/pro-thin-svg-icons';
import ButtonSubmit from '../assets/Componets/Buttons/ButtonSubmit';
import Header from '../assets/Layout/GuestLayout/Componets/Header';



export default function Login() {
  const [login,setLogin] = useState({ 
    email: "",
    password: '',
  })

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const value = e.target.value;
    const key = e.target.id
    setLogin((date) => ({
        ...date,
        
        [key]: value,
      }))      
  }
  const handleOnLogin = () => {
    null
  }
  
  return (
  <S.Container>
    <Header Title='Realize seu login' SubTitle='Sua alta performance te aguarda no lado da produtividade'/>
    <section>
        <Input Placeholder='E-mail' Icon={faEnvelope} Type={'email'} onChange={handleOnChange } Id={'email'} Value={login.email}/>
        <Input Placeholder='Senha' Icon={faLock} Type={'password'} onChange={handleOnChange } Id={'password'} Value={login.password}/>
        <ButtonSubmit Text='Entrar' Icon={faArrowRight} onClick={handleOnLogin}/>

        <S.Link>
            <span>Não tem uma conta? <a href="./register/creaAccont">CADASTRE-SE AQUI</a></span>
            <a href="./register/newPassword">PRECISO DE UMA NOVA SENHA</a>
        </S.Link>
    </section>
    

  </S.Container> 
  )
}
Login.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
