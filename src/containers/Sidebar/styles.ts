import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Lado = styled.div`
  text-align: center;
`
export const Descricao = styled(P)`
  margin-top: 5px;
  margin-bottom: 20px;
`

export const BotaoTema = styled.button.attrs({
  type: 'button'
})`
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corDeFundo};
  border-radius: 12px;
  padding: 8px 16px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.corSecundaria};
    color: ${(props) => props.theme.corTextoSecundario};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.corFoco};
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
