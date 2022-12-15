
import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/CreateAccount'
import React from 'react';
import { ReactNode } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import Header from '../../assets/Layout/GuestLayout/Componets/Header';



export default function CreateAccount() {
  
  
  return (
  <S.Container>
    <Header Title='Crie sua conta' SubTitle='Sua alta performance te aguarda no lado da produtividade'/>
    <section>
        <Input Placeholder='Nome completo' Icon={faBookmark}/>
        <Input Placeholder='Digite seu e-mail' Icon={faBookmark}/>
        <Input Placeholder='Digite seu DDD + Whatsapp ' Icon={faBookmark}/>
        <Input Placeholder='Nome da sua empresa' Icon={faBookmark}/>
        <Input Placeholder='Crie sua senha' Icon={faBookmark}/>
        <Input Placeholder='Confirme sua senha' Icon={faBookmark}/>
        <ButtonSubmit Text='Próximo passo' Icon={faBookmark}/>

        <S.Link>
            <span>Já tem uma conta? <a href="">CLIQUE AQUI</a></span>
        </S.Link>
    </section>
    

  </S.Container> 
  )
}
CreateAccount.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
