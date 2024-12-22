import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
    // header

    return (
    <div className="bg-black text-white min-h-screen">
        <div className="container px-6 py-4 mx-auto"></div>
        <main>
            <Outlet/>
        </main>
  </div>
    )
}
