import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import Info from "../components/Info"

test("render Info", () => {
	console.log("hi")
	const { getByText } = render(<Info />)
	expect(
		getByText("Pokemon Champion and Trainer from Japan")
	).toBeInTheDocument();
})
