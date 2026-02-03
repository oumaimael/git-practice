# Git Conflict Resolution Notes ⚔️

Notes on the simulation and manual resolution of a Git conflict in the Funky Calc project.

## 🧐 What is a Merge Conflict?
A conflict occurs when two different branches modify the **same line** in the same file, or when one branch deletes a file that another branch is modifying. Git cannot automatically decide which version to keep.

## 🔍 Identifying a Conflict
When a conflict happens during a `git merge` or `git pull`, Git will mark the file and add conflict markers:

<<<<<<< HEAD
    const [display, setDisplay] = useState('10'); // Version on current branch
=======
    const [display, setDisplay] = useState('5'); // Incoming version
>>>>>>> feature-branch


- `<<<<<<< HEAD`: Start of the changes on your current branch.
- `=======`: Separator between the two versions.
- `>>>>>>> feature-branch`: End of the changes from the incoming branch.

## 🛠 Manual Resolution Steps

1.  **Open the File**: Locate the conflict markers in your editor (e.g., `Calculator.jsx`).
2.  **Choose the Winner**: Decide which code to keep:
    - Keep your version.
    - Keep the incoming version.
    - OR combine both manually.
3.  **Remove Markers**: Delete the `<<<<<<<`, `=======`, and `>>>>>>>` lines entirely.
4.  **Clean Up**: Ensure the remaining code is syntactically correct.
5.  **Finalize**:
    ```bash
    git add src/components/Calculator.jsx
    git commit -m "fix: resolve merge conflict in Calculator.jsx"
    ```

## 💡 Pro Tip
Always test your application (`npm run dev`) after resolving a conflict to ensure that the manual fix didn't break the logic! 🚀
