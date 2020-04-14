import React from 'react';
import './EmailHeader.css';
import { connect } from 'react-redux';

function EmailHeader({ companyImage, companyName }) {
  return (
      <header>
        <img src={companyImage} />
        <p>{companyName}</p>
      </header>
  )
}

const mapStateToProps = state => ({
  companyImage: state.header.companyImage,
  companyName: state.header.companyName,
})

export default connect(mapStateToProps)(EmailHeader);
