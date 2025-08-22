# Next.js Product Management App

A simple product management web application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
The app includes **public and protected pages** with basic authentication, product listing, product details, and a protected dashboard for adding products.  

🔗 **Live Demo:** [nextjs-project-mocha-psi.vercel.app](https://nextjs-project-mocha-psi.vercel.app/)

---

## 🚀 Features

- **Landing Page (Public)**
  - Includes Navbar, Hero section, Product Highlights, and Footer.
  - Easy navigation to Login and Product pages.

- **Authentication**
  - Login with **NextAuth.js** (Google or credentials).
  - Redirects to `/products` after successful login.
  - Protects certain routes for authenticated users only.

- **Product Management**
  - `/products` → View a list of products (publicly accessible).
  - `/products/[id]` → View detailed information of a single product.
  - `/dashboard/add-product` → Add new products (protected route, requires login).

- **Enhancements (Optional)**
  - Loading spinner during form submission.
  - Toast message after adding a product successfully.
  - Light/Dark theme toggle.

---

## 🛠️ Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/) (Google / credentials login)
- Route Handlers (`/api`) for backend requests
- (Optional) Express.js for extended backend

---

## 📂 Route Summary

| Route                          | Type       | Description                                |
| ------------------------------- | ---------- | ------------------------------------------ |
| `/`                            | Public     | Landing page with Navbar, Hero, Highlights, Footer |
| `/login`                       | Public     | Login page using NextAuth.js               |
| `/products`                    | Public     | Displays all products                      |
| `/products/[id]`               | Public     | Displays details of a single product       |
| `/dashboard/add-product`       | Protected  | Form to add a new product (requires login) |

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/nextjs-product-app.git
cd nextjs-product-app
