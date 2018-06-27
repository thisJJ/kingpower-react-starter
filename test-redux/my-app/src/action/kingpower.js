// สร้าง Action type
export const UPDATE_TEXT = 'APP/KINGPOWER/UPDATE_TEXT'
// สร้าง Action Creator
export const onUpdateText = (text) => {
  return {
    type: UPDATE_TEXT,
    payload: {
      text
    }
  }
}