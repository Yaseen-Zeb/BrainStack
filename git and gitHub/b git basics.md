# **Git Basics**

## Table of Contents


1. **Initializing the Repository, Creating the First Commit & log**
2. **Understanding & Creating Branches**
3. **Merging Branches**
4. **Deleting / Undoing Changes**





# Initializing the Repository, Creating the First Commit & log
Repository means a storage space that contains all the files for a project, along with their complete revision history. i.e .git folder.
`git init`
When you run git init, Git creates a hidden .git subdirectory in your project folder. This directory contains all the necessary structure, metadata, and objects (like commits, branches, and configurations) that Git needs to start tracking changes to your files.

Now doing some work and store them in git(history) we need to add that changes in **Stage Area** because stage area is the place from where git store changes.
`git add file-name or .`
This command add changes to Stage Area.

Now as Stage Area has changes the next step is to commit them (mean store them in git history).
`git commit -m 'first commit'`
This command store the Stage Area changes in git history.

## Note
The standard Git workflow involves moving changes sequentially through these areas:
- You modify files in the working directory
- Then you git add them to the staging area
- And finally, you git commit them to the local repository
**So**: Working Directory  →  Staging Area  →  Repository

## Related things

### git status
Command `git status` displays the current state of your working directory and the staging area.
#### Common git status Scenarios**
- Clean working directory
- New file created
- File modified and staged

### git log
The `git log` command is used to display the commit history of a Git repository
#### Default Output
- Commit Hash (SHA-1 checksum): A unique identifier for the commit.
- Author: The name and email address of the person who made the commit.
- Date: The timestamp of when the commit was made.
- Commit Message: A description of the changes made in the commit.





# Understanding & Creating Branches
## What is a Branch?
A branch is an independent line of development.
Think of it like:
- A parallel copy of your project
- Where you can work without affecting main code
### Important
Branches allow you to:
- Work on new features safely
- Fix bugs without breaking production code
- Collaborate with other developers
- Keep main branch clean and stable

# Viewing Branches
`git branch`
Shows all local branches
Current branch is marked with *

# Creating a Branch
`git branch feature-auth`
- Creates a new branch
- Does NOT switch to it

# Switching Branches
`git checkout feature-auth`
OR (newer & recommended):
`git switch feature-auth`

# Create + Switch in One Command
`git switch -c feature-auth`
- Creates the branch & Switches to it immediately

## Note 
If we craete a new branch based on another branch then all commits will be teken/copy into the the new branch.





# Merging Branches
Merging means combining changes from one branch into another. 
## Simple Branch Workflow Example
```bash 
git switch -c feature-login
# make changes
git add .
git commit -m "add login feature"

git switch main
git merge feature-login 
# Changes from feature-login are now in main
```





# Deleting / Undoing Changes
Git has three main areas. Deleting or undoing depends on which area you target.
- Working Directory
- Staging Area
- Repository (Commits)

## Deleting / Undoing from Working Directory
What this mean is
- File is created, modified or deleted locally
- Git has not been told to save this change
Now here two parts come Tracked Changes and Untracked Changes.

### Tracked Changes
The changes in the file which is committed 
#### Undo Tracked Changes
`git restore file.txt`
`git restore .`
This command undo the tracked changes to the latest commit stage permanently.
As these undo permanently and are irreversible so first check the status
`git status`


### Un-Tracked Changes
The changes which is not committed, ie creating new file/folders
#### Undo Un-Tracked Changes
`git clean -f file-name`
`git clean -f`
Permanently delete untracked files only
`git clean -fd directory-name`
`git clean -fd`
Permanently delete untracked directories and files
As these undo permanently and are irreversible so first check the things by command
`git clean -n`
This list what will be deleted



## Deleting / Undoing from Staging Area
What this mean is
- Changes are ready to be committed
- But not saved in history yet

### Unstage a file
`git restore --staged file-name.txt`
`git restore --staged .`
File moves back to Working Directory
File content is not lost



## Deleting / Undoing from Repository
What this mean is changes are part of Git history
Now here is different parts if Repository like commits, branches, tags ect.

### Commits
#### Safe way (Recommended)
`git revert <commit-hash>`
- Creates a new commit that undoes changes
- History remains intact

#### Reset commit but keep files
`git reset --soft HEAD~1`
`git reset --soft <commit-hash>`
Commit removed & Changes stay staged
`git reset HEAD~1`
`git reset <commit-hash>`
Commit removed & Changes stay unstaged

#### Dangerous way (Data loss)
`git reset --hard HEAD~1`
`git reset --hard <commit-hash>`
Commit deleted & File changes deleted



### Branches
#### Safe delete
`git branch -d branch-name`
- Deletes the branch only if it is fully merged
- Prevents accidental data loss

#### Force delete (dangerous)
`git branch -D branch-name`
- Deletes the branch even if not merged
- Commits may be lost if no other branch points to them

#### Delete a Remote Branch
`git push origin --delete branch-name`
- Deletes branch from remote repository (GitHub/GitLab)
- Local branch may still exist





