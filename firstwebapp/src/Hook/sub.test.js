import { describe, expect, it } from "vitest"
import { useSub } from "."

  describe('Subtract two numbers and expect to get 0', () => {
    it('should be equal to 0', () => {
     expect(useSub(0,0)).toEqual(0)
    })
  })