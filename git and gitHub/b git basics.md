# **Git Basics**

## 📑 Table of Contents


1. **Initializing the Repository & Creating the First Commit**





# Initializing the Repository
Repository means a storage space that contains all the files for a project, along with their complete revision history. i.e .git folder.
`git init`
When you run git init, Git creates a hidden .git subdirectory in your project folder. This directory contains all the necessary structure, metadata, and objects (like commits, branches, and configurations) that Git needs to start tracking changes to your files.

Now doing some work and store them in git(history) we need to add that changes in **Stage Area** because stage area is the place from where git store changes.
`git add file-name or .`
This command add changes to Stage Area.

Now as Stage Area has changes the next step is to commit them (mean store them in git history).
`git commit -m 'first commit'`
This command store the Stage Area changes in git history.

