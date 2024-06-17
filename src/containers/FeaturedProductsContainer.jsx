import FeaturedProducts from '../components/FeaturedProducts.jsx'

const FeaturedProductsContainer = () => {
  const featured = [
    {
      thumbnail: 'www.img.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui quaerat asperiores accusantium! Itaque dolore suscipit ducimus magni!',
      productId: 1,
    },
    {
      thumbnail: 'www.img.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui quaerat asperiores accusantium! Itaque dolore suscipit ducimus magni!',
      productId: 1,
    },
    {
      thumbnail: 'www.img.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui quaerat asperiores accusantium! Itaque dolore suscipit ducimus magni!',
      productId: 1,
    },
  ]

  return (
    <div>
      <h2>Destacados</h2>

      {featured.map((product) => (
        <FeaturedProducts key={product.id} product={product} />
      ))}
    </div>
  )
}

export default FeaturedProductsContainer
