import Image from 'next/image'
import ProductsGrid from '../styles/ProductsGridStyles.module.scss'
import products from '../products.json'
import { motion } from 'framer-motion'

const fromDowntoUp = {
    hidden: {
        opacity: 0,
        y: 300
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.025 }
    })
}


function productsGrid() {
    return (
        <motion.div
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.2 }}

        >
            <div className={ProductsGrid.grid}>
                {products.map(product => {
                    return (
                        <motion.div variants={fromDowntoUp} custom={product.id + 1}
                            key={product.id} className={ProductsGrid.card}>
                            <Image className={ProductsGrid.img} width={80} height={80} src={product.image} alt={`Preview of ${product.title}`} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>{product.price}р</p>
                            <p>
                                <a className="btn-ens-action btn-ens-style" data-rel={product.title}>Купить</a>
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    )
}

export default productsGrid