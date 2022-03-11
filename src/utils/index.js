const utilRandomRgba = (min, max) => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const randomByte = () => randomNumber(min, max)
  const randomCssRgba = `rgba(${[randomByte(), randomByte(), randomByte(), 1].join(',')})`
  return randomCssRgba
}

export {
  utilRandomRgba
}