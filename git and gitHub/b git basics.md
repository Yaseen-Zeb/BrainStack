# **Git Basics**

## 📑 Table of Contents


1. **Initializing the Repository, Creating the First Commit & log**





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
- You modify files in the working tree
- Then you git add them to the staging area
- And finally, you git commit them to the local repository (HEAD)

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
Commit Hash (SHA-1 checksum): A unique identifier for the commit.
Author: The name and email address of the person who made the commit.
Date: The timestamp of when the commit was made.
Commit Message: A description of the changes introduced in the commit.