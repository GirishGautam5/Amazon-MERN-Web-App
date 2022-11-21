import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Girish",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Gautam",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      image: "https://m.media-amazon.com/images/I/71--IQUHVwL._AC_UL320_.jpg",
      name: "Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6 (16GB/512SSD)",
      price: 74511,
      rating: 3.5,
      countInStock: 3,
      category: 'Mobiles',
      brand: 'Lenovo',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 634,
      ModelName: "IdeaPad Gaming 3 15ACH6",
    },
    {
      image: "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg",
      name: "One plus Nord CE 2 Lite 5G(Blue Tide, 6GB RAM, 128GB Storage)",
      price: 18999,
      rating: 4.5,
      countInStock: 0,
      category: 'Mobiles',
      brand: 'One Plus',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 852,
      ModelName: 'One Plus New Version'
    },
    {
      image: "https://images-eu.ssl-images-amazon.com/images/I/41h7zpP4CgL._AC_SX184_.jpg",
      name: "Samsung Galaxy S22 5GB(Cloud Navy 8GB RAM,128GB Storage",
      price: 37900,
      rating: 3.5,
      countInStock: 3,
      category: 'Mobiles',
      brand: 'Samsung',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 25,
      ModelName: "Samsung Galaxy S22 5G",
    },
    {
      image: "https://m.media-amazon.com/images/I/6161ybFMBtL._AC_UL320_.jpg",
      name: "Dell New  G15 5511 Gaming Laptop Intel i5 8GB/512GB SSD",
      price: 67990,
      rating: 4.5,
      countInStock: 6,
      category: 'Mobiles',
      brand: 'Dell',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 504,
      ModelName: "G15 5511"
    },
    {
      image: "https://m.media-amazon.com/images/I/51phrq2UojL._AC_UL320_.jpg",
      name: "pTron Bassbuds Due in Ear Earbuds with 32 hours battery ",
      price: 999,
      rating: 4.0,
      countInStock: 8,
      category: 'Mobiles',
      brand: 'pTron',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 158,
      ModelName: "Bassbuds"
    },
    {
      image: "https://m.media-amazon.com/images/I/617sGSjmC1L._AC_UL320_.jpg",
      name:
      "GoPro Hero11 Waterproof Action Camera With Front+Rear LCD Screens",
      price: 50032,
      rating: 4.5,
      countInStock: 10,
      category: 'Mobiles',
      brand: 'GoPro',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 200,
      ModelName: "GoPro Hero11 Action Camera"
    },
    {
      image: "https://m.media-amazon.com/images/I/81z-Ir0qCFL._AC_UL320_.jpg",
      name: "LG 108 cm(43 Inches) Full HD Smart LED TV(Dark Irin Gray)",
      price: 34990,
      rating: 3.5,
      countInStock: 3,
      category: 'Mobiles',
      brand: 'LG',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 100,
      ModelName: "SMT"
    },
    {
      image: "https://m.media-amazon.com/images/I/41d69zua5LL._AC_SY200_.jpg",
      name: "One plus smart watch with 1.78 AMOLED Dispay, 60Hz Refresh rate, 105 fitness models ",
      price: 4999,
      rating: 4.5,
      countInStock: 4,
      category: 'Mobiles',
      brand: 'One Plus',
      description: 'Mobile with 64GB| 4GB RAM| 5000mah | 16px front cam | 64px back cam',
      numReviews: 44,
      ModelName: "One Plus Nord watch Black"
    },
  ],
};

export default data;
