import React from 'react';

export default function Exporter(props) {

  const getItems = async () => {
    const email = document.querySelector('.preview').outerHTML;
    await navigator.clipboard.writeText(email);
  }

  return <button onClick={() => getItems()}>Export</button>
}
