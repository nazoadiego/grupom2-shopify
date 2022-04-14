import { FC } from 'react'

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = () => {
  const title = "Hello world"
  return (
    <div className="min-h-screen text-2xl text-white xl:bg-black">
      <h2>{title}</h2>
    </div>
  )
}

export default ProductsPage
