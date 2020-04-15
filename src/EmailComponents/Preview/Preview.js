import React from 'react';
import EmailHeader from '../EmailHeader/EmailHeader';
import EmailImage from '../EmailImage/EmailImage';
import EmailImageTagline from '../EmailImageTagline/EmailImageTagline';
import EmailContent from '../EmailContent/EmailContent';
import EmailFooter from '../EmailFooter/EmailFooter';
import './Preview.css';

export default function Preview(props) {
  return (
    <section className="preview">
      <EmailHeader />
      <EmailImage />
      <EmailImageTagline />
      <EmailContent />
      <EmailFooter />
    </section>
  )
}
