import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../Reducer/ProductSlice';
import { addCart } from '../Reducer/ProductSlice';


const Product = () => {
  const { productData, loading, error } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // console.log(productData);
  // console.log(loading + '  ' + error)

  return (
    <>
      <div className="container">

        {
          (loading && productData!==undefined && !productData.length) && <h3>Loading...</h3>
        }

        <div className="row">

          {
            productData!==undefined && productData.map((item) =>
              <div className="card-group col-md-3 mt-2 p-2" key={item.id}>
                <div className="card">
                  <img className="card-img-top p-4" style={{ height: '250px' }} src={item.image} alt="Card image cap" />
                  <div className="card-body" style={{ backgroundColor: '#F4D4F5 ' }}>
                    <h5 className="card-title text-primary">{item.title}</h5>
                    {/* <p className="card-text">{item.description}</p> */}
                    <p className="card-text"><strong>category: </strong>{item.category}</p>
                    <p className="card-text"><strong>Price: </strong>{item.price}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-center">
                    <button className='btn btn-primary'
                      onClick={() => { dispatch(addCart(item)) }}>add to cart</button>
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Product;
