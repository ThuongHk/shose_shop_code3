import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callApiProductSlice, ProductModel } from '../../redux/reducer/productSlice';
import { DispatchType, RootState } from '../../redux/store';
import ProductItem from '../product/ProductItem'

type Props = {}

function Home({}: Props) {
 const { arrProduct } = useSelector((state: RootState)=> state.productSlice);

  const dispatch: DispatchType = useDispatch();

  const callApiProductHome = () =>{
     const actionThunk = callApiProductSlice()
     dispatch(actionThunk)
  }

  useEffect(()=>{
    callApiProductHome()
  },[])

  return (
    <div className='container'>
       <h5 className='text-center'>_Shose shop_</h5>
      <div className="row"> 
      {arrProduct.map((prod: ProductModel, index: number)=>{
        return  <div key={index} className="col-4">
        <ProductItem prod={prod}/>
     </div>
      })}      
        
      </div>
    </div>
  )
}

export default Home