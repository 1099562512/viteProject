const modules = import.meta.glob('./modules/*.ts', { eager: true })

console.log(modules);
Object.keys(modules).forEach((key) => {
  console.log((modules as Recordable)[key].default);
})

export default {}