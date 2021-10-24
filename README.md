# Heroku server
https://time-estimate-backend.herokuapp.com/

# Heroku endpoints
/issues     post/get
/estimates  post/get

# GitHub API
https://api.github.com/repos/ljwedin/issues-template/issues?state=all

# GitHub Issues -> Heroku schema
url: req.body.url,
issueId: req.body.issueId,
title: req.body.title,
body: req.body.body,
assignees: req.body.assignees,
created: req.body.created,
estimates: req.body.estimates

# GitHub API structure
"url": "https://api.github.com/repos/ljwedin/issues-template/issues/7",
"id": 1032204165,
"title": "Planning: Component structure",
"assignees": [],
"created_at": "2021-10-21T08:25:24Z",
"body": "Write a chart with planned component structure",