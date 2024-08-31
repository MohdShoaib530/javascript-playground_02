// loops
// for loop

let i = 0;
for (i; i < 10; i++) {
  console.log('i', i);
}

// while loop

let j = 0;
while (j < 7) {
  console.log('j', j);
  j++;
}

// do while loop
let k = 0;
do {
  console.log('k', k);
  k++;
} while (k < 5);

// ternary operator

let age = 18;
let canVote = age > 18 ? 'yes you can vote' : 'no you can not vote';
console.log('canVote:', canVote);
