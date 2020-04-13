import React from 'react';
import './FileUploader.css';

export default function FileUploader(props) {
  return (
    <div className="upload-btn-wrapper">
      <button className="upload-btn">Upload file</button>
      <input type="file" name="myfile" className="logo-file-uploader"/>
    </div>
  )
}
