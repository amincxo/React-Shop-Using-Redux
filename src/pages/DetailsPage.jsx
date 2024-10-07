import { useEffect } from "react";
import { Link , useParams } from "react-router-dom"
import { useSelector ,useDispatch } from "react-redux";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";


import Loader from "../components/Loader"
// import { useProductDetails } from "../context/ProductContext";

import styles from "./DetailsPage.module.css"
import { fetchProducts } from "../features/product/productsSlice";


function DetailsPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const productDetails = useSelector(store => store.product.products.find(i => i.id === +id) );

    if (!productDetails) {
        return <Loader />
    }

  return (
    <div className={styles.container} >
        <img src={[productDetails.image]} alt={productDetails.title} />
        <div className={styles.information} >
            <h3 className={styles.title} >
                {productDetails.title}
            </h3>
            <p className={styles.description} >{productDetails.description}</p>
            <p className={styles.category} >
                <SiOpenproject />
                {productDetails.category}
                </p>
            <div>
                <span className={styles.price} >
                    <IoMdPricetag />
                    {productDetails.price}$
                </span>
                <Link to="/products" >
                    <FaArrowLeft />
                    <span>
                        بازگشت به محصولات
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage