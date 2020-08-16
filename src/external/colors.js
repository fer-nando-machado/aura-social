import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs"

const colorThief = new ColorThief()

const colors = {
  getColor: async (image) => {
    const rgb = colorThief.getColor(image, 1)
    return rgb
  },
}

export default colors
