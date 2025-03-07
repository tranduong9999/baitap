let numbers = [3, 5, 3, 2, 8, 5, 5, 3, 2, 8];

let count = {}, maxCount = 0, mostFrequent = Infinity;

for (let num of numbers) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount || (count[num] === maxCount && num < mostFrequent)) {
        maxCount = count[num];
        mostFrequent = num;
    }
}

console.log(`Phần tử xuất hiện nhiều nhất: ${mostFrequent}, xuất hiện ${maxCount} lần.`);
