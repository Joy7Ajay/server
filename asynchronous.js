import fetch from 'node-fetch';
 // Ensure you have this import if you're using Node.js

const Data_url = "https://www.filesampleshub.com/download/code/json/sample1.json";

// Callbacks
function fetchDataCallback(who, callback) {
    console.log(`${who} is fetching data...`);
    fetch(Data_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('The network response is slow');
            }
            return response.json();
        })
        .then(data => {
            console.log(`${who} fetched data successfully.`);
            callback(null, data);
        })
        .catch(error => {
            console.error(`${who} failed to fetch data:`, error);
            callback(new Error('Failed to fetch data'), null);
        });
}

// Promises
function fetchDatapromise(who) {
    console.log(`${who} is fetching data...`);
    return fetch(Data_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('The network response is slow');
            }
            return response.json();
        })
        .then(data => {
            console.log(`${who} fetched data successfully.`);
            return data;
        })
        .catch(error => {
            console.error(`${who} failed to fetch data:`, error);
            throw error;
        });
}

// Async/Await
async function fetchDataasync(who) {
    console.log(`${who} is fetching data...`);
    try {
        const response = await fetch(Data_url);
        if (!response.ok) {
            throw new Error('The network response is slow');
        }
        const data = await response.json();
        console.log(`${who} fetched data successfully.`);
        return data;
    } catch (error) {
        console.error(`${who} failed to fetch data:`, error);
        throw error;
    }
}



// Display data function
function displayInfo(data) {
    try {
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error converting data to JSON:", error);
    }
}



// Using the functions


fetchDataCallback('Callback', (error, data) => {
    if (error) {
        console.error("Error fetching data (callback):", error);
    } else {
        displayInfo(data);
    }
});


fetchDatapromise('Promise')
    .then(data => displayInfo(data))
    .catch(error => console.error("Error handling after promise:", error));


(async () => {
    try {
        const data = await fetchDataasync('Async/Await');
        displayInfo(data);
    } catch (error) {
        console.error("Error handling after async/await:", error);
    }
})();

/*
The deprecation warning ([DEP0040] DeprecationWarning: 
    The punycode module is deprecated) isn't directly related to your code but instead to one of the underlying dependencies in your environment. 
    It's just a warning about the use of an old module (punycode), which won't affect the functionality, but it's worth noting for future compatibility.
*/