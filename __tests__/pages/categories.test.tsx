import React from "react"
import { render } from "@testing-library/react"
import  Categories  from "@/pages/categories"
import { describe } from "node:test"

describe("Categories", () => {
  it("Should render list of categories", () => {
    const categories = [       
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
      "Grocery",
      "Tech",
      "clothing",
      "shoes",
    ]
    
    render(
      <Categories categories={categories}/>
    )
      
    const categoriesList = document.querySelectorAll("h1")
    expect(categoriesList).toHaveLength(8)
    expect(categoriesList[0].textContent).toBe("ELECTRONICS")

  })
})