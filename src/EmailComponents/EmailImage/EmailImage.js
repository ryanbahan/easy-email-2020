import React from 'react';
import './EmailImage.css';
import { connect } from 'react-redux';

function EmailImage({mainImage, mainImageTagline, mainImageButtonCopy, mainImageButtonColor, mainImageButtonFontColor}) {
  return (
    <section className="email-image">
          <>
            <img src={mainImage} />
            <div className="email-image-bottom-bar">
              <p>{mainImageTagline}</p>
              <button style={{color: mainImageButtonFontColor, backgroundColor: mainImageButtonColor}}>{mainImageButtonCopy}</button>
            </div>
          </>
    </section>
  )
}

const mapStateToProps = state => ({
  mainImage: state.form.mainImage,
  mainImageTagline: state.form.mainImageTagline,
  mainImageButtonCopy: state.form.mainImageButtonCopy,
  mainImageButtonColor: state.form.mainImageButtonColor,
  mainImageButtonFontColor: state.form.mainImageButtonFontColor,
});

export default connect(mapStateToProps)(EmailImage);
