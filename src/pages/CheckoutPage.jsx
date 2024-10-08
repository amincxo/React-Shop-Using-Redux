import { useSelector } from 'react-redux';
import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';
import styles from "./CheckoutPage.module.css"

function CheckoutPage() {


    const state = useSelector(store => store.cart);


    
    if (!state.itemsCounter) {
        return (
            <div className={styles.container}>
                <p>خالیه به خدا </p>
            </div>
        )
    }

  return (
    <div className={styles.container} >
        <BasketSidebar state={state}  />
        <div className={styles.priducts} >
            {state.selectedItems.map((product)=> (
                <BasketCard key={product.id} data={product}  />
            ))}
        </div>
    </div>
  )
}

export default CheckoutPage