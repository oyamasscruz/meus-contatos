import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatoState = {
  itens: Contato[]
  contatoSelecionado: number | null
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Danielle Cantidio',
      telefone: 62992113288,
      email: 'oyamasscruz@gmail.com',
      tipo: enums.Tipo.FAMILIA
    },
    {
      id: 2,
      nome: 'Azélia Soares',
      telefone: 62992113200,
      email: 'azelia@gmail.com',
      tipo: enums.Tipo.FAMILIA
    },
    {
      id: 3,
      nome: 'George Bruno',
      telefone: 62992112222,
      email: 'george@gmail.com',
      tipo: enums.Tipo.TRABALHO
    },
    {
      id: 4,
      nome: 'Lucas Bernardo',
      telefone: 62982132222,
      email: 'george@gmail.com',
      tipo: enums.Tipo.PESSOAL
    },
    {
      id: 5,
      nome: 'Murilo Nico',
      telefone: 62982132222,
      email: 'george@gmail.com',
      tipo: enums.Tipo.PESSOAL
    },
    {
      id: 6,
      nome: 'Priscilla Nico',
      telefone: 62982132222,
      email: 'george@gmail.com',
      tipo: enums.Tipo.TRABALHO
    }
  ],
  contatoSelecionado: null
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    selecionarContato: (state, action: PayloadAction<number>) => {
      state.contatoSelecionado = action.payload
    },
    limparContatoSelecionado: (state) => {
      state.contatoSelecionado = null
    }
  }
})
export const { editar, selecionarContato, limparContatoSelecionado } =
  contatoSlice.actions
export default contatoSlice.reducer
