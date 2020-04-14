import React from 'react';
import { connect } from 'react-redux';
import './EmailFooter.css';

function EmailFooter({ name, address }) {
  return (
        <footer>
          <p>{name}</p>
          <p>{address}</p>
        </footer>
  )
}

const mapStateToProps = state => ({
  address: state.form.footerAddress,
  name: state.form.footerName
});

export default connect(mapStateToProps)(EmailFooter);
