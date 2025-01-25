import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Lado = styled.div`
  text-align: center;
`
export const Descricao = styled(P)`
  margin-top: 5px;
  margin-bottom: 20px;
`

export const BotaoTema = styled.button`
  background-color: #0c2461;
  border-color: #0c2461;
  color: aliceblue;
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
