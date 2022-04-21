import { FC } from 'react'

import { Route, Routes } from 'react-router-dom'

import { Comp1 } from '../comp1'
import { Comp2 } from '../comp2'

export const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Comp1 />} />
    <Route path="/comp2" element={<Comp2 />} />
  </Routes>
)
