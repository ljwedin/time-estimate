import { useEffect, useState } from 'react';
import useFetch from 'use-http';
import { IssueType } from '../helpers/Types';
import Issue from './Issue';

export default function LoadIssues () {
    const [issues, setIssues] = useState([] as IssueType[]);
    const { get } = useFetch("https://api.github.com/repos/ljwedin/issues-template");
    // const { post } = useFetch("https://time-estimate-backend.herokuapp.com/");

    const getIssues = () => {
        get("/issues?state=all")
        .then(data => {
            let fetchedIssues = [];
            for (let post in data) {
                fetchedIssues.push({
                    url: data[post].html_url,
                    issueId: data[post].id,
                    title: data[post].title,
                    assignees: data[post].assignees,
                    created: data[post].created_at,
                    body: data[post].body
                })
            }
            setIssues(fetchedIssues);
        })
    }

    useEffect(() => {
        getIssues();
    }, [])

    useEffect(() => {
        console.log(issues);   
    }, [issues])
    
    return (
        <div>
            <h1>Issues:</h1>
            {
                issues.map((issue: IssueType, index: number) => (
                    <Issue issue={issue} key={index} />
            ))}
        </div>
    )
}