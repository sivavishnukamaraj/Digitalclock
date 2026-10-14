; 8085 DIGITAL COUNTER DEMONSTRATION
; Counts 00H through 3BH (decimal 0 through 59)
; Stores the current count at memory location 2050H.
; This is a counter demonstration, not a precision real-time clock.

        MVI A, 00H
        STA 2050H

LOOP:   CALL DLY
        LDA 2050H
        INR A
        CPI 3CH
        JNZ STORE
        MVI A, 00H

STORE:  STA 2050H
        JMP LOOP

; Software delay. Timing depends on simulator/processor speed.
DLY:    MVI B, 0FFH
OUT1:   MVI C, 0FFH
IN1:    DCR C
        JNZ IN1
        DCR B
        JNZ OUT1
        RET
