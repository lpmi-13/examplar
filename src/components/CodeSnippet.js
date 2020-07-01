import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const CodeSnippet = props => {
    const { code } = props;
    const json = JSON.parse(code);
    console.log(json);
    const {
        contents: {
            lines,
        },
        direct_link_to_file_line,
        project_source,
    } = json;
    return (
        <Fragment>
           <div className="project-source">project: {project_source}</div>
           <a className="github-link" href={`${direct_link_to_file_line}`} target="_blank" rel="noopener noreferrer">
             See it on github <FontAwesomeIcon icon={faGithub} />
           </a>
           <div className="code-content">
               {lines.map(({ line_content, line_number }) => {
                   return <div key={line_number} className="code-line">{line_number < 10 ? `  ${line_number}` : line_number}|{line_content}</div>
                   }
               )}
           </div>
        </Fragment>
    )
}

export default CodeSnippet;