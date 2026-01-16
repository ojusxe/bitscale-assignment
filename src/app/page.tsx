"use client"

import { Header } from '@/components/Header'
import { AlertBar } from '@/components/AlertBar'
import { Toolbar } from '@/components/Toolbar'
import { DataGrid } from '@/components/DataGrid'
import { Footer } from '@/components/Footer'

export default function Home() {

  return (
    <>
      <main className="flex flex-col h-screen overflow-hidden">
        <Header />
        <AlertBar />
        <Toolbar />
        <DataGrid />
        <Footer />
      </main>
    </>
  )
}
