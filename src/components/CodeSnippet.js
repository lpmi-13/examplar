import React from 'react';

const CodeSnippet = ({ lines }) => {
    return (
        <div className="code-content">
            {lines.map(({ line_content, line_number }) => {
                return <pre key={line_number} className="code-line">{line_number < 10 ? ` ${line_number}` : line_number}| {line_content}</pre>
                }
            )}
        </div>
    )
}

export default CodeSnippet;