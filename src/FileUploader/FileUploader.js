import React from 'react';
import './FileUploader.css';

export default function FileUploader(props) {
  return (
    <div class="upload-btn-wrapper">
      <button class="upload-btn">Upload file</button>
      <input type="file" name="myfile" class="logo-file-uploader"/>
    </div>
  )
}
