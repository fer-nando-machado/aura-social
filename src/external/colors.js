import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs"

const colorThief = new ColorThief()

const colors = {
  getPalette: (img, n) => {
    if (n === 1) return [colorThief.getColor(img, 1)]
    return colorThief.getPalette(img, n > 10 ? 10 : n, 1)
  },
  rgb2hsv: (rgb) => {
    const [r, g, b] = rgb
    let v = Math.max(r, g, b)
    let n = v - Math.min(r, g, b)
    let h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n)
    return [60 * (h < 0 ? h + 6 : h), v && n / v, v]
  },
  hsv2rgb: (hsv) => {
    const [h, s, v] = hsv
    let f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
    return [f(5), f(3), f(1)]
  },
  rgb2hsl: (rgb) => {
    const [r, g, b] = rgb
    let a = Math.max(r, g, b)
    let n = a - Math.min(r, g, b)
    let f = 1 - Math.abs(a + a - n - 1)
    let h = n && (a === r ? (g - b) / n : a === g ? 2 + (b - r) / n : 4 + (r - g) / n)
    return [60 * (h < 0 ? h + 6 : h), f ? n / f : 0, (a + a - n) / 2]
  },
  hsl2rgb: (hsl) => {
    const [h, s, l] = hsl
    let a = s * Math.min(l, 1 - l)
    let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return [f(0), f(8), f(4)]
  },
  sort3D: ([a, b, c], [x, y, z]) => a - x || b - y || c - z,
}

export default colors
