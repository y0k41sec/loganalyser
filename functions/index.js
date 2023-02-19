

const searchLogs = async (searchParams) => {
    const workerUrl = 'https://logparse.jonathannogiri1211.workers.dev/';
    const response = await fetch(`${workerUrl}?search=${searchParams}`);
    const result = await response.json();
    return result;
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchParams = formData.get('search');
    const searchResult = await searchLogs(searchParams);
    // Display search result on page
    console.log(searchResult);
  };