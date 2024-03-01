import "./App.scss"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import LoginPage from "./pages/Login/LoginPage"
import DashboardPage from "./pages/Dashboard/DashboardPage"
import UsersPage from "./pages/Users/UsersPage"
import RolesPage from "./pages/Roles/RolesPage"
import NotFoundPage from "./pages/NotFound/NotFoundPage"
import StatsPage from "./pages/Stats/StatsPage"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,

    children: [
      {
        path: "",
        element: <Navigate to="users" replace={true} />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "roles",
        element: <RolesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "14px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
          },
        }}
      />
    </QueryClientProvider>
  )
}

export default App
