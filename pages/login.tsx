
import GuestLayout from '../assets/Layout/GuestLayout';
import * as S from '../assets/Styles/Login'
import React from 'react';
import { ReactNode } from 'react';
import Input from '../assets/Componets/Inputs/Input';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import ButtonSubmit from '../assets/Componets/Buttons/ButtonSubmit';
import Header from '../assets/Layout/GuestLayout/Componets/Header';



export default function Home() {
  
  
  return (
  <S.Container>
    <Header Title='Realize seu login' SubTitle='Sua alta performance te aguarda no lado da produtividade'/>
    <section>
        <Input Placeholder='E-mail' Icon={faBookmark}/>
        <Input Placeholder='Senha' Icon={faBookmark}/>
        <ButtonSubmit Text='Entrar' Icon={faBookmark}/>

        <S.Link>
            <span>Não tem uma conta? <a href="">CADASTRE-SE AQUI</a></span>
            <a href="">PRECISO DE UMA NOVA SENHA</a>
        </S.Link>
    </section>
    

  </S.Container> 
  )
}
Home.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
