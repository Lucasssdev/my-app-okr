import React from "react";
import * as S from './styles'

type Props={
    Title:string,
    SubTitle: string
}

export default function Header({Title,SubTitle}: Props){
    return(
        <S.Container>
            <h1>{Title}</h1>
            <span>{SubTitle}</span>
        </S.Container>
    )
}