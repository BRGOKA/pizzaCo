# Fast React Pizza 🍕

A modern, fast pizza ordering application built with React. This project demonstrates advanced React concepts including state management with Redux Toolkit, routing with React Router, and responsive design with Tailwind CSS.

## 🚀 Features

- **Browse Menu**: View a delicious selection of pizzas with prices and ingredients
- **Add to Cart**: Easily add pizzas to your cart with quantity controls
- **User Management**: Create a username to personalize your ordering experience
- **Order Creation**: Place orders with delivery information and priority options
- **Order Tracking**: Track your order status in real-time
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technologies Used

- **Frontend**: React 18 with Hooks • ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- **State Management**: Redux Toolkit • ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- **Routing**: React Router v6 • ![React Router](https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black)
- **Styling**: Tailwind CSS • ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- **Build Tool**: Vite • ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- **API Integration**: Custom API services for restaurant data

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/fast-react-pizza.git
   cd fast-react-pizza
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Build for Production

```bash
npm run build
```

## 📱 Usage

1. **Create a username** on the home page
2. **Browse the menu** to see available pizzas
3. **Add items to your cart** and adjust quantities
4. **Proceed to checkout** and enter delivery details
5. **Place your order** and track its status

## 🏗️ Project Structure

```
src/
├── features/          # Feature-based components
│   ├── cart/         # Cart management
│   ├── menu/         # Menu display
│   ├── order/        # Order creation and tracking
│   └── user/         # User management
├── services/         # API services
├── ui/               # Reusable UI components
├── utils/            # Helper functions
├── store.js          # Redux store configuration
└── App.jsx           # Main app component
```

