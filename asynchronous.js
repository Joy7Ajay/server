const Data_url = "";

//callbacks
function fetchDataCallback(callback){
    fetch(Data_url)
    .then(response =>{
        if (!response.ok) {
            throw new Error ('');
        }
        return response.json();
    })
    .then(data=>callback(null,data))
    .catch(error=>callback(error,null));

}

//promises
function fetchDatapromise(){
    return fetch(Data_url)
    .then(response=> {
        if(!response.ok){
            throw new Error('')
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
            throw new Error('');
        }
        const data = await response.json();
        return data;
    } catch (error){
        console.error("Error fetching data(async/await):",error);
        throw error;
    }
} 

//display data
function displayInfo(products){
    if(!products||!Array.isArray(products)){
        console.error('No products available');
        return;
    }
    console.log("PRODUCT INFORMATION:");
    products.forEach(product=>{
        console.log(`Name: ${product.name}`);
        console.log(`price: ${product.price}`);
        console.log(`category: ${product.category}`);
        console.log('-------------');
    });
}

