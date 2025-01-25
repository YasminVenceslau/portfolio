import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      Explorando o mundo do código, uma linha por vez. Aprendendo e crescendo
      como desenvolvedora. Dando meus primeiros passos no mundo do
      desenvolvimento, com interesse especial em Python e tecnologias Front-end.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=YasminVenceslau&show_icons=true&theme=radical" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=YasminVenceslau&layout=compact&theme=radical" />
    </GithubSecao>
  </section>
)

export default Sobre
