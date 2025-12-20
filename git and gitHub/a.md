**undo unstaged work**
# git checkout/restore file-name/.
Used to discard unstaged changes.
- Restores the file to the last commit
- Works only for tracked (existing) files mean (Does NOT undo new/untracked files)
# git clean -f (clean unstaged files only)
# git clean -fd (clean unstaged files and directories)
Used to discard staged files/folders only, not the new changes in tracked(old) files. its mean (Works only on unstaged / untracked items. Does NOT affect tracked files)
- Irreversible (cannot be undone)
- Tip (Recommended)
- - git clean -n
- - Preview what will be deleted before running -fd.


**undo staged work**
# git reset file-name/. OR git restore --stage file-name/.
Used to discard staged changes.
- Unstage the staged changes.
- and if you need to more undo a file or all changes, then you can use above commands to remove tracked changes or untracked files




**for uncommited work**
# git stash
It undo all uncommit changes to the latest commit and also create a history point of stash from which changes you stashed.
# git stash push -m "file 1 added"
Same undo all uncommit changes to the latest commit and also create a history point of stash from which changes you stashed with a `feature 1 added` through which stashes easily identify.
# git stash list
It list the history of all stashes like 
`stash@{0}: On master: feature 2 added`
`stash@{1}: On master: feature 1 added`
# git stash apply
It again apply the stash changes to the latest stash byDefault stash 0
# git stash apply n
It apply the stash changes to the n stash
# git stash drop n
It delete the target(n) stash history
# git stash clear
It delete all stash history
## Important
here for undo unstaged changes we look restore and stash commands so
**restore** use for undo mistakes because in not keep track and delete things permanantly
**stash** use to jump 



**listing**
# git log
It list alive commits (messages, ids)
# git reflog
It list all(deleted and alive) commits,resets,checkouts,merges



**Delete and lost data back of commit/branch**
# git reset --hard commit-ids
It reset the `Head and changes` to the target commit and the above all commits deleted.
# git reset --soft commit-ids
It reset the `only Head` to the target commit `not changes` and the above all commits deleted.
Note: By soft reset the changes go to target commit but as stash
`now as by reseting the branches delete so we can also again reset by knowing their ids through commant git reflog`
# git branch -b branch-name
by this command all target branch along with its commits will be deleted.
now there are two ways of getting that branch back
- First method is to create branch with that name and than hard reset the with commit id of deleted branch which you can get through reflog.
- Second method is checkout to commit id of deleted branch which you can get through reflog then create branch with that name and checkout to that branch.


**Merge**
The main purpose of merge is combining the changes of the branches.
Types:
There are multi types of merges with their own behaivor
# Fast-Forword-merge (git merge feature-branch)
- This merge occur in the scenario where you have some commits in the main-branch and then create new branch (feature-branch) and do some commits and then switch to main-branch and do `git merge feature-branch`.
- This adds the new (commits,changes,commit-history) of feature-branch to the main-branch. 
- 
# Recurive-merge (git merge feature-branch)
- This merge occur in the scenario where you have some commits in the main-branch and then create new branch (feature-branch) do some commits and then switch to main-branch and do some others commits  and then do `git merge feature-branch`.
- This adds the new (commits,changes,commit-history) of feature-branch to the main-branch along with new merge commit.

- The main difference in  both is merge commit


# Squash (git merge --squash feature-branch)
To "squash" in Git means to combine multiple commits into one custom commit.


# Merge-conflicts
Merge-conflicts occur in resursive-merge when same file and same line are changed in both branches.


# Cherry-pick (git cherry pick commit-ID)
- This pick/add/merge the changes of target commit-ID into the current branch.

# Tags (git tag 1.0 commit-ID)
- This add tag to the commit so that easily see the back changes.
# List All Tags (git tag)
# Switch to tag (git checkout 1.0)
# Create Tag
- Lightweight Tag **git tag 1.0 commit-id"**
- Annotated Tag **git tag -a 1.0 commit-id -m "Release version 1.0"**(store meta data like user email, date/time, msg etc)








 






**for lost data back**
there can be two senarios
1 commit deletion/reset
2 branch delection
# 
