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

export const Nome = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
`

export const Numero = styled(Nome)`
  font-weight: light;
  font-size: 16px;
`
export const Email = styled(Nome)`
  font-size: 16px;
  font-weight: light;
`
export const Form = styled(Nome)`
  font-size: 16px;
  font-weight: light;
`
export default Container
