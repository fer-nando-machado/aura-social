import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs"

const colorThief = new ColorThief()

const colors = {
  getDominantColor: async (img) => {
    return colorThief.getColor(img, 1)
  },
}

export default colors
