import { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation } from './redux/apiSlice'

const Data = () => {

const { data: allProductsData, error, isLoading } = useGetAllProductsQuery();
const { data: singleProductData } = useGetProductByIdQuery(10);
const [ addNewProduct, { data: newProduct}]  = useAddNewProductMutation();

console.log(allProductsData);
console.log(singleProductData);
console.log(newProduct);

if(isLoading) return <h1>Loading...</h1>
if (error) return <p>Error: {error.message}</p>;

const handleAddProduct = async () => {

try {
 
  const newProductData = {
    id: 1,
    title: document.getElementById("newproduct").value,
  };


  await addNewProduct(newProductData);

} catch (err) {
  console.error("Error adding new product:", err);
}
}

  return (
    <div className='data'>
      <button onClick={() => document.getElementById("product-box1").innerHTML = allProductsData.products.map((product)=>` ${product.title}`)} > Get All Products </button> 
      <button onClick={() => document.getElementById("product-box2").innerHTML = singleProductData.title }> Get Product ID 10</button>
      
      <input type="text" id="newproduct" 
      style={{marginRight: "10px",padding: "5px"}} 
      placeholder='Type here new product...'
      />
      <button onClick={handleAddProduct}> Add New Product</button>
      
      <div id="product-box1">
      
      </div> <br />

      <div id="product-box2">
      
      </div> <br />

      <span>{newProduct?.title}</span>
    </div>
  )

}

export default Data