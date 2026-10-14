8085 DIGITAL CLOCK SIMULATOR - PROJECT INSTRUCTIONS
====================================================

FILES
-----
index.html          Web interface
style.css           UI design and responsive layout
script.js           Working browser stopwatch controls
digital_clock.asm   8085 assembly counter for GNUSim8085

PART A: RUN THE WEBSITE
-----------------------
1. Extract this ZIP file to a folder such as Desktop/DigitalClock8085_Project.
2. Open the folder.
3. Double-click index.html. It should open in your web browser.
4. Click Start, Pause and Reset.
5. The website works offline and requires no server, database or extra library.

PART B: RUN THE 8085 ASSEMBLY PROGRAM
------------------------------------
1. Open GNUSim8085.
2. Open or create an assembly source editor.
3. Copy digital_clock.asm into the editor (omit comment lines beginning with ; if your editor does not accept comments).
4. Use Assemble/Compile.
5. If it assembles, run or single-step the program.
6. Inspect memory address 2050H. The stored count cycles from 00H through 3BH and returns to 00H.

IMPORTANT TECHNICAL NOTE
------------------------
GNUSim8085 and the website run separately. The web page does not read actual registers or memory from GNUSim8085. The web stopwatch is a working UI demonstration; the assembly program is a separate working counter example. The delay loop is not calibrated to exactly one second.

PROJECT AIM
-----------
To demonstrate counter operations and 8085 instructions such as INR, CPI, JNZ,
STA, LDA, CALL, RET, and memory addressing, alongside a user-friendly interface.

TESTS
-----
- Start: browser stopwatch starts counting.
- Pause: browser stopwatch pauses.
- Reset: browser stopwatch returns to 00:00:00.
- Assembly: memory location 2050H cycles from 00H to 3BH.
