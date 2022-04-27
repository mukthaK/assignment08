//STEP 1 :Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
let movies = ['Toy Story', 'Spider Man', 'Zootopia', 'The LEGO Movie', 'WALL-E' ];
console.log(movies[1]);

//STEP 2:Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
// let movies = new Array(5);
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E';
// console.log(movies[0]);

//STEP 3: Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// let movies = new Array(5);
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Minions';
// movies[3] = 'Zootopia';
// movies[4] = 'The LEGO Movie';
// movies[5] = 'WALL-E';

// console.log(movies.length);

//STEP 4:Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;

// delete movies[0];
// console.log(movies);

//STEP 5:Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window. 
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';

// for (let i in movies) {
//     console.log(movies[i]);
// }

//STEP 6:Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';

// for (let i of movies) {
//     console.log(i);
// }

//STEP 7:Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';

// movies.sort();
// for (let i of movies) {
//     console.log(i);
// }

//STEP 8:Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';

// let leastFavMovies = ['Frozen', 'Sing', 'Mulan'];

// console.log('Movies I like:\n\n');
// for (let i of movies) {
//     console.log(i);
// }

// console.log('\n\nMovies I regret watching:\n\n');
// for (let i of leastFavMovies) {
//     console.log(i + '\n');
// }

//STEP 9:Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';
// let leastFavMovies = ['Frozen', 'Sing', 'Mulan'];

// movies = movies.concat(leastFavMovies);
// movies.reverse();
// console.log(movies);

//STEP 10: Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';
// let leastFavMovies = ['Frozen', 'Sing', 'Mulan'];

// movies = movies.concat(leastFavMovies);
// movies.reverse();

// console.log(movies.slice(-1));

//STEP 11:Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';
// let leastFavMovies = ['Frozen', 'Sing', 'Mulan'];

// movies = movies.concat(leastFavMovies);
// movies.reverse();
// console.log(movies);
// console.log(movies.shift());

//STEP 12:Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
// let movies = [];
// movies[0] = 'Toy Story';
// movies[1] = 'Spider Man';
// movies[2] = 'Zootopia';
// movies[3] = 'The LEGO Movie';
// movies[4] = 'WALL-E' ;
// movies[5] = 'Minions';
// movies[6] = 'Up';
// let leastFavMovies = ['Frozen', 'Sing', 'Mulan'];

// movies = movies.concat(leastFavMovies);
// console.log(movies);

// console.log(movies.splice(-3, 3, 'Pets', 'Cars', 'Inside Out'));
// console.log(movies);

//STEP 13: Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]]; Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
// let movies = [['Toy Story', 1], ['Zootopia', 2], ['WALL-E', 3], ['Minions', 4], ['The LEGO Movie', 5]];
// movies.forEach((movie) => {
//     // console.log(movie);w2sdcfrdsaz
//     let movieName = movie.filter((item) => {
//          return typeof item === 'string';
//     });
//     console.log(movieName);
// });

//STEP 14:Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

// let showEmployee = function (employees) {
//     console.log('Employees: \n\n');
//     for (let i of employees){
//         console.log(i.toUpperCase());
//     }
// }
// showEmployee(employees);

//STEP 15:Write a JavaScript function to filter false, null, 0 and blank values from an array.Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));Expected Result: [58, "abcd", true]
// let filterValues = function (testData) {
//     return testData.filter( function(data) {
//         if (data !== 'false' || data !== null || data !== 0 || data !== ''){
//             return data;
//         }
//     });
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16:Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
// function getRandomItem(items) {
//     return items[Math.floor((Math.random() * items.length))];
// }
// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//STEP 17:Write a JavaScript function to get the largest number from a numeric array.
// function largestNumber(numbers) {
//     let largest = numbers[0];
//     for(num of numbers) {
//         if(num > largest) {
//             largest = num;
//         }
//     }
// return largest;
// }
// console.log(largestNumber([10, 24, 79, 54, 32, 15, 97]));