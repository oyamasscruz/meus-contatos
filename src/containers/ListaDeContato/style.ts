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

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
  background-color: #000;
  padding: 8px;
  align-items: center;
`
export const Linha = styled.li<TagProps>`
  background-color: ${(props) => mudaCorDeFundo(props)};
`

export const Numero = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
  font-weight: light;
  font-size: 16px;
`
export const Email = styled(Numero)`
  font-size: 16px;
  font-weight: light;
`
export const Form = styled(Numero)`
  font-size: 16px;
  font-weight: light;
`
export default Container
