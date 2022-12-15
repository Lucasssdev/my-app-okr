
import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/NewPassword'
import React, { useState } from 'react';
import { ReactNode } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import Header from '../../assets/Layout/GuestLayout/Componets/Header';



export default function NewPassword() {

  const [message,setmessage] = useState<boolean>(false)
  
  const handleNewPassword = () => {
    setmessage(true)
  }

  return (
  <S.Container>
    {
      !message 
      ?
      <>
        <Header Title='Criar nova senha' SubTitle='Você não está perdido nessa, vamos ter ajudar a criar uma nova senha de acesso'/>
        <section>
            <Input Placeholder='E-mail' Icon={faBookmark}/>
            <ButtonSubmit Text='SOLICITAR NOVA SENHA' Icon={faBookmark} onClick={handleNewPassword}/>

            <S.Link>
                <span>LEMOBROU QUAL É A SENHA? <a href="../login">CLIQUE AQUI</a></span>
            </S.Link>
        </section>
      </>
        :
        <S.Message>
            <Header Title='ATENÇÃO!' SubTitle={`Agora Lucas, você precisa acessar o seu e-mail e clicar no botão de “CRAIR NOVA SENHA” para prosseguir com sua solicitação.`}/>
        </S.Message>
    }
  </S.Container> 
  )
}
NewPassword.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
