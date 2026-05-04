import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const changeIndex = (step) =>
    setIndex(i => Math.max(0, Math.min(i + step, products.length - 4)));

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Product Images</h2>

      <button onClick={() => changeIndex(-4)}>Previous</button>
      <button onClick={() => changeIndex(4)} style={{ marginLeft: 10 }}>
        Next
      </button>

      <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 20 }}>
        {products.slice(index, index + 4).map(p => (
          <img key={p.id} src={p.thumbnail} alt="" width="400" />
        ))}
      </div>
    </div>
  );
}