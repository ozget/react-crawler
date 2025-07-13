import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'


const NewListPage = lazy(() => import('../features/NewsListPage'))
const NewDetailPage = lazy(() => import('../features/NewsListPage'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Yükleniyor...</p>}>
      <Routes>
        <Route path="/" element={<NewListPage />} />
        <Route path="*" element={<p>Sayfa bulunamadı</p>} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes