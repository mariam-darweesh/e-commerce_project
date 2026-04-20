# 🛒 Velora — E-commerce Frontend Application

A modern, responsive **e-commerce storefront** built with React, demonstrating real-world frontend architecture including API integration, global state management, and dynamic routing.

---

## 🧠 Key Highlights

- Real API integration using DummyJSON
- Scalable React architecture with hooks, context, and services
- Global cart state managed with Context API + `useReducer`
- Search, filtering, and sorting functionality
- Persistent cart using `localStorage`
- Fully responsive UI built with Tailwind CSS

---

## 🧱 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router (v6)**
- **Context API + `useReducer`**
- **DummyJSON API**
- **Lucide React**

---

## ✨ Core Features

### 🛍 Product Management

- Fetch products from API
- Dynamic product details page using `/products/:id`
- Search products by title
- Filter products by category
- Sort products by price and rating

### 🛒 Cart System

- Add and remove products
- Increase and decrease quantity
- Real-time cart updates
- Cart badge in the navbar
- Persistent cart with `localStorage`

### 📱 UI / UX

- Responsive mobile-first layout
- Skeleton loading states
- Empty states for cart and products
- Clean component-based design
- Sticky navbar and structured layout system

---

## 🔀 Routing

Client-side routing with React Router:

```txt
/               → Home
/products       → Product listing
/products/:id   → Product details
/cart           → Cart page
/checkout       → Checkout page
```

---

## 🧩 Project Structure

```txt
src/
├── components/
│   ├── home/
│   ├── layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── PageContainer.jsx
│   └── products/
│       ├── ProductCard.jsx
│       ├── ProductsList.jsx
│       ├── ProductFilters.jsx
│       └── ProductCardSkeleton.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProductsPage.jsx
│   ├── ProductDetailsPage.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   └── NotFoundPage.jsx
├── hooks/
│   ├── useProducts.js
│   ├── useProduct.js
│   └── useCart.js
├── context/
│   ├── CartContext.jsx
│   └── cartReducer.js
└── services/
    └── productsApi.js
```

---

## 🔄 Data Flow

```txt
API (DummyJSON)
   ↓
Custom Hooks (useProducts / useProduct)
   ↓
Pages
   ↓
Reusable Components
```

### Cart State

```txt
Context → Reducer → Global UI Updates
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/velora.git
cd velora
npm install
npm run dev
```

---

## 🌐 API

This project uses the DummyJSON Products API:

```txt
https://dummyjson.com/products
```

---

## 📈 Future Improvements

- Form validation with React Hook Form + Zod
- Pagination or infinite scroll
- Wishlist feature
- Authentication system
- Page transitions with Framer Motion

---

## 👨‍💻 Author

**Mariam Darweesh**  
Frontend Developer
