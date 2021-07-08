import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const textholder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

## dangerouslySetInnerHTML

**_dangerouslySetInnerHTML_** is React’s replacement for using **_innerHTML_** in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from React, but you have to type out _dangerouslySetInnerHTML_\n and pass an object with a __html key, to remind yourself that it’s dangerous.\n For example:
\`\`\`
// this is multi-line code:

function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![DantesSagan Logo](linkedin_banner_image_1.png)
`;

let marked = require('marked');
class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: textholder,
      edit: false,
      preview: false,
    };
  }
  
  updatedMarkdown = function (markdown) {
  
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
            placeholder={'Enter text'}
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
