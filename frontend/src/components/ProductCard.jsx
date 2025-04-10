const ProductCard = ({product}) => {
  return (
    <div className="bg-softred/8 rounded-lg p-5 flex justify-between gap-7 flex-row lg:max-w-8/10 mx-auto min-h-100">
        <div className="basis-1/3">
            <img src={product.images[0]} alt={product.name || "Product image"} className="w-full h-full object-cover rounded-sm"></img>
        </div>
        <div className="basis-2/3 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-3xl font-bodoni">{product.name}</h3>
                <h4 className="italic font-bodoni">{product.binomial}</h4>
            </div>

            <p className="font-bold text-3xl text-softred">{product.price.toLocaleString("sv-SE")} SEK</p>
            <p className="text-brown/70">{product.description}</p>
 
            <div className="flex gap-3">
                <button type="button" className="btn-primary">Add to Cart</button>
                <button type="button" className="btn-secondary">Add to Wishlist</button>
            </div>
            
        </div>
    </div>
  )
}

export default ProductCard;
