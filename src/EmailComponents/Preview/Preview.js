import React from 'react';
import EmailHeader from '../EmailHeader/EmailHeader';
import EmailImage from '../EmailImage/EmailImage';
import EmailContent from '../EmailContent/EmailContent';
import EmailCTA from '../EmailCTA/EmailCTA';
import EmailFooter from '../EmailFooter/EmailFooter';
import './Preview.css';

export default function Preview(props) {
  return (
    <section className="preview">
      <EmailHeader />
      <EmailImage />
      <EmailContent />
      <EmailCTA />
      <EmailFooter />
    </section>
  )
}
