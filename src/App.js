import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

let marked = require('marked');

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      edit: false,
      preview: false,
    };
  }
  updatedMarkdown = function(markdown) {
    this.setState({
      markdown,
    });
  };
  handleEditMax() {
    this.setState(() => ({
      edit: !this.state.edit,
    }));
  }
  handlePreviewMax() {
    this.setState(() => ({
      preview: !this.state.preview,
    }));
  }
  handleChange() {
    this.setState((e) => ({
      markdown: e.target.value,
    }));
  }
  render() {
    return (
      <div className='body'>
        <div
          className='container-fluid d-flex align-items-center justify-content-center'
          id='ed'
        >
          <div className='d-flex card'>
            <div className='card-header card-edit'>
              <div className='header-bar'>
                Editor
                <i className='fa fa-arrows-alt' aria-hidden='true'></i>
              </div>
            </div>
          </div>
        </div>
        <section className='container-fluid d-flex align-items-center justify-content-center'>
          <textarea
          placeholder={"Enter text"}
            value={this.state.markdown}
            id='editor'
            type='text'
            className='d-flex card align-items-center justify-content-center'
            onChange={(event) => {
              this.updatedMarkdown(event.target.value);
            }}
          >
            <p>Hello there!!!</p>
          </textarea>
        </section>
        <div
          className='container-fluid d-flex align-items-center justify-content-center'
          id='pre'
        >
          <div className='d-flex card card-preview' id=''>
            <div className='card-body' id=''>
              <div className='card-header card-preview'>
                <div className='header-bar'>
                  Previewer
                  <i className='fa fa-arrows-alt' aria-hidden='true'></i>
                </div>  
              </div>
              <div
                id='preview'
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
                className='preview'
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkDown;
