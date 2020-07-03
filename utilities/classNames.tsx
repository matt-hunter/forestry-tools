export default (element, styles, defaultClassName) => {
  if (element && element.settings && element.settings.customClasses) {
    console.log(`The ${defaultClassName} element${element.template ? ` in the ${element.template} block` : ''} has the following css classes: .${defaultClassName.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)}, ${element.settings.customClasses.map(name => '.' + name.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)).join(', ')}`)
    return [defaultClassName, ...element.settings.customClasses].map(name => styles[name]).join(' ').trim()
  }
  return styles[defaultClassName]
}
