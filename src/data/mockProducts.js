const products = [
    { id: "1", name: "Camiseta Argentina", category: "camisetas", price: 25000, image: "https://via.placeholder.com/200" },
    { id: "2", name: "Balón Adidas", category: "balones", price: 20000, image: "https://via.placeholder.com/200" },
    // más productos...
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === id));
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((p) => p.category === category));
      }, 1000);
    });
  };