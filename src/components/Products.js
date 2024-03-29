import { Component } from "react";
import Product from "./Product"

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Products extends Component {
    render (){
        //definiendo propiedades del componente
        const { products, addProduct} = this.props
        return(
            <div style={styles.products}>
                {
                    products.map(product =>
                        <Product 
                            addProduct = {addProduct}
                            key = {product.name}
                            product ={product}
                        />)}
            </div>
        )
    }
}

export default Products