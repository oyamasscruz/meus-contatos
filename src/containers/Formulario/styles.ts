import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Section = styled.div`
  padding: 0 80px;
  margin-top: 100px;
`

export const Titulo = styled.h2``

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
`

export const Botao = styled.button`
  border-radius: 8px;
  padding: 10px;
  border: 4px solid ${variaveis.corTrabalho};
  font-weight: bold;
  &:hover {
    background-color: ${variaveis.corTrabalho};
    color: #fff;
    transition: ease-in-out 0.6s;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Nome = styled.input`
  border-radius: 8px;
  border: 2px solid #fff;
  padding: 8px;
  margin-bottom: 20px;
`

export const Telefone = styled(Nome)``
export const Email = styled(Nome)``
