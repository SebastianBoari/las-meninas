/**
 * Truncates a string to a specified character limit.
 * @param {String} text - The string to truncate.
 * @param {Number} limit - The maximum number of characters allowed.
 * @returns {String} - The truncated string.
 */
export const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text
  }

  let truncatedText = text.slice(0, limit)

  const lastSpaceIndex = truncatedText.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    truncatedText = truncatedText.slice(0, lastSpaceIndex)
  }

  return truncatedText + '...'
}

// const products = [
//   {
//     title: 'Antique Oak Dining Table with Intricate Carvings',
//     description:
//       'A beautifully crafted dining table made from solid oak, perfect for hosting family dinners and gatherings with a touch of antique charm.',
//     price: 1200,
//     quantity: 3,
//     featured: true,
//     currency: true,
//     thumbnails: [
//       'https://www.elisabethjamesantiques.co.uk/stockimages/3-metre-antique-oak-dining-table-jacobean-carved-extending-2-P6.jpg',
//       'https://cdn.propcart.com/thumbnails/Jo9j5QSE0ga4c7flug9j_1599947712132.jpg',
//     ],
//   },
//   {
//     title: 'Vintage Mahogany Wardrobe with Ample Storage',
//     description:
//       'This vintage wardrobe is made from rich mahogany wood, offering plenty of storage space for your clothes and accessories.',
//     price: 1500,
//     quantity: 2,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://i.pinimg.com/originals/f7/a7/f2/f7a7f2d459e9ee14819c9d6275d3d570.jpg',
//       'https://images.antiquesatlas.com/dealer-stock-images/atheyantiques/pair_of_mahogany_wardrobes_as136a1857b.jpg',
//     ],
//   },
//   {
//     title: 'Victorian Era Armchair with Plush Upholstery',
//     description:
//       'A classic armchair from the Victorian era, featuring plush upholstery and a sturdy wooden frame.',
//     price: 800,
//     quantity: 5,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://foter.com/photos/424/tudor-style-victorian-ladies-parlor-chair.jpeg',
//       'https://5.imimg.com/data5/LZ/FM/DC/SELLER-32125448/wooden-arm-rest-chair-500x500.jpg',
//     ],
//   },
//   {
//     title: 'Classic Walnut Coffee Table with Storage',
//     description:
//       'A walnut coffee table that combines classic design with modern functionality, featuring a hidden storage compartment.',
//     price: 400,
//     quantity: 8,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://m.media-amazon.com/images/I/81wqLoLr2AL._AC_UF894,1000_QL80_.jpg',
//       'https://i5.walmartimages.com/seo/Gexpusm-Oval-Glass-Coffee-Tables-2-Tier-Solid-Wood-with-Storage-Shelf-46-L-x-18-H-Vintage-Dark-Brown_a3030539-e9f9-4e90-9644-017b7a69a7cf.f2a6b035dd2bc52aaa044b271533662c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
//     ],
//   },
//   {
//     title: 'Rustic Pine Bookshelf with Adjustable Shelves',
//     description:
//       'This rustic bookshelf is made from solid pine wood and features adjustable shelves to accommodate your favorite books.',
//     price: 600,
//     quantity: 4,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://files.ekmcdn.com/thorblood/images/port-royal-tall-2-door-bookcase-with-adjustable-shelves-1919-p.jpg?w=1000&h=1000&v=28cd4711-a30f-46d5-ae0f-fff6b5f19f25',
//       'https://www.vintagemillwerks.com/wp-content/uploads/2018/09/1-Napa-Bookcase.jpg',
//     ],
//   },
//   {
//     title: 'Edwardian Style Sideboard with Marble Top',
//     description:
//       'A stunning Edwardian sideboard with a marble top, offering ample storage space and a touch of elegance.',
//     price: 950,
//     quantity: 2,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://www.sellingantiques.co.uk/photosnew/dealer_collinge/dealer_collinge_full_1568902517055-5408608757.jpg',
//       'https://images.antiquesatlas.com/dealer-stock-images/collingeantiques/Edwardian_Era_French_Marble_To_ac049a6541z-3.jpg',
//     ],
//   },
//   {
//     title: 'Colonial Cherry Wood Bed Frame with Headboard',
//     description:
//       'This bed frame, made from cherry wood, features a classic colonial design with a beautifully carved headboard.',
//     price: 1100,
//     quantity: 3,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://cdn11.bigcommerce.com/s-4lu5v209cc/images/stencil/1280x1280/products/2347/3930/MC7012-66__12765.1634754797.jpg?c=1',
//     ],
//   },
//   {
//     title: 'Georgian Drop Leaf Table with Hidden Compartment',
//     description:
//       'A Georgian-style drop leaf table with a hidden compartment, perfect for small spaces and multifunctional use.',
//     price: 700,
//     quantity: 6,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://assets-vinterior-1.vinterior.co/uploads/listing_image/image/8372060/large_antique-georgian-mahogany-brown-drop-leaf-table-1-drawer-castors-sku81977978_0.jpg',
//       'https://assets-vinterior-0.vinterior.co/uploads/listing_image/image/8372063/large_antique-georgian-mahogany-brown-drop-leaf-table-1-drawer-castors-sku81977978_0.jpg',
//     ],
//   },
//   {
//     title: 'French Provincial Sofa with Tufted Back',
//     description:
//       'This French Provincial sofa features a tufted back and luxurious fabric, offering both comfort and style.',
//     price: 2000,
//     quantity: 1,
//     featured: true,
//     currency: true,
//     thumbnails: [
//       'https://a.1stdibscdn.com/archivesE/upload/1121189/f_135828721551494822431/13582872_master.jpg?width=768',
//       'https://i.ebayimg.com/images/g/ZFoAAOSwoQ9h0L7m/s-l400.jpg',
//     ],
//   },
//   {
//     title: 'Gothic Revival Desk with Ornate Details',
//     description:
//       'A desk in the Gothic Revival style, featuring ornate details and ample workspace for a touch of historical elegance.',
//     price: 850,
//     quantity: 4,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://a.1stdibscdn.com/rare-gothic-revival-writing-desk-carved-oak-antique-19th-century-angels-dragons-for-sale/f_29973/f_304362521663403298739/f_30436252_1663403299874_bg_processed.jpg?width=768',
//       'https://a.1stdibscdn.com/rare-gothic-revival-writing-desk-carved-oak-antique-19th-century-angels-dragons-for-sale-picture-7/f_29973/f_304362521663405454328/goed7_master.jpg?width=768',
//     ],
//   },
//   {
//     title: 'Mid-Century Modern Credenza with Sliding Doors',
//     description:
//       'This mid-century modern credenza features sliding doors and a sleek design, perfect for a contemporary living room.',
//     price: 950,
//     quantity: 3,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://furnishmevintage.com/?attachment_id=11638',
//       'https://furnishmevintage.com/wp-content/uploads/2018/01/16085-2.jpg',
//     ],
//   },
//   {
//     title: 'Art Deco Bar Cabinet with Mirrored Interior',
//     description:
//       'An Art Deco bar cabinet with a mirrored interior, offering a chic and functional space for your favorite drinks.',
//     price: 1300,
//     quantity: 2,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrG8aS3CeLWV_z5X3pboww___qm2m4MSeRw&s',
//     ],
//   },
//   {
//     title: 'Traditional Mahogany Nightstand with Drawers',
//     description:
//       'This nightstand, crafted from mahogany, features multiple drawers for ample storage in a classic design.',
//     price: 350,
//     quantity: 7,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://shopatticfanatic.com/cdn/shop/products/2021-05-0512.55.06_2048x.jpg?v=1621449783',
//       'https://chairish-prod.freetls.fastly.net/image/product/sized/480b70c7-c6d7-4b04-b8e3-668e629e509d/vintage-american-drew-three-drawer-solid-cherry-traditional-style-nightstand-2820?aspect=fit&width=640&height=640',
//     ],
//   },
//   {
//     title: 'Louis XV Style Chair with Ornate Carvings',
//     description:
//       'A chair in the Louis XV style, featuring ornate carvings and luxurious upholstery for an elegant touch.',
//     price: 750,
//     quantity: 5,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://a.1stdibscdn.com/archivesE/upload/1121189/f_103515611522756432355/10351561_master.jpg?width=768',
//       'https://treasuretrove.ie/products/prod_images/antique-french-louis-xv-style-carved-mahogany-fauteuil-chairs-4jic-1.jpg',
//     ],
//   },
//   {
//     title: 'Shaker Style Rocking Chair with Simple Design',
//     description:
//       'A Shaker-style rocking chair, known for its simplicity and durability, perfect for a cozy corner in your home.',
//     price: 450,
//     quantity: 6,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://i.pinimg.com/originals/fa/6f/c3/fa6fc38ba1a12d832da871b592a1bffe.jpg',
//     ],
//   },
//   {
//     title: 'Queen Anne Highboy Dresser with Brass Handles',
//     description:
//       'This Queen Anne highboy dresser features brass handles and a tall, elegant design, offering ample storage space.',
//     price: 1000,
//     quantity: 3,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://i.ebayimg.com/images/g/PBMAAOSwHGphi7LS/s-l1600.jpg',
//       'https://i.ebayimg.com/images/g/MXAAAOSwVXpiGIHD/s-l400.jpg',
//     ],
//   },
//   {
//     title: 'Regency Style Mirror with Gold Leaf Frame',
//     description:
//       'A Regency-style mirror with a gold leaf frame, adding a touch of sophistication and grandeur to any room.',
//     price: 500,
//     quantity: 4,
//     featured: false,
//     currency: true,
//     thumbnails: [
//       'https://www.proantic.com/galerie/lecomte/img/904799-main-6214dc3aeba36.jpg',
//     ],
//   },
//   {
//     title: 'Rustic Farmhouse Bench with Distressed Finish',
//     description:
//       'This farmhouse bench features a distressed finish and sturdy construction, perfect for a rustic kitchen or entryway.',
//     price: 300,
//     quantity: 9,
//     featured: false,
//     currency: false,
//     thumbnails: [
//       'https://www.decorsteals.com/cdn/shop/files/10589-WoodenBench-600x600-1-favoredfarmhouse_d521b2a3-b082-458c-b6b5-607001ab3a40.jpg?v=1720625374',
//       'https://www.decorsteals.com/cdn/shop/files/Farmhouse-Bench-600x600-4.jpg?v=1720625379',
//     ],
//   },
//   {
//     title: 'Chippendale Style Dining Set with 6 Chairs',
//     description:
//       'A Chippendale-style dining set, including a table and six chairs, known for its intricate craftsmanship and classic design.',
//     price: 2500,
//     quantity: 1,
//     featured: true,
//     currency: true,
//     thumbnails: [
//       'https://cdn20.pamono.com/p/g/1/6/1648367_9gbnmpbgt7/chippendale-style-dining-chairs-with-h-frame-set-of-6-1.jpg',
//     ],
//   },
// ]

// const { document, loading, error } = useFirestoreCreateDocument()

// useEffect(() => {
//   const createProducts = async () => {
//     for (let i = 0; i < products.length && i < 20; i++) {
//       if (i >= 20) break

//       const product = products[i]
//       await document('products', product)
//     }
//   }

//   createProducts()
// }, [])
