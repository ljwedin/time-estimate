import React, { useEffect, useState } from 'react';
import { IssueType } from '../helpers/Types';

interface Props {
    issue: IssueType;
}

export default function Issue ({issue}: Props) {
    const [newIssue, setNewIssue] = useState({} as IssueType);

    useEffect(() => {
        setNewIssue(issue);
    }, [issue])
    
    return (
        <div className="issue">
            <p>Issue</p>
            <a href={newIssue.url} target="_blank" rel="noreferrer">{newIssue.title}</a>
        </div>
    )
}