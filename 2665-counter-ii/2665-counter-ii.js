/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    // Store the initial value for later use
    let initialValue = init;

    // Initialize the current value to the initial value
    let value = init;

    // Return an object with the following methods:
    return {
        // Increment the counter value by 1
        increment: () => ++value,

        // Decrement the counter value by 1
        decrement: () => --value,

        // Reset the counter value to the initial value
        reset: () => {
            value = initialValue;
            return value; // Optionally return the reset value
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */