import React from 'react'
import { BotaoTema, Descricao, Lado, SidebarContainer } from './styles'
import Avatar from '../Avatar'
import Titulo from '../../components/Titulo'

type Props = {
  trocaTema: () => void
}

const Sidebar: React.FC<Props> = (props) => (
  <Lado>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={14}>Yasmin Venceslau</Titulo>

      <a
        href="https://github.com/YasminVenceslau"
        target="_blank"
        rel="noopener noreferrer"
      >
        yasminvenceslau
      </a>

      <Descricao tipo="principal" fontSize={12}>
        Engenheira Full Stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </Lado>
)

export default Sidebar
