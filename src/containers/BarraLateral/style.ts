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
  padding: 20px;
  cursor: pointer;
  width: 80%;
  font-weight: bold;
  font-size: 24px;
  height: 100%;
  border-radius: 16px;
  border: 1px solid #fff;

  &:hover {
    box-shadow: 0 2px 8px;
  }
`

const Container = styled.aside`
  z-index: 1;
  position: relative;
  margin-top: 16px;
  max-width: 90%;
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`
export default Container
