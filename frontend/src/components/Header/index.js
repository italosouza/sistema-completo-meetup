import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './styles'
import logo from '../../assets/images/logo.svg'

function Header({ cart }) {
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Rocketshoes' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart.length} itens</span>
        </div>
        <MdShoppingBasket size={36} color='#fff' />
      </Cart>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Header)
