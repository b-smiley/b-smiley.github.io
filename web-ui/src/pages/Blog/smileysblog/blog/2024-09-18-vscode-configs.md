---
slug: VSCodeConfigs
title: Be More Productive in VS Code
date: 2025-6-21
authors: smiley
tags: [software]
---

A reference for productive Visual Studio Code hotkeys and configurations.

<!-- truncate -->

## TLDR

This is a quick reference for useful Visual Studio Code (VsCode) configurations that I use. It includes custom keybindings and default keybindings that I find helpful for productivity. I apologize for the lack of explanation, but I wanted to keep this as a quick reference. I hope you learn a new hotkey or configuration that you find useful.

## Custom

1. `CTRL + R + CTRL + R` to run code
   - Custom Python run command. Go to keyboard shortcut settings and search for "python" to find multiple python run commands. I bind one of these to a custom hotkey to speed up my workflow.
2. `CTRL + ALT + ?` to go to definition
   - Super useful for navigating code quickly. Instead of doing `CTRL + Click` to go to definition, I use this hotkey to quickly jump to the definition of a function or variable. This is especially useful in large codebases where you need to navigate through multiple files. You can combine this with `ALT + ←` and `ALT + →` to navigate through the history of definitions you have visited. **These 3 hotkey combos are by far my most used hotkeys**. I can understand how code is related much quicker.
3. `ALT + ?` to view definition or error message on hover

   - Super useful for understanding code quickly. Anything you typically can see when you hover over it will be available with this hotkey. This can show variable types, function docstrings, warning messages, and more.

4. Format on Save (`CTRL + S`)
   - Configure in settings, search for "format on save" and enable it.

## Visual Studio Code Defaults

1. `Alt + ←` or `Alt + →` to navigate through history
   - Used in conjunction with `CTRL + ALT + ?` to navigate through definitions and errors. **These 3 hotkeys are my most used hotkeys by far**.
2. `CTRL + 1 / 2 / 3 / 4` to navigate through different text editor groups
3. `CTRL + T` to switch files within the current editor group
4. `CTRL + Shift + P` to open command palette
5. `CTRL + D` get matching occurrences of selected text
6. `Home` and `End` to move to beginning and end of line
7. `Shift + Home` and `Shift + End` to select to beginning and end of line
8. `Shift + Alt + ↑` or `Shift + Alt + Down` to move line up or down
9. `CTRL + F` to find text within the file
10. `CTRL + SHIFT + F` to find text across all files
    - This is a must for massive codebases. Good luck finding a class's method usage without this.
11. `CTRL + ?` to toggle comments
    - This had built-in language detection, so it will comment out the code in the language you are using. For example, in Python it will use `#`, in C++ it will use `//`, and in HTML it will use `<!-- -->`. Now you don't have to remember the comment syntax for each language you use!
12. `CTRL + ←` or `CTRL + →` to move the cursor to the next or previous word

I will continue to update this page with more useful configurations as I discover them. If you have any suggestions, feel free to reach out!
