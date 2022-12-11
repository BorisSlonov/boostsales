import Image from 'next/image'
import ProductsGrid from '../styles/ProductsGrid.module.css'
import products from '../products.json'

function productsGrid() {
    return (
        <div>
            <div className='container'>
                <div className={ProductsGrid.grid}>
                    {products.map(product => {
                        return (
                            <div key={product.id} className={ProductsGrid.card}>
                                <Image className={ProductsGrid.img} width={80} height={80} src={product.image} alt={`Preview of ${product.title}`} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}р</p>
                                <p>
                                    <a className="btn-ens-action btn-ens-style" data-rel={product.title}>Купить</a>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default productsGrid