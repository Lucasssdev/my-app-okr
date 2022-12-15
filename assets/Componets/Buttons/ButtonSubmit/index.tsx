import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react';

type Props = {
    Text: string
    Icon: IconProp
    onClick: React.MouseEventHandler<HTMLButtonElement>

}

function ButtonSubmit({Text, Icon, onClick}: Props){
    return(
        <S.Div onClick={onClick}>
            <S.Text>{Text}</S.Text>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}

export default ButtonSubmit;