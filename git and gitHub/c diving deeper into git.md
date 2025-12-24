# **Diving Deeper Into Git**

## Table of Contents


1. **Understanding the Stash**
2. **Combining Branches**





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





# Combining Branches
## What is a Merge
A merge combines changes from one branch into another.
`git switch main`
`git merge feature`
This brings changes from feature into main.

## Understanding Merge Types
Git mainly has two merge types:
- Fast-Forward Merge
- Recursive (Non-Fast-Forward) Merge

### Fast-Forward Merge
A fast-forward merge happens when:
main:    A──B
feature:    └──C──D
The target(current) branch has no new commits
Result after merge:
main:    A──B──C──D
No new commit is created

#### Characteristics
| Feature      | Fast-Forward 
| ------------ | ------------ 
| New commit   | No       
| History      | Linear       
| Safe         | Yes        
| Merge commit | No Merge commit 

Force Fast-Forward only
`git merge --ff-only feature`



### Recursive Merge (Non-Fast-Forward)
A recursive merge happens when:
Both branches has new commits
main:    A──B──E
feature:    └──C──D
Result after merge:
        ┌──C──D
A──B──E────────M
Git automatically creates a recursive merge if needed.

#### Characteristics
Characteristics
| Feature       | Recursive Merge
| ------------- | ---------------
| New commit    | Yes          
| History       | Non-linear     
| Shows branch  | Yes          
| Used in teams | Yes   

Force non-fast-forward merge
`git merge --no-ff feature`



## What is Squash?
Squash means combining multiple commits into a single commit.
Purpose: clean and readable commit history

### Why Use Squash?
You made many small commits:
- fix typo
- debug
- small change
You want one meaningful commit before merging

### Command
`git merge --squash feature`
- Combines all commits from feature
- Does not create a merge commit
- Changes go to staging area
- You create one new meaningful commit like `git commit -m "Add login feature"`
Before:
A──B──C──D  (feature)
After squash merge:
A──E        (main)
Squash combines multiple commits into one to keep Git history clean.



## What is Cherry-Pick?
Cherry-pick means applying/copy a specific commit from one branch onto another branch.
You pick one commit(applying/copy), not the whole branch(merge).

### Why Use Cherry-Pick?
- You need one bug fix from another branch
- You don’t want to merge the whole branch
- You want a specific feature or fix only

### Command
`git cherry-pick <commit-hash>`
Git copies the changes of that commit
Creates a new commit on the current branch
Commit hash is different
Before:
feature: A──B──C
main:    A──D
Cherry-pick C →
After:
feature: A──B──C
main:    A──D──C'
(C' = new commit, same changes, new hash)

Cherry-Pick Multiple Commits
`git cherry-pick commit1 commit2`







