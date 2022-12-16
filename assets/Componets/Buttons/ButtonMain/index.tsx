import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react';

type Props = {
    Text: string
    Icon: IconProp
}
 
function ButtonMain({Text, Icon}: Props){
    return(
        <S.Div>
           
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
            <S.Text>{Text}</S.Text>
        </S.Div>
    )
}

export default ButtonMain;