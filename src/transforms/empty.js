
export const isEmpty = (obj) => {
  if (!obj.id) {
    const err = new Error('Not Found')
    err.status = 404
    throw err
  }
  return obj
}
