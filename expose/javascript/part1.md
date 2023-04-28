### Part 1 Questions: 

1. values added:  20
2. final result:  20
3. values added:  20
4. ERROR --> Since we declared the result variable using the 'let' keyword, the variable now has block scope. This means that it can only be acessed within the scope it is declared in (in this case the if statement). Line 13 accesses the variable outside the if statement, which gives the error message. 
5. ERROR --> We declared the result variable using the 'const' keyword, so it can not be reassigned to another value. However, in line 7, we attempt to set its value to the sum of 'num1' and 'num2', which is not allowed. Thus, when we try to print out result in line 9, there is an error. 
6. ERROR --> For the same reason as question 5, the value of result is unable to print out. We tried to reassign the value of a 'const' variable. 