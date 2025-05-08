import * as enums from '../utils/enums/Contato'

class Contato {
  id: number
  nome: string
  telefone: number
  email: string
  tipo: enums.Tipo

  constructor(
    id: number,
    nome: string,
    telefone: number,
    email: string,
    tipo: enums.Tipo
  ) {
    this.id = id
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.tipo = tipo
  }
}

export default Contato
