import GetProductsContainer from '@components/admin/get-products/GetProductsContainer'
import CreateProductButton from '@components/admin/create-product/CreateProductButton'

const GetProducts = () => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="self-end px-12 my-8">
        <CreateProductButton />
      </div>

      <div className="self-center w-fit">
        <GetProductsContainer />
      </div>
    </div>
  )
}

export default GetProducts
