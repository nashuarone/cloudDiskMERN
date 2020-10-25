import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getFiles } from "../../actions/file";
import FileList from './fileList/FileList'
import Popup from './Popup'
import { setPopupDisplay, setCurrentDir } from "../../reducers/fileReducer";

const Disk = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector(s => s.files.currentDir)
  const dirStack = useSelector(s => s.files.dirStack)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))
  }

  function backHandler() {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
  }

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back" onClick={() => backHandler()} >Назад</button>
        <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
      </div>
      <FileList/>
      <Popup/>
    </div>
  );
}

export default Disk;
