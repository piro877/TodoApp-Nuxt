export const colorSelector = (color: string) => {
  if (color === 'red') {
    return 'background-color--red'
  } else if (color === 'blue') {
    return 'background-color--blue'
  } else {
    return 'background-color'
  }
}
