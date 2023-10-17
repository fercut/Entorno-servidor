async function getFileContent(filePath) {
      
      const response = await fetch(filePath);
      const data = await response.json();
      console.log(data);
      return data;
  }
  
  getFileContent('https://pokeapi.co/api/v2/pokemon/ditto');