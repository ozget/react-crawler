
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/appRoutes"

function App() {
  return (
      <BrowserRouter>
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Haberler</h1>
        </div>
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
