import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react';

type Props = {
    Placeholder: string
    Icon: IconProp
    Type: string
    onChange : React.ChangeEventHandler<HTMLInputElement>
    Id: string
    Value: string
}

function Input({Placeholder, Icon, Type, onChange, Id, Value}: Props){
    return(
        <S.Div>
            <S.Input placeholder={Placeholder} type={Type} onChange={onChange} value={Value} id={Id}/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}

export default Input;