import useInitialState from "@/hooks/useInitialState"
import { renderHook, act } from "@testing-library/react"

describe("useInitialState hook", () => {
  const product={
    id: 1, 
    title: "test", 
    unit_price: 100, 
    quantity: 1, 
    category: "sport",
    totalprice: 100 ,
    image: "test.jpg",
    description: "test description",
    price: 100,
    rating:{
      rate: 4,
      count: 100
    }
  }
  const { result } = renderHook(() => useInitialState())

  test("should add product to  Cart", () => {

    //check initial cart is empty
    expect(result.current.state.cart.length).toBe(0)
    expect(result.current.state.isOpen).toBe(false)
    console.log(result.current)
    //add product to cart
    act(() => {
      result.current.addProduct(product)
    })
    // //check cart has one product
    expect(result.current.state.cart.length).toBe(1)

  })
 
})