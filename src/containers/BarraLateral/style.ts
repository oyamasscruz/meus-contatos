import styled from 'styled-components'
import * as enums from '../../utils/enums/Contato'
import variaveis from '../../styles/variaveis'

type TagProps = {
  tipo: enums.Tipo
  parametro: 'modo'
}

function mudaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'modo') {
    if (props.tipo === enums.Tipo.FAMILIA) return variaveis.corFamilia
    if (props.tipo === enums.Tipo.PESSOAL) return variaveis.corPessoal
    if (props.tipo === enums.Tipo.TRABALHO) return variaveis.corTrabalho
  }
  return variaveis.preto
}

export const BotaoComCor = styled.button<TagProps>`
  background-color: ${(props) => mudaCorDeFundo(props)};
  cursor: pointer;
`

const Container = styled.aside`
  margin-top: 16px;
  max-width: 90%;
  width: 100%;
  heigt: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`
export default Container
