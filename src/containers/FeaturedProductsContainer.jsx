import FeaturedProducts from '../components/FeaturedProducts.jsx'

const FeaturedProductsContainer = () => {
  const featured = [
    {
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/las-meninas-d7387.appspot.com/o/image-1.jpg?alt=media&token=98d5b088-c144-4570-8cd9-8fac64b91266',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui quaerat asperiores accusantium!',
      productId: 1,
    },
    {
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/las-meninas-d7387.appspot.com/o/image-2.jpg?alt=media&token=4a858975-d733-4257-8644-266d3c3299d9',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui quaerat asperiores accusantium!',
      productId: 2,
    },
    {
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/las-meninas-d7387.appspot.com/o/image-3.jpg?alt=media&token=3ee5c5a5-3c5a-4b2f-94f2-8558b044d817',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui quaerat asperiores accusantium!',
      productId: 3,
    },
  ]

  return (
    <div className="flex flex-col mt-16">
      <div className="grid place-items-center">
        <h2 className="font-serif text-4xl not-italic font-normal text-vanillaGray">
          Destacados
        </h2>
      </div>

      <div className="flex items-center justify-center gap-16 mt-8">
        {featured.map((product) => (
          <FeaturedProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProductsContainer
