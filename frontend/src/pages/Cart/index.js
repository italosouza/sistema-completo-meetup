import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'

import { Container, ProductTable, Total } from './styles'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/06/D12-9119-006/D12-9119-006_detalhe2.jpg?resize=326:*'
                alt='Tenis'
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color='#7159c1' />
                </button>
                <input type='number' readOnly value={2} />
                <button type='button'>
                  <MdAddCircleOutline size={20} color='#7159c1' />
                </button>
              </div>
            </td>
            <td>
              <strong>R$258,00</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color='#7159c1' />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1985,25</strong>
        </Total>
      </footer>
    </Container>
  )
}
