import { useDispatch } from "react-redux"
import { TbChecklist } from "react-icons/tb"
import { FaHashtag } from "react-icons/fa6"
import { BsPatchCheck } from "react-icons/bs"

import { checkout } from "../features/cart/cartSlice"

import styles from "./BasketSidebar.module.css"

function BasketSidebar({state }) {
    const dispatch = useDispatch();
  return (
    <div className={styles.sidebar} >
        <div>
            <TbChecklist />
            <p>قیمت کل :
                <span>${state.total}</span>
            </p>
        </div>
        <div>
            <FaHashtag />
            <p> تعداد :
                <span>{state.itemsCounter}</span>
            </p>
        </div>
        <div>
            <BsPatchCheck />
            <p> وضعیت :
                <span>{!state.checkout && "درحال انجام "  }</span>
            </p>
        </div>
        <button onClick={() => dispatch(checkout()) } >Checkout</button>
    </div>
  )
}

export default BasketSidebar