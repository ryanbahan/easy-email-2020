export const update = content => ({
  type: "UPDATE",
  payload: content,
})

export const toggleVisibility = bool => ({
  type: "TOGGLE_VISIBILITY",
  payload: bool,
})

export const isLoading = bool => {
  return {
  type: "IS_LOADING",
  payload: bool,
}
}
