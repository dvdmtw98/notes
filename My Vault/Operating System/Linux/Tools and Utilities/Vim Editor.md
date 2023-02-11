---
title: Vim Editor
tags: [os, linux, tools]
---

### Operation Modes

Vim is an model editor. It has various modes that are used for various types of usage.  
The commonly used mode is the normal and insert mode

* Normal Mode (Esc/ Ctrl + `[`) - Used for moving around files
* Insert Mode (I) - Used for inserting text
* Replace Mode (R) - Used for replacing text
* Visual Mode (V) - For selecting blocks of text
* Visual Line `<S - V>`
* Visual Block `<C - V>`
* Command Line Mode (:) - Used for running a command

**<u>Shortcut Notation</u>**  
All the below notations represent Ctrl + V  
^V  
Ctrl - V  
`<C - V>`

---

### Buffers, Windows, Tabs

* Vim can have multiple tabs
* Each tabs can have windows which correspond to an buffer (file)
* Vim does not have 1 to 1 correspondence between buffer and windows
* An buffer can be opened in 0 or more windows at a time (Other editors only 1 is allowed)

---

### Command Mode

:q (Exit Vim/ Close current window)  
:qa (Close at open windows)  
:q! (Force Exit)  
:w (Write changes to file)  
:help :w (Help on :w command)  
:sp (Split Pane)  
:vsp (Vertical Split Pane)

> [!NOTE]
> `<C - W>`,  `<C - W>` or `<C - W>` direction is used for moving between panes

---

### Normal Mode

The commands below can be classified into movements, edit, counts and modifier

1. <u>Movement</u>  
j (Move Down)  
k (Move Up)  
l (Move Left)  
h (Move Right)

2. <u>Undo, Redo</u>  
u (Undo)  
Ctrl + R (Redo)

3. <u>Move by Word</u>  
w (Move ahead by a word)  
e (Move ahead at the end of word)  
b (Move back by a word)

4. <u>Move in Line</u>  
`^` (Move to 1st non empty character at Start of Line)  
0 (Move to Start of Line)  
`$` (Move to End of Line)

5. <u>Move by Page</u>  
Ctrl + d (Move down a page)  
Ctrl + u (Move up a page)

6. <u>Move in File</u>  
G (Move end of file)  
gg (Move to the start of file)

7. <u>Move on Page</u>
L (Lowest line on page)  
M (Middle line on page)  
H (Highest/ First line on page)

8. <u>Find Character</u>  
`f{char}` (Find `char` forward)  
`F{char}` (Find `char` backwards)  
`t{char}` (To character before `char`)  
`T{char}` (To character after `char`)

9. <u>Search in File</u>  
`/` (Forward Search)  
? (Backward Search)  
n (Next Match)  
N (Previous Match)

10. <u>Insert new line</u>  
o (Enter insert mode and add new line below)  
O (Enter insert mode and add new line above)

11. <u>Inserting Text</u>  
Shift + I (Insert text at Beginning of Line)  
Shift + A (Append at the End of Line)  
i (Insert Text)  
a (Append Text)

12. <u>Delete Operation</u>  
dw (Delete Word)  
de (Delete till end of word)  
dd (Delete a line)  
dG (Delete everything in a file)

13. <u>Change Buffer (Puts you in Insert Mode)</u>  
cw (Change entire word)  
ce (Change till end of word)  
cc (Change entire line)

14. <u>Character Operations</u>  
x (Delete Character)  
r (Replace a character)  
Ctrl + R (Replace a Characters in Replace Mode)

15. <u>Cut, Copy, Paste</u>  
yw (Yank Word)  
ye (Yank till end of word)  
yy (Yank/ Copy a Line)  
yG (Yank entire File)  
p (Paste)  
d (Cut)  
`.` (Repeat the last operation)

> [!NOTE]
> Some of the commands like u, dw, e can be used along with a number as well.  
> So for deleting 5 words we can use 5dw. For undoing 3 operations we can use 3u

16. <u>Modifier</u>  
`ci[` (Change inside `[`)  
`di[` (Delete content inside `[`)  
`da[` (Delete everything inside including `[`)  
`%` (Jump between parenthesis)

---

### Visual Mode

We can use the Normal Mode movement commands to move around but here text will get selected. This applies to all the three visual editing mode

y (Copy and Change to Normal Mode)  
p (Paste)  
`~` (Changes Case)

---

[Linux Tools & Utilities](Linux%20Tools%20&%20Utilities.md)