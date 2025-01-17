import styled from 'styled-components'
import { PropsWithChildren } from 'react'

type BotaoProps = PropsWithChildren<{
  principal: boolean
  fontSize?: string
}>

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  margin: 5px;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique Aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Clique Aqui
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não Clique Aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
