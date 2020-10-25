import React, { useState } from "react"
import Input from '../../utils/input/input'
import { useSelector, useDispatch } from "react-redux"
import { setPopupDisplay } from "../../reducers/fileReducer"
import { createDir } from "../../actions/file"

const Popup = () => {
  const [dirName, setDirName] = useState('')
  const popupDisplay = useSelector(s => s.files.popupDisplay)
  const currentDir = useSelector(s => s.files.currentDir)
  const dispatch = useDispatch()

  function createHandler() {
    dispatch(createDir(currentDir, dirName))
  }

  return (
    <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
      <div className="popup__content" onClick={e => e.stopPropagation()}>
        <div className="popup__header">
          <div className="popup__title">Cоздать новую папку</div>
  <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
        </div>
        <Input type="text" placeholder="Введите название папки..." value={dirName} setValue={setDirName} />
        <button className="popup__create" onClick={() => createHandler(dispatch(setPopupDisplay('none')))} >Создать</button>
      </div>
    </div>
  )
}

export default Popup;
