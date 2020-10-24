import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getFiles, createDir } from "../../actions/file";
import FileList from './fileList/FileList'

function Disk() {
  const dispatch = useDispatch()
  const currentDir = useSelector(s => s.files.currentDir)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  function createDirHandler() {
    dispatch(createDir(currentDir, 'fffffffffff'))
  }

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back">Назад</button>
        <button className="disk__create" onClick={() => createDirHandler()}>Создать папку</button>
      </div>
      <FileList/>
    </div>
  );
}

export default Disk;
