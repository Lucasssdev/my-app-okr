
import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/UpdatePassword'
import React from 'react';
import { ReactNode } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import Header from '../../assets/Layout/GuestLayout/Componets/Header';



export default function UpdatePassword() {
  
  
  return (
  <S.Container>
    <Header Title='Criar nova senha' SubTitle='Você não está perdido nessa, vamos ter ajudar a criar uma nova senha de acesso'/>
    <section>
        <Input Placeholder='Nova senha' Icon={faBookmark}/>
        <Input Placeholder='Confirmar nova senha' Icon={faBookmark}/>
        <ButtonSubmit Text='ATUALIZAR SENHA' Icon={faBookmark}/>

        <S.Link>
            <span><a href="">CANCELAR</a></span>
        </S.Link>
    </section>
    
    

  </S.Container> 
  )
}
UpdatePassword.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
