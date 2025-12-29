# **From Local to Remote - Understanding GitHub**

## Table of Contents


1. **What is GitHub**
2. **Connecting Local & Remote Repositories**
3. **Understaning Personal Access Token**





# What is GitHub
GitHub is a website where people store, share, and work together on code using Git.
## What GitHub is used for
- Store code online (repositories)
- Work with others on the same project
- Track changes (who changed what and when)
- Backup code safely
- Report issues and fix bugs
- Deploy projects (websites, apps)





# Connecting Local & Remote Repositories
Connecting local & remote mean:
- Local repository → project on your computer
- Remote repository → project on GitHub
- Connecting → telling Git where to send and get code from

## Initialize Git in your local project
`git init`

## Add files & commit locally
`git add .`
`git commit -m "Initial commit"`

## Connect local repo to GitHub (remote)
`git remote add origin https://github.com/username/learning-git.git`
`git remote -v` Check connection





# Understaning Personal Access Token
It is a password replacement used by GitHub
GitHub no longer allows account passwords for Git operations (push/pull). So instead of your GitHub password, you use a PAT.

## Why PAT is needed
When we run:
`git push`
GitHub asks:
Username: your-github-username
Password: PASTE-PAT-HERE not password

## What PAT does
- PAT allows Git to:
- Push code
- Pull code
- Access private repos
- Perform actions you allow

## Where PAT is stored?
Git stores it in credential manager
You don’t need to enter it every time