import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // এই লেআউটের ভেতরে Navbar এবং বাকি পেজ থাকবে
    children: [
      {
        path: "/",
        element: <HomePage />, // মূল ডোমেইনে HomePage কম্পোনেন্ট দেখাবে
      },
      // ভবিষ্যতে অন্য কোনো পেজ যোগ করতে চাইলে এখানে যোগ করবেন
      // যেমন:
      // {
      //   path: "/blog",
      //   element: <BlogPage />,
      // },
    ],
  },
]);