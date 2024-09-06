import { describe, expect, it } from 'vitest'
import { useAdd } from '.'

describe('Add three numbers and expect to get 10', () => {
  it('should be equal to 10', () => {
   expect(useAdd(5,3,2)).toEqual(10)
  })
})