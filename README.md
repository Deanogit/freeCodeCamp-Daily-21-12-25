## Daylight Hours (Solstice Approximation)

This algorithm calculates a rough estimate of the daylight hours on the Winter/Summer solstice based on a given latitude.

### The Challenge

Given a latitude between -90 and 90, find the closest latitude match in a provided data table and return the associated daylight hours. The challenge requires handling inputs that do not exactly match the predefined table keys (e.g. if the input is `42`, it should map to the data for `45`).

### Technical Strategy: Nearest Neighbour Search

Since the input can be any integer or float, but the data is discrete, the algorithm follows these steps:

    1.  **Initialise Boundaries**: Set a `minDifference` variable to `Infinity`. This ensures that the first comparison made will always be smaller than the initial value.

    2.  **Iterate Keys**: Loop through the available latitude keys in the data object.

    3.  **Calculate Proximity**: Use `Math.abs(input - key)` to determine how "far away" the current key is from the user's input.

    4.  **Update Best Match**: If the current difference is smaller than the `minDifference`, update the "best match" and store that key.

    5.  **Loopup**: Once the loop finishes, use the best-match key to return the hours from the data object.

### Key Code Snippet

```JavaScript
let closestLat = keys[0];
let minDifference = Infinity;

keys.forEach((key) => {
    const currentDiff = Math.abs(latitude - key);

    if (currentDiff < minDifference) {
        minDifference = currentDiff;
        closestLat = key;
    }
});

return latHours[closestLat]

```

### Complexity Analysis

    -   **Time Complexity**: O(K) - where K is the number of entries in the lookup table. Since we must check every key to ensure we found the absolute closest one, the time grows linearly with the size of the table.

    -   **Space Complexity**: O(K) - to store the keys of the lookup table in an array for iteration.

### Lessons Learned

    -   **Infinity Pattern**: Using `Infinity` is the most reliable way to initialise a "minimum value" search.

    -   **Math.abs()**: Essential for distance calculations where you only care about the magnitude of the difference, not whether the result is positive or negative.

    - **Type Coercion**: Observed how JavaScript automatically handles the math between a Number(input) and a String (object key) during subtraction.
