import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == ' \`\`\` ' && lastLine == ' \`\`\` ') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

--------------------------------------------
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const App = () => {
  const [text, setText] = useState(placeholder);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div class="mb-3">
        <h2 id='label-app'>Markdown Editor</h2>
        <textarea class="form-control" id="editor" rows="5" onChange={handleChange}
        value={text}></textarea>
      </div>

      <h2 id='label-app'>Markdown Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
};

export default App;
