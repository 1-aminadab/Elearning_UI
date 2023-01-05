import React from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import { chapters } from '../courses-page/subjects/chapters'

function Cart() {
    const navigate = useNavigate()
  const addChapter = chapters.filter((theChapters)=>{
    return theChapters.added == true
  })
  return (
    <div>
        <div className='shopping_cart'>
            <div className="cart_header">
                <h1>Shooping Cart</h1>

            </div>
            
            <div className="added_and_total">
                <div className="added">
                    
                
            {
                addChapter.map((addedChapters)=>{
                    return(
                        <div className="added_cart">
                <div className="image">
                        <img src="https://www.humbleisd.net/cms/lib/TX01001414/Centricity/Domain/33/Elementary%20Math%202022%20Logo2.png" alt="" />
                </div>
                <div className="cart-desc">
                    <h1>{addedChapters.chpater}</h1>
                    <p>{addedChapters.desc}</p>
                    <div className="price-rate">
                        <p>Rating 4/5</p>
                        <h4>Price ${addedChapters.price}</h4>
                        <button onClick={()=> addedChapters[addedChapters.id].added = false}>remove</button>
                    </div>
                    

                </div>
            </div>           
                    )
                })
            }
            </div>
            <div className="total_checkout">
               <div className="total">
                    <h1>Total</h1>
                    <h2>$ 300</h2>
                    <h3>80% off</h3>
                </div> 
               <button  onClick={()=> navigate()}>
                Checkout
               </button>
            </div>
        </div>
        </div>    
        <button className='back'>Back</button>
    </div>
  )
}

export default Cart