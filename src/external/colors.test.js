import colors from "./colors"

jest.mock("../../node_modules/colorthief/dist/color-thief.mjs", () => {
  return jest.fn().mockImplementation(() => ({
    getColor: jest.fn(() => Math.floor(Math.random() * 10)),
    getPalette: jest.fn((img, n) => Array.from({ length: n }, () => Math.floor(Math.random() * 10))),
  }))
})

describe("color palette", () => {
  test("get single dominant color", () => {
    expect(colors.getPalette("<img>", 1)).toHaveLength(1)
  })
  test("get multiple dominant colors", () => {
    expect(colors.getPalette("<img>", 9)).toHaveLength(9)
    expect(colors.getPalette("<img>", 10)).toHaveLength(10)
    expect(colors.getPalette("<img>", 11)).toHaveLength(10)
  })
})

describe("color conversion", () => {
  const black = [0, 0, 0]
  const red = [255, 0, 0]
  const green = [0, 255, 0]
  const blue = [0, 0, 255]
  const white = [255, 255, 255]

  test("rgb2hsv / hsv2rgb", () => {
    expect(colors.hsv2rgb(colors.rgb2hsv(black))).toStrictEqual(black)
    expect(colors.hsv2rgb(colors.rgb2hsv(red))).toStrictEqual(red)
    expect(colors.hsv2rgb(colors.rgb2hsv(green))).toStrictEqual(green)
    expect(colors.hsv2rgb(colors.rgb2hsv(blue))).toStrictEqual(blue)
    expect(colors.hsv2rgb(colors.rgb2hsv(white))).toStrictEqual(white)
  })
  test("rgb2hsl / hsl2rgb", () => {
    expect(colors.hsl2rgb(colors.rgb2hsl(black))).toStrictEqual(black)
    expect(colors.hsl2rgb(colors.rgb2hsl(red))).toStrictEqual(red)
    expect(colors.hsl2rgb(colors.rgb2hsl(green))).toStrictEqual(green)
    expect(colors.hsl2rgb(colors.rgb2hsl(blue))).toStrictEqual(blue)
    expect(colors.hsl2rgb(colors.rgb2hsl(white))).toStrictEqual(white)
  })
})

describe("color sorting", () => {
  test("three dimensional sort", () => {
    const palette = [
      [1, 1, 1],
      [0, 0, 0],
      [1, 1, 0],
      [1, 0, 0],
    ]
    const expected = [
      [0, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ]
    expect(palette.sort(colors.sort3D)).toStrictEqual(expected)
  })
})
