import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { useState } from "react";
import { getSession } from "next-auth/client";
export default function Home({ products }) {
  const [filteredProducts, setProducts] = useState(products);

  function filterProducts(searchText) {
    const matchedProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setProducts([...matchedProducts]);
  }
  return (
    <div className="bg-gray-100">
      <Header onSearchValue={filterProducts} />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Just to create the space  */}
        <div className="md:p-20" />
        {/* products */}
        {filteredProducts.length > 0 ? (
          <ProductFeed products={filteredProducts} />
        ) : (
          <h1 className="text-center text-2xl py-4">
            🙁 No matching products…
          </h1>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch(
    "https://raw.githubusercontent.com/rishabhthakur11/Grocery-Api/main/products.json"
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
}
