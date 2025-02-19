import React, { useState } from "react";

const ProductCard = ({ name, price }) => {
  const [inCart, setInCart] = useState(false);

  return (
    <div style={styles.card}>
      <h3 style={styles.productName}>{name}</h3>
      <p style={styles.price}>Цена: {price} KZT</p>
      <button
        onClick={() => setInCart(!inCart)}
        style={inCart ? styles.removeButton : styles.addButton}
      >
        {inCart ? "Удалить из корзины" : "Добавить в корзину"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  products: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "220px",
    backgroundColor: "#f9f9f9",
    boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  productName: {
    fontSize: "1.2em",
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: "1.1em",
    fontWeight: "500",
    color: "#555",
    marginBottom: "10px",
  },
  addButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
};

const App = () => {
  const products = [
    { name: "Ноутбук", price: 148800 },
    { name: "Смартфон", price: 52000 },
    { name: "Банан", price: 13300 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: "2em", color: "#333", marginBottom: "20px" }}>Товары</h2>
      <div style={styles.products}>
        {products.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default App;
