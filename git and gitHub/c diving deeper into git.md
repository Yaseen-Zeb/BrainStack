# **Diving Deeper Into Git**

## Table of Contents


1. **Understanding the Stash**





# Understanding the Stash
## What is Stash
Git Stash is used to temporarily save (hide) your working directory changes and staged changes or also can say that uncommitted changes so you can:
- Switch branches
- Pull new changes
- etc..
Without committing incomplete work.

## Why Use Stash
You are working on a feature -> Suddenly need to switch branches -> Your work is not ready to commit -> so git stash

## Basic Stash Commands
### Stash tracked files
`git stash`
`git stash push -m "work in progress"`
- It saves tracked file changes
- Does NOT save untracked files by default

### Stash untracked files
`git stash -u`
It saves untracked changes + tracked changes

### View stash list
`git stash list`
It list all stash history like:
stash@{0}: WIP on main: abc123 message
stash@{1}: WIP on main: def123 message

### Apply stash
`git stash apply`
`git stash apply 1`
Restores last stash changes or restore chages of specific stash in the history

### Drop a stash
`git stash drop 4`

### Clear all stashes
`git stash clear`