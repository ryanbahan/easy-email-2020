import React from 'react';
import './FileUploader.css';
import { update, isLoading } from '../../utils/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FileUploader extends React.Component {

  getFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      this.props.isLoading(this.props.store);
      const formData = new FormData()
      formData.append('myFile', file);

        fetch("https://limitless-citadel-48645.herokuapp.com/saveImage", {
          method: "POST",
          body: formData
        })
        .then(res => res.json())
        .then(data =>
          {this.props.update({[this.props.store]: `https://limitless-citadel-48645.herokuapp.com${data.path}`});
            this.props.isLoading(false);
            console.log(this.props.store);
            }
          )
    }
  }

  render() {
    return (
    <div className="upload-btn-wrapper">
      <button className="upload-btn">Upload file</button>
      <input type="file" name="myfile" className="logo-file-uploader" onChange={this.getFile}/>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  update: content => dispatch(update(content)),
  isLoading: bool => dispatch(isLoading(bool)),
})

FileUploader.propTypes = {
  store: PropTypes.string,
  update: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(FileUploader);
