import React from 'react';
import './EmailHeader.css';
import { connect } from 'react-redux';

function EmailHeader({ companyImage, companyName }) {

  return (
      <header>
      {console.log('header', companyImage)}
        <img src={companyImage} />
        <p>{companyName}</p>
      </header>
  )
}

const mapStateToProps = state => ({
  companyImage: state.form.companyImage,
  companyName: state.form.companyName,
})

export default connect(mapStateToProps)(EmailHeader);
