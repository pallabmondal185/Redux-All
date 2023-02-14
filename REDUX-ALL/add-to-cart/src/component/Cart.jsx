import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../Reducer/ProductSlice';

const Cart = () => {

  const { cartData } = useSelector(state => state.product);
  const dispatch = useDispatch();

  console.log(cartData);

  return (
    <>
      {!cartData.length && <center><h3>There is no item in the Cart</h3></center>}

      {
        cartData.map(item =>
          <div className="container" key={item.id}>
            <div className="card mt-3">
              <div className="row">
                <center className="col-md-2 ">
                  <img className="card-img-top p-4" style={{ height: '150px', width: '120%' }} src={item.image} alt="Card image cap" />
                </center>
                <div className="col-md-10">


                  
                  <div className="card-body" style={{ backgroundColor: '#F4D4F5 ' }}>
                  <h5 className="text-primary">{item.title}</h5>
                    <div className="row">

                      <div className="col-md-10">
                        <h5 className="card-title"><strong>category: </strong>{item.category}</h5>
                        <p className="card-text"><strong>Price: </strong>{item.price}</p>
                      </div>

                      <div className="col-md-2">
                        <button className="btn-sm btn-danger"
                          onClick={() => {
                            dispatch(removeCart(
                              cartData.findIndex(data => data.id === item.id)
                            ))
                          }}
                        >
                          Remove
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Cart
