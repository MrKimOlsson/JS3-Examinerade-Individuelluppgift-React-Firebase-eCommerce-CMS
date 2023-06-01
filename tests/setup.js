import { afterEach, expect } from 'vitest'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'

// Extend functionallity from expect to user extended functions
expect.extend(matchers)

// Clean up jsdom after each test, to make them non-independent of eachother.
afterEach(() => {
    cleanup()
})

