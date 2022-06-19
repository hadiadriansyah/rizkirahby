import React, {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'


const EmployeePage = lazy(() => import('../modules/employee/EmployeePage'));

export function PrivateRoutes() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<EmployeePage />} />
      </Routes>
    </Suspense>
  )
}