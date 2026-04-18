🛒 Velora — E-commerce Frontend Application

A modern, responsive e-commerce storefront built with React, demonstrating real-world frontend architecture including API integration, global state management, and dynamic routing.

🧠 Key Highlights
   - Real API integration (DummyJSON)
   - Scalable React architecture (hooks, context, services)
   - Global cart state using Context + useReducer
   - Search, filtering, and sorting logic
   - Persistent cart with localStorage
   - Fully responsive UI with Tailwind CSS


 🧱 Tech Stack
   - React (Vite)
   - Tailwind CSS
   - React Router (v6)
   - Context API + useReducer
   - DummyJSON API
   - Lucide React (icons)


✨ Core Features
🛍 Product Management
   - Fetch products from API
   - Dynamic product details page (/products/:id)
   - Search by title
   - Filter by category
   - Sort by price and rating


🛒 Cart System
   - Add / remove products
   - Quantity management
   - Real-time cart updates
   - Cart badge in navbar
   - Persistent cart (localStorage)

📱 UI / UX
   - Responsive layout (mobile-first)
   - Skeleton loading states
   - Empty states (cart & products)
   - Clean component-based design
   - Sticky navbar + structured layout system


🔀 Routing

Client-side routing with React Router:

/               → Home
/products       → Product listing
/products/:id   → Product details
/cart           → Cart page
/checkout       → Checkout

🧩 Project Structure
    src/
    components/
        home/
        layout/
        products/
    pages/
    hooks/
    context/
    services/


🔄 Data Flow
    API (DummyJSON)
    ↓
    Custom Hooks (useProducts / useProduct)
    ↓
    Pages
    ↓
    Reusable Components

    Cart State:
    Context → Reducer → Global UI updates


👨‍💻 Author

    Mariam Darweesh
    Frontend Developer