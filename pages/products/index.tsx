import { FC } from 'react'

interface ProductsPageProps {}

const ProductsPage: FC<ProductsPageProps> = () => {
  return (
    <div className="min-h-screen text-2xl text-white xl:bg-black">
      <h2>These are all my children</h2>
    </div>
  )
}

export default ProductsPage
