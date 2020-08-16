//Objective is to give candy to children standing in a line, given by an array of values.
//Each value is that child's rating
//Here are the two rules:
//Each child must have at least one candy.
//Children with a higher rating get more candies than their neighbors.

let ratings = [1,2,2]


//O(n) solution where n is the length of the ratings array
//We do a 2-pass to update the neighbors: one for the left and one for the right

//Each child must have at least one candy
let nums = new Array(ratings.length).fill(1)
    
//Children with a higher rating get more candy than its left neighbor
//(Update left neighbor)
for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
        nums[i] = nums[i - 1] + 1
    }
}
//[1,1,2] (last index gets updated)

//Children with a higher rating get more candy than its right neighbor
//(Update right neighbor)
for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i - 1] > ratings[i]) {
        nums[i - 1] = Math.max(nums[i] + 1, nums[i - 1])
    }
}
//[2,1,2] (first index gets updated)

return nums.reduce((cur, sum) => sum + cur)