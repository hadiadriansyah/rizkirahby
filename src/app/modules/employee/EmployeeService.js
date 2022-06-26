import AxiosI from '../../../setup/axios/AxiosInstance';


export function getEmployee() {
  return AxiosI.get("/employees")
}

export function getEmployeeById(id) {
  return AxiosI.get(`/employees/${id}`)
}

export function createEmployee(data) {
  return AxiosI.post(`/employees/add`, data)
}

export function updateEmployee(id, data) {
  return AxiosI.patch(`/employees/${id}`, data)
}

export function deleteEmployee(id) {
  return AxiosI.delete(`/employees/${id}`)
}
