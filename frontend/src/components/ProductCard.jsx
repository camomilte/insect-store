const ProductCard = ({product}) => {
  return (
    <div className="bg-terracotta/10 rounded-lg p-5 flex justify-between gap-5 flex-row">
        <div className="basis-1/3">
            <img src={product.images[0]} alt={product.name}></img>
        </div>
        <div className="basis-2/3">
            <h3 className="font-bold text-3xl">{product.name}</h3>
            <h4 className="italic">{product.binomial}</h4>
            <p className="font-bold text-3xl text-softred">{product.price} SEK</p>
            <button className="bg-softred text-cream px-7 py-3 rounded-md">More information</button>
        </div>
    </div>
  )
}

export default ProductCard;
