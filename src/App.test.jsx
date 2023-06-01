// import { it, expect } from 'vitest'

// steg 1 - beskriva vad tester gör
// steg 2 - redera / köra våra funktioner
// steg 3 - utföra någon form av event
// steg 4 - försäkra att resultatet blir som förväntat


// const func = () => {
//     return true
// }


// it('should return true', () => {
//     const result = func()

//     expect(result).toBe(true)
// })


import { screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/utils-for-tests";

test("renders learn react link", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/products/i);
  expect(linkElement).toBeInTheDocument();
});