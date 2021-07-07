import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: [],
      preview: '',
    };
  }
  render() {
    return (
      <body className='body'>
        <div
          className='container-fluid d-flex align-items-center justify-content-center'
          id='editor'
        >
          <div className='d-flex card' id=''>
            <div className='card-body' id=''>
              <div className='card-header card-edit'>
                <div className='header-bar'>
                  Editor
                  <i className='fa fa-arrows-alt' aria-hidden='true'></i>
                </div>
              </div>
              <textarea value={this.state.preview}>
                <p>Hello there!!!</p>
              </textarea>
            </div>
          </div>
        </div>
        <div
          className='container-fluid d-flex align-items-center justify-content-center'
          id='preview'
        >
          <div className='d-flex card card-preview' id=''>
            <div className='card-body' id=''>
              <div className='card-header card-preview'>
                <div className='header-bar'>
                  Previewer
                  <i className='fa fa-arrows-alt' aria-hidden='true'></i>
                </div>
              </div>
              <div className='preview'>
                <h1>Hello there!!!</h1>
                <hr />
                <h2>Hello there!!!</h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default MarkDown;
