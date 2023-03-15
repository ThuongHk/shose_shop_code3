import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/store'
import ProductItem from '../product/ProductItem'
import { useParams } from 'react-router-dom'
import { callApiDetailProductSlice, RelatedProduct } from '../../redux/reducer/detailProdSlice'

type Props = {}

function Detail({}: Props) {
   
 const params = useParams() 
 const id: string | undefined = params.id
 

 const dispatch: DispatchType = useDispatch(); 
 const callApiProductDetail = ()=>{
  const actionThunk = callApiDetailProductSlice(id as string)
  dispatch(actionThunk)
 }

  useEffect(()=>{
    callApiProductDetail()
  },[id])

  const { detailProduct} = useSelector((state: RootState)=> state.detailProdSlice)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <img src={detailProduct?.image} alt={detailProduct?.image}/>
        </div>
        <div className='col-8'>
          <h4>{detailProduct?.name}</h4>
          <b>{detailProduct?.shortDescription}</b>
        </div>
      </div>
      <div className='row'>
        {detailProduct?.relatedProducts.map((prod: RelatedProduct, index: number)=>{
          return (
            <div key={index} className='col-4'>
            <ProductItem prod={prod}/>
          </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Detail