const ProductCard = ({image, category, productName, rating, price, addToCart}) => {
    return(
        <div className="product-card">
            <img src={image} alt="" />
            <p className="product-category">{category}</p>
            <h3>{productName}</h3>
            <p className="product-rating">{rating}</p>
            <p className="product-price">{price}</p>
            <button className="btn-secondary" onClick={addToCart}>Adicionar ao carrinho</button>
        </div>

    )
}

export default ProductCard