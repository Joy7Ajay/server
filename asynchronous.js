const Data_url = "https://www.filesampleshub.com/download/code/json/sample1.json";

//callbacks
function fetchDataCallback(callback){
    fetch(Data_url)
        .then(response =>{
            if (!response.ok) {
                throw new Error ('The network response is slow');
            }
            return response.json();
        })
        .then(data=>callback(null,data))
        .catch(error=>callback(new Error('Failed to fetch data'),null));

}

//promises
function fetchDatapromise(){
    return fetch(Data_url)
        .then(response=> {
            if(!response.ok){
                throw new Error('The network response is slow')
            }
            return response.json();
        })
        .catch(error=>{
            console.error("Error fetching data(promise):",error);
            throw error; //this will be used if need to handle it outside.
        });
}

//async/await
async function fetchDataasync(){
    try{
        const response = await fetch(Data_url);
        if (!response.ok){
            throw new Error('The network response is slow');
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Error fetching data(async/await):",error);
        throw error;
    }
} 




//display data(this one works for different dataset structures)
function displayInfo(data) {
    try {
        // Convert data to JSON string safely
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error converting data to JSON:", error);
    }
}


// using the function
fetchDataCallback((error, data)=>{
    if (error){
        console.error("Error fetching data(callback):", error);
    } else {
        displayInfo(data);
    }
});

fetchDatapromise()
    .then(data => displayInfo(data))
    .catch(error => console.error("Error handling after promise:", error));



(async () =>{
    try{
        const data =await fetchDataasync();
        displayInfo(data);
    } catch (error) {
        console.error("Error handling after async/await:",error);
    }
});

