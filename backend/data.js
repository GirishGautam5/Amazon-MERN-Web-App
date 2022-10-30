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
      _id: "1",
      image: "https://m.media-amazon.com/images/I/41ZGJxnJu1S._AC_SY200_.jpg",
      title: "Samsung M32",
      price: 12000,
      rating: 3.5,
      countInStock: 3,
    },
    {
      _id: "2",
      image: "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg",
      title: "One plus Nord",
      price: 18000,
      rating: 4.5,
      countInStock: 0,
    },
    {
      _id: "4",
      image: "https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SY200_.jpg",
      title: "Samsung S20",
      price: 11000,
      rating: 3.5,
      countInStock: 3,
    },
    {
      _id: "5",
      image: "https://m.media-amazon.com/images/I/41ZGJxnJu1S._AC_SY200_.jpg",
      title: "One plus Nord Smart Watch",
      price: 20000,
      rating: 4.5,
      countInStock: 6,
    },
    {
      _id: "6",
      image: "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg",
      title: "One plus Nord special",
      price: 22000,
      rating: 4.0,
      countInStock: 8,
    },
    {
      _id: "7",
      image: "https://m.media-amazon.com/images/I/413u56t+CiL._AC_SY200_.jpg",
      title:
        "One plus Nord pro One plus Nord pro One plus Nord pro One plus Nord pro ",
      price: 18000,
      rating: 4.5,
      countInStock: 10,
    },
    {
      _id: "8",
      image: "https://m.media-amazon.com/images/I/41CkKbseMGL._AC_SY200_.jpg",
      title: "Samsung Galaxy",
      price: 11000,
      rating: 3.5,
      countInStock: 3,
    },
    {
      _id: "9",
      image: "https://m.media-amazon.com/images/I/41d69zua5LL._AC_SY200_.jpg",
      title: "One plus Nord Smart Watch",
      price: 20000,
      rating: 4.5,
      countInStock: 4,
    },
  ],
};

export default data;
