import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'

type Props = {
    Placeholder: string
    Icon: string
}

function Input({Placeholder, Icon}: Props){
    return(
        <S.Div>
            <S.Input placeholder={Placeholder}/>
            <S.Icon>  <FontAwesomeIcon icon={solid('user-secret')} /></S.Icon>
        </S.Div>
    )
}

export default Input;