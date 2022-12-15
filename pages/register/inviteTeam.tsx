
import GuestLayout from '../../assets/Layout/GuestLayout';
import * as S from '../../assets/Styles/InviteTeam'
import React, { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import Input from '../../assets/Componets/Inputs/Input';
import { faBookmark, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import ButtonSubmit from '../../assets/Componets/Buttons/ButtonSubmit';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from '../../assets/Layout/GuestLayout/Componets/Header';
import { Control, useFieldArray } from 'react-hook-form';
import { render } from 'react-dom';


export default function InviteTeam() {
    const input = <Input Placeholder={'E-mail do seu colega de trabalho'} Icon={faBookmark}/>
    const [field,setField] = useState([input,input])
  
   
    
    const newField = () => {
        const newArray = [...field]
        newArray.unshift(input) 
        setField(newArray)

    }
    
    
    const handleInviteTeam = () => {
        null
    }
  
  return (
  <S.Container>
    <Header Title='Crie sua conta' SubTitle='Sua alta performance te aguarda no lado da produtividade'/>
    <section>
        <S.DivInput>
        {        
            field.map((input,index) => {
                if( index < 5){
                return input
                }
            })
        } 
        </S.DivInput>
        
        <S.NewField>
            {field.length > 4 ? <></> :<button onClick={newField}><FontAwesomeIcon icon={faPlusCircle} size="3x"/></button>}
        </S.NewField> 
       
        <ButtonSubmit Text='Próximo passo' Icon={faBookmark} onClick={handleInviteTeam}/>

        <S.Link>
            <span>Já tem uma conta? <a href="">CLIQUE AQUI</a></span>
        </S.Link>
    </section>
    

  </S.Container> 
  )
}
InviteTeam.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}
