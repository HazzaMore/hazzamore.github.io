import { useState } from "react"

const usePopupActive = (initialVal = false) => {

  const [popupState, setPopupState] = useState(initialVal);
  
  const togglePopup = () => {
    setPopupState((prev) => !prev);
  }
  return [popupState, togglePopup];
}
export default usePopupActive;