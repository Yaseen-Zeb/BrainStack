# **From Local to Remote - Understanding GitHub**

## Table of Contents


1. **What is GitHub**
2. **Connecting Local & Remote Repositories**
3. **Understaning Personal Access Token**
4. **From Local to Remote - Understanding the Workflow**





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





# From Local to Remote - Understanding the Workflow
## Local Branches
The branches in the local computer, we can edit, make changes, commit code, experiment
`git branch`
Above command to list local branches e.g:
main
dev

## Remote Branches
The actual branches on the remote repository, cannot edit directly from your local Git
`git branch -r`
Above command to list remote branches e.g:
origin/HEAD -> origin/main
origin/dev
origin/main

## Remote-Tracking Branches
A read-only reference to a remote branch. Let your local Git know the state of the remote branch. A local branch tracks a remote-tracking branch to interact with the actual remote branch.
`git branch -a`
Above command to list local + remote-tracking branches e.g:
main
dev
remotes/origin/HEAD -> origin/main
remotes/origin/main
remotes/origin/dev

### Upstream (Tracking)
Upstream means that local branch knows which remote-tracking branch it belongs to.
`git branch -vv` 
-vv  = very verbose (more details), this command list local branches along with its relationship with remote-tracking-branchs e.g:
dev    65aee31 [origin/dev: ahead 1]
dev-1  65aee21
master c76ba4e [origin/master]
- * means current branch
- 65aee21 means short commit hash (last commit)
- [origin/main] means upstream (tracking) branch
- ahead 1 means local branch has 2 commits not pushed
- dev-1  65aee21 means no upstream/tracking information

### Working WITHOUT tracking (no upstream set)
If no upstream is configured:
`git push`
fatal: The current branch has no upstream branch
You must explicitly tell Git every time:
`git push origin main`
`git pull origin main`
#### Problems without tracking:
- More typing
- Easy to push to the wrong branch
- Git does not “remember” anything

### Working WITH tracking (upstream set)
#### Push new branch + set tracking
`git push -u origin new-branch`
When we create local branch, we can push + track to remote-tracking-branch

#### Make an existing local branch track a remote branch
`git branch --set-upstream-to=origin/dev dev`
or shortly
`git branch -u origin/dev dev`
Useful in cases:
- When we have local and remote-tracking-branches but they are not linked, we can also link diff branches like `git branch -u origin/dev main` this not make any sense.
- You renamed a branch and want to point to another upstream.

#### See all tracking info
`git branch -vv`
* feature-login  abc123 [origin/feature-login] Add login page
  main           def456 [origin/main] Initial commit

#### Remove tracking (unlink upstream)
`git branch --unset-upstream`
After this `git push` will not work then `git push origin branch-name`