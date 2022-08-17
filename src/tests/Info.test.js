import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Info from "../components/Info"

test("render Info", () => {
   const { getByText } = render(<Info />)
   expect(
      getByText("Pokemn Champion and Trainer from Japan")
   ).toBeInTheDocument()
})
