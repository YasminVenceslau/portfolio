import styled from 'styled-components'

import { Props } from './index'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  color: whitesmoke;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    text-align: center;
    padding-top: 5px;
  }
`
