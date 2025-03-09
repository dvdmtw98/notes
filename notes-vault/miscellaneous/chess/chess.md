---
title: Chess
tags:
  - chess
  - index
date: 2025-01-20 17:30:24 -0600
updated: 2025-01-20 23:43:30 -0600
---

Chessboard consists of 64 squares (8x8)  
The **horizontal** (rows) are called **ranks** and **vertical** (columns) are called **files**  
Ranks are numbered (1-8) and files are alphabetized (a-h)  
White team always starts the game  

### Chess Board Setup

![[chess-board.jpg|520]]

> [!IMPORTANT]
> Bottom right corner square has to always be light color (if not need to rotate board)

The kings crown is more fancy than the queens crown  
Queen is always on the square that matches her color  

### Pieces Movement

**King**: One square in any direction (Box)  
**Queen**: Any direction (in straight line)  
**Rook**: Move along rank and files (no diagonal)  
**Bishop**: Moves along diagonals (always on same color as starting square)   
**Knight**: 3 steps in L-shape. Can jump over pieces. On jump changes square color  
**Pawn**: 1 step forward (1st move can move 2 steps). Cannot go back  

**Spawn** pieces can only **capture diagonally** (forward)

### Check & Checkmate

The **king can never be captured** it can only be checked (next move would capture)  
King cannot put itself in check (move to square that would result in check - Illegal)

![[king-self-check.png|340]]

Ways to prevent Check - **CPR**: Capture, Protect, Run away  
Checkmate: Cannot escape from checked state (i.e. cant use CPR)  