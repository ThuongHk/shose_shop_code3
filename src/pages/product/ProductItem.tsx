import React from 'react'
import { NavLink } from 'react-router-dom'
import { RelatedProduct } from '../../redux/reducer/detailProdSlice'
import { ProductModel } from '../../redux/reducer/productSlice'

type Props = {
  prod?: ProductModel | RelatedProduct
}

function ProductItem({prod}: Props) {
  return (
    <div className='card' style={{width: '300px', height: 'auto'}}>
        <div className='card-head position-relative'>
        <i className="fa fa-heart position-absolute end-0 text-danger mx-2 mt-2 mr-2"></i>
        <img src={prod?.image ? prod?.image : require('../../assets/img/day.png')} alt='123' className='w-100'/>
        </div>
        <div className='card-body'>
            <h3>{prod?.name ? prod.name : 'lorem5 nhj dfgr'}</h3>
            <b>{prod?.shortDescription}</b>
        </div>
        <div className='d-flex'>
            <NavLink className='text-center text-danger text-bold text-decoration-none bg-primary w-100' to={`/${prod?.id}`}><b>Buy now</b></NavLink>
            <b  className='text-center bg-success w-100'>{prod?.price}$</b>
        </div>

    </div>
  )
}

export default ProductItem