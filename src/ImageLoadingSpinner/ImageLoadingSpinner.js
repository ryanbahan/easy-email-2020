import React from 'react';

const ImageLoadingSpinner = () => {
  return <div style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.15)"}}><i className="fas fa-spinner fa-pulse" title="spinner"></i></div>
}

export default ImageLoadingSpinner;
