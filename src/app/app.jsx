

import Header from "@layout/Header"
import Footer from "@layout/footer"
import Routing from "./route";
import React from "react"

export const App = () => {

  return (
    <>
      <Header />
      <main className="container" >
        <Routing />
      </main>

      <Footer/>
    </>
  )
}