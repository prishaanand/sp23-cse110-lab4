### Part 2 Questions: 

1. Line 12 outputs 3. This is because it prints out the value of 'i', which iterates through the size of the prices list. In this case, our list had 3 prices within in, so the for loop terminates when the value of i is the same as the value of the length of the price list. Thus, the final value of i is 3, and this is printed out since the print statement is after the for loop executes. 
2. Line 13 outputs 150. This is because it outputs the last value that 'discountedPrice' gets set to in the for loop. Iterating through, the last time we go through the loop is when 'i = 2'. This causes 'discountedPrices = prices[2] * (1 - 0.5)' which is the same as 'discountedPrices = 300 * (1 - 0.5)', giving the value of 150. This is then printed after exiting the for loop. 
3. Line 14 also outputs 150. This is because it outputs the last value that 'finalPrice' gets set to in the for loop. As before, this is when 'i=2'. We already know that 'discountedPrice' when 'i=2' is 150. So, 'finalPrice = Math.round(150 * 100) / 100 = 150', which is what is printed out. 
4. The code returns [ 50, 100, 150 ]. This is because for each element in the prices input list, the for loop applies the 0.5 discount and adds the value as an element in the list. More specificially, the price 100 gets discounted to 50, the price 200 gets discounted to 100, and the price 300 gets discounted to 150. All of these are then printed out in a list, since the 'push' method appends each discounted price into the 'discounted' list. 
5. ERROR: 'i' is not defined --> The code causes this error because we defined 'i' using let, which means it has block scope. Since it was defined within the for loop, it is can only be accessed inside the for loop. However, our print statement in line 12 attempted to print the value of 'i' outside the for loop, causing the error. 
6. ERROR: 'discountedPrice' not defined --> Similar to the error from question 5, we declared the variable 'discountedPrice' using the let keyword within the for loop. The print statement in line 13 is outside of the for loop, and since let causes the variable to have block scope, we can't access the variable outside the for loop, thus causing the error. 
7. Line 14 outputs 150. Although we used let to declare 'finalPrice', we declared the variable outside of the for loop, within the scope of the entire function. Since the print statement in line 14 still is within the function where the variable was declared, we are able to access it with no problem. 
8. The function returns [ 50, 100, 150 ] as before. Although we changed the variables to be declared with let, we never access any of them outside of the scope they are defined in. For example, the variable discounted has block scope of the entire function. Since we return the value of discounted within the function, there is no issue and the same result as using 'var' is returned. 
9. ERROR --> We define 'i' within the for loop using the let keyword, giving it block scope. Thus, when we attempt to print the value of 'i' in line 11, which is outside the for loop, we are not within the scope giving an error. 
10. Line 12 outputs 3. This is because the length of the input list prices is 3, and this doesn't change in the execution of the code so we are able to declare it using the const keyword. 
11. The fucntion returns [ 50, 100, 150 ]. This because we never try to update any of the variables that are assigned to const. Even though discounted is a const variable, it never gets reassigned any values, we simply append values to the list so there is no problem. Similarly, discountedPrice is defined and updated in the same line using the const keyword, so it doesn't get reassigned since each time we want to give it a new value we define it again.  
12. a. `student.name`  
    b. `student["Grad Year"]`  
    c. `student.greeting()`  
    d. `student["Favorite Teacher"].name`  
    e. `student.courseLoad[0]`
13. - a. '32' --> The plus operator in Javascript serves as a concatenation operator, since the 3 is a string. Since 2 is an integer, and you can not concatenate integers, it converts the 2 into a string and concatenates it with the string 3, resulting in the string '32'. 
    - b. 1 --> You can not perform subtraction on strings, so Javascript converts the string '3' into an integer and subtracts the integer 2 (already given as this) from 3. This results in the integer 1. 
    - c. 3 --> Since 3 is an integer, Javascript converts null into an integer as well. Thus null becomes 0. The plus operator in this case serves as addition, since we have to integers, so it performs 3 + 0 and returns the integer 3. 
    - d. '3null' --> Since 3 is a string, Javascript converts null into a string as well. Thus null becomes "null". Since we have two strings, the plus operator serves as a concatenation operator. So, it concatenates '3' with 'null', outputting the string '3null'. 
    - e. 4 --> Since 3 is an integer, Javascript converts true into an integer, meaning that it becomes 1. Since we now have two integers, 3 and 1, the plus operator serves as an addition operator. Thus, it computes 3+1 and outputs the integer 4. 
    - f. 0 --> The plus operator is applied to two non-numbers, and since neither are strings, they get converted into integers. The false gets converted to 0. The null also gets converted to 0. So, 0 + 0 gets computed and outps the integer 0. 
    - g. '3undefined' --> Since 3 is a string, Javascript converts undefined into a string as well. Now that we have two strings, the plus opertator serves as a concatenation operator. Thus, it concatenates both strings, and outputs the string '3undefined'.
    - h. NaN --> There is no string subtraction defined, so the string 3 gets converted into an integer 3. This would mean that undefined would also be converted into an integer, which in this case would be NaN. Thus this value is outputed since substraction using NaN is not defined. 
14. - a. true --> String 2 becomes a number 2. Since integer 2 is greater the integer 1, the comparison returns true. 
    - b. false --> Since both items being compared are strings, Javascript uses the lexicographic ordering to compare them. In this case, the first character of '2' is 2 and the first character of '12' is 1, and in 1 comes before 2 in the alphabet. So, '12' would actually be less than '2', not '2' being less than '12'. So it returns false. 
    - c. true --> Since 2 and '2' are of different types, Javascript converts both into integers. Then it performs the comparision of 2 == 2, which does a regular equality check. Since 2 is equal to 2, it returns 2. 
    - d. false --> The === operator checks if the types of both items are equal, without attempting to convert them. Since 2 is an integer and '2' is a string, it returns false.
    - e. false --> Since true and 2 are of differnt types, Javascript converts them both to integers. Thus, true becomes 1. 1 does not equal 2, so it returns false. 
    - f. true --> The === operator chekcs if the types of both items are equal, without attempting to covert them. Since true is a boolean value and Boolean(2) is also a boolean value, it returns true. 
15. The == operator checks for equality of the value itself, such as arithmetic equality. The === operator on the other hand, checks for equality of the types of each value, rather than the value itself. 
16. See part2-question16.js file. 
17. The resulting output will be [ 2, 4, 6 ]. This is because the command calls the modifyArray function with the first parameter (array) being [1,2,3] and the second parameter (callback) being the function doSomething. Inside the modifyArray function, the passed in array gets applied the passed in function for every element in the array (since the for loop traverses from i = 0 to the i = the length of the input array). The doSomething function multiplies the passed in integer value by 2, and since we pass in each element of the input array from the modifyArray function, we get the resulting array [1*2, 2*2, 3*2] which is [2,4,6], as seen in the output. 
18. See part2-question18.js file. 
19. The output of the code is: 
1
4
3
2
20. 