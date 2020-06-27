import React from 'react';

const CodeSnippet = props => {
    const { code } = props;
    const json = JSON.parse(code);
    console.log(json);
    return (
        <div>
           <a href={`${json.direct_link_to_file_line}`}>{json.direct_link_to_file_line}</a>
           <div className="code-content">{json.contents.lines[0].line_content}</div>
        </div>
    )
}

export default CodeSnippet;