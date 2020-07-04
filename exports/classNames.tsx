export default (element, styles, defaultClassName) => {
  if (element && element.settings && element.settings.customClasses) {
    return [defaultClassName, ...element.settings.customClasses].map(name => styles[name]).join(' ').trim()
  }
  return styles[defaultClassName]
}
