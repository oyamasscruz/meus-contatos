import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const Container = styled.aside`
  margin-top: 16px;
  max-width: 90%;
  width: 100%;
  heigt: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`
export const CardPessoal = styled.div`
  padding: 16px;
  border: 2px solid white;
  background-color: ${variaveis.corPessoal};
  cursor: pointer;
  border-radius: 6px;
`
export const CardFamilia = styled.div`
  background-color: ${variaveis.corFamilia};
  padding: 16px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 6px;
`
export const CardTrabalho = styled.div`
  padding: 16px;
  background-color: ${variaveis.corTrabalho};
  border: 2px solid white;
  cursor: pointer;
  border-radius: 6px;
`
export const NomeContato = styled.h3`
  background-color: transparent;
`
export default Container
