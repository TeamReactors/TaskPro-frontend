import {  Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  return (
    <div class="flex">
      <div class="w-14 flex-none ...">01</div>
      <div class="w-64 flex-1 ...">02</div>
      <div class="w-32 flex-1 ...">03</div>
    </div>
  )
}

export default PrivateRoute
