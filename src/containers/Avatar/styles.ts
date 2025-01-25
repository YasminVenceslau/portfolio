import styled from 'styled-components'

// Declara explicitamente que FotoPerfil aceita `src`
export const FotoPerfil = styled.img<{ src: string }>`
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 14px;
`
