import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { Add } from './components/Add'
import { Data } from './components/Data'
import { Update } from './components/Update'
import { View } from './components/View'

const EmployeePage = () => {
  
  return (
      <Routes>
        <Route path="/" exact element={<Data />} />
        <Route path="/employees/:id" exact element={<View />} />
        <Route path="/employees/add" exact element={<Add />} />
        <Route path="/employees/update/:id" exact element={<Update />} />
        <Route path="/employees" element={<Navigate to="/" />} />
      </Routes>
  )
}

export default EmployeePage
