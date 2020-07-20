This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary

A simple post reader as a React SPA.

## Run in local

```
npm start
```

Then open http://localhost:3000/ in browser.

## Live demo

https://alexeimoisseev.github.io/react-assignment/

## What is present

* Login Screen with email and name inputs.
* Sender list with sender name and post count ordered by name alphabetically.
* Clicking on a sender opens that sender's posts in the post list view.
* Post list where posts are ordered by creation time.
* Post order buttons to allow choosing most recent first and most recent last ordering for posts list
* Search box for senders. Any senders whose name do not contain the text entered are hidden
* Search box for posts. Any posts that do not contain the text entered are hidden
* Deep-linkable post list. This means that it is possible to enter a URL that directly selects the sender whose posts are shown.

## Other notes

* Routing is using hashes, to be possible to serve on `gh-pages`.
* To go back from selected user to all posts, click again on selected user in the list (should be improved in future versions).
* Not mobile-friendly.
* Tests are missing.
