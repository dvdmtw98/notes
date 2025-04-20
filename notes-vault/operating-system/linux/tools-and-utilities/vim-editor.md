---
title: Vim Editor
tags:
  - linux
  - tool
  - editor
date: 2024-01-28 14:15:56 -0600
updated: 2024-05-21 18:02:39 -0500
---

## Vim Modes
It has various modes that are used for to perform different types of action    
The commonly used mode is the normal and insert mode

Command Line Mode (`:`): Used for running a command  
Normal Mode (`Esc`): Used for modifying files  
Insert Mode (`i`): Used for inserting text  
Visual Mode (`v`): Select text  
Visual Line (`<S-V>`): Select lines of text  
Visual Block (`<C-V>`): Select blocks of text  
Replace Mode (`r`): Used for replacing text  

## Buffers, Windows, Tabs

Vim can have multiple tabs  
Each tabs can have windows which correspond to an buffer (file)  
Vim does not have 1 to 1 correspondence between buffer and windows  
An buffer can be opened in 0 or more windows at a time

## Command Mode

`:q` - Exit Vim (Close current window)  
`:qa` - Close all open windows  
`:q!` - Force Exit  
`:w` - Write changes to file  
`:help :w` - Help on :w command  
`:sp` - Split Pane  
`:vsp` - Vertical Split Pane

## Normal Mode
The commands below can be classified into movements, edit, counts and modifier

### Inserting Text
`i`: Insert text before the cursor  
`a`: Insert text after the cursor (Append)  
`o`: Insert text on a new line below

`I`: Insert text at the start of the line  
`A`: Insert text at the end of the line (Append)  
`O`: Insert text on a new line above

### Movement Keys
`j`: Down  
`k`: Up  
`l`:Left  
`h`: Right

Arrows keys also work for navigation  
`10h`: Jump "10" characters left (General: `<num><nav-key>`)

`gg`: Jump to the start of file  
`G`: Jump to end of file    
`{num}G`: Jump to line

#### Move on Word
`w`: Jump ahead by a word (Punctuation considered word)  
`W`: Jump ahead by a word (Spaces separate words)

`e`: Jump to the end of word (Punctuation considered word)  
`E`: Jump to the end of word (Space separates words)

`b`: Move back by a word

#### Move on Line
`^`: Start of line (Non-empty character)  
`0`: Start of line  
`$`: End of line

#### Move on Page
`L`: Lowest line on page  
`M`: Middle line on page  
`H`: Highest line on page

`<C-d>`: Move down a page    
`<C-u>`: Move up a page

`zz`: Enter viewport (Cursor middle of screen)

### Cut, Copy, Delete

#### Delete Commands
`dw`: Delete from cursor till start of next word  
`de`: Delete from cursor till end of current word  
`dd`: Delete a line  

`daw`: Delete word (includes space after word)  
`diw`: Delete word (doesn't include space after word)  

`d$` & `D`: Delete from cursor till end of line  
`d0`: Delete from cursor till start of line

`dgg`: Delete from cursor till start of file  
`dG`: Delete from cursor till end of file

#### Copy Commands
`yw`: Yank from cursor till start of next word  
`ye`: Yank from cursor till end of current word  
`yy` & `Y`: Yank a Line  

`ygg`: Yank from cursor till start of file  
`yG`: Yank from cursor till entire of file

`viw` + `y`: Visual select word and yank  
`"{reg-num}y`: Yank to register `reg-num`

`+`: System Clipboard Register  
`%`: Filename Register

#### Paste Commands
`p`: Paste below  
`P`: Paste above

`"{reg-num}p`: Paste value in `reg-num`

#### Undo & Redo
`u`: Undo  
`<C-r>`: Redo

#### Change Commands
Deletes the content and puts you in Insert Mode

`cw`: Change from cursor till start of next word  
`ce`: Change from cursor till end of current word  
`cc` Change the line

`c$` & `C`: Change from cursor till end of line

On non-space character `cw` & `ce` both change till the start of the next word    
[Why do \`cw\` and \`ce\` do the same thing? - Vim Stack Exchange](https://vi.stackexchange.com/questions/6194/why-do-cw-and-ce-do-the-same-thing)

### Text Selections

`vt"`: Select forward till `"`  
`vT"`: Select backwards till `"`  
`vf"`: Select forward including `"`  
`vF"`: Select backwards including `"`

### Character Operations
`x`: Delete Character  
`r`: Replace a character  

Ctrl + R (Replace a Characters in Replace Mode)

### Find Character
`f{char}`: Jump to `char` forward    
`F{char}`: Jump to `char` backwards  

`t{char}`: Jump to character before `char`  
`T{char}`: Jump to character after `char` (backwards)

### Modifier Commands
`ci[`: Change everything inside `[`  

`di[`: Delete everything inside `[`  
`da[`: Delete everything inside including `[`  

`yi[`: Yank everything inside `[`

In the above command `[` can be replaced by a different symbol

`%`: Jump between parenthesis  
`d%`: Delete everything including parenthesis    
`y%`: Yank everything including parenthesis  
`c%`: Change everything including parenthesis

> [!INFO]
> Some of the commands like u, dw, e can be used along with a number as well.  
> So for deleting 5 words we can use 5dw. For undoing 3 operations we can use 3u

## Visual Mode
Normal Mode movement commands are used to select text

`d`: Delete selection  
`y`: Yank selection (Copy)  
`c`: Change selection  

`~` (Changes Case)

## Intermediate Concepts

### Formatting

`>>`: Indent Right    
`>>`: Indent Left  

`==`: Indent Code  
`=G`: Indent Code till end of file

In Visual mode only need to press key once

### Search in File
`/`: Forward Search  
`?`: Backward Search  

`n`: Next Match  
`N`: Previous Match

Match selected token (Cursor over token)  
`*`: Next Match  
`#`: Previous Match  

### Marker Waypoints
`m{lower-char}`: Marker  
`'{lower-char`: Jump to marker  

`:marks`: View all markers  
`:delmarks {lower-char}`: Delete a marker

[Vim Tips Wiki - Markers](https://vim.fandom.com/wiki/Using_marks)

### Substitutions

`:%s/{word1}/{word2}/g`: Replace word1 with word2  

`:'<,'>s/{word1}/{word2}/g`: Replace word1 with word2 in selection  
The symbol `'<,'>` is automatically added when text is selected

`g`: Global Search  
`c`: Confirm Change

`.`: Repeat the last operation

### Registers
Memory buffers into which copied and deleted text is stored  

`:reg`: View registers  

`"{num}p`: Paste value from register  

`"{num}yy`: Yank line into a register  
Last yanked text is stored in register 0