//const Data_url = "https://www.filesampleshub.com/download/code/json/sample1.json";
const Data_url = "https://www.filesampleshub.com/download/code/json/sample2.json"
//const Data_url = "https://www.filesampleshub.com/download/code/json/sample3.json"

// Callbacks
function fetchDataCallback(who, callback) {
    console.log(`${who} is fetching data...`);
    fetch(Data_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('FAILED');
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
                throw new Error('FAILED');
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
    console.log(`${who} is fetching data...\n`);
    try {
        const response = await fetch(Data_url);
        if (!response.ok) {
            throw new Error('FAILED');
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
        console.log(JSON.stringify(data, null, 2),'\n\n\n');
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

















