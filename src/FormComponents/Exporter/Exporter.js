import React from 'react';

const Exporter = () => {

  const getItems = async () => {
    const email = document.querySelector('.preview').outerHTML;
    await navigator.clipboard.writeText(email);
  }

  return <button onClick={() => getItems()}>Export</button>
}

export default Exporter;
