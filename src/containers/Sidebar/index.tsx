import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../Avatar'
import { BotaoTema, Descricao, Lado, SidebarContainer } from './styles'

const Sidebar = () => (
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
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </Lado>
)

export default Sidebar
