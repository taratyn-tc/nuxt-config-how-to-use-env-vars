export default defineEventHandler((event) => {
  const r = useRuntimeConfig()
  return {a: r.a, c: r.b.c}
})
