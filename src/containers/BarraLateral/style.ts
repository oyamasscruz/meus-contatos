import styled from 'styled-components'

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
  background-color: rgba(93, 119, 89, 0.6);
  cursor: pointer;
  border-radius: 6px;
`
export const CardFamilia = styled.div`
  background-color: rgba(59, 39, 84, 0.7);
  padding: 16px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 6px;
`
export const CardTrabalho = styled.div`
  padding: 16px;
  background-color: rgba(114, 137, 184, 0.8);
  border: 2px solid white;
  cursor: pointer;
  border-radius: 6px;
`
export const NomeContato = styled.h3`
  background-color: transparent;
`
export default Container
