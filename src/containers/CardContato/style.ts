import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
  background-color: #000;
  padding: 8px;
  align-items: center;
`
export const Botoes = styled.div`
  margin-top: 16px;
  padding: 8px;
  margin-bottom: 16px;
`

export const BotaoEditar = styled.button`
  border-radius: 4px;
  margin-right: 16px;
  left: 0;
`

export const BotaoSalvar = styled.button`
  border-radius: 4px;
`

export const Nome = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding: 8px;
  border-radius: 8px;
`

export const Numero = styled.div`
  margin-top: 16px;
  font-weight: light;
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
`
export const Email = styled.div`
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
`
export const Form = styled.form`
  border-radius: 8px;
  margin-top: 16px;
  padding: 8px;
`
export default Container
