import { FC, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

const App: FC<{}> = () => (
  <Suspense >
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Suspense>
)

export default App
