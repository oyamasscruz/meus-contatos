import { Tipo } from './style'
import ContatoState from '../../models/Contato'

type Props = ContatoState

const Contato = ({ id, nome, telefone, email, tipo }: Props) => {
  return (
    <div>
      <label htmlFor={nome}>
        <input type="text" value={nome} />
      </label>
      <label>
        <input value={telefone} />
      </label>
      <label htmlFor={email}>
        <input type="text" id={email} value={email} />
      </label>
      <label htmlFor={tipo}>
        <Tipo parametro="modo" tipo={tipo}>
          {tipo}
        </Tipo>
      </label>
    </div>
  )
}

export default Contato
