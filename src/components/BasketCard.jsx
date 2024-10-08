import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md"

import { shortenText } from "../helper/helper"

import styles from "./BasketCard.module.css";
import { decrese, increase, removeItem } from "../features/cart/cartSlice";

function BasketCard({data }) {
    const {image , title , quantity} = data;
    const dispatch = useDispatch();
  return (
    <div className={styles.card} >
        <img src={image} alt={title} />
        <p>{shortenText(title)}</p>
        <div className={styles.actions} >
            {quantity === 1 && (
                <button onClick={()=> dispatch(removeItem(data))} >
                    <MdDeleteOutline/>
                </button>
            )}
            {quantity > 1 && (<button onClick={()=> dispatch(decrese(data))} >-</button>)}
            <span>
                {quantity}
            </span>
            <button onClick={()=> dispatch(increase(data))} >+</button>
        </div>
    </div>
  )
}

export default BasketCard