// Hendel Search Button,

search = () => {
    const inputData = document.querySelector('#input');
    const inputValue = inputData.value;
    inputData.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputValue}`;
    fetch(url)
      .then(res => res.json())
      .then(data => display(data))
  }
  // Display function call --
  const display = (data) => {
    const mainDivRef = document.querySelector('#mainDiv');
    mainDivRef.textContent = '';
    if (data.numFound == 0) {
      const getResult = document.querySelector('#result');
      getResult.innerHTML = `<h3 class="text-danger">No Data Found</h3>`;
    } else {
      const rootData = data.docs;
      const dataSlice = rootData.slice(1, 22);
      dataSlice.forEach((items) => {
  
        const mainDiv = document.querySelector('#mainDiv');
        const mkDiv = document.createElement('div');
        const addClass = mkDiv.classList.add(`col-md-4`);
        const imgSrc = `src="../img/AMIT.png"`;
        const serverImg = `src="https://covers.openlibrary.org/b/id/${items.cover_i}-M.jpg"`
  
        mkDiv.innerHTML = `    
         <div class="card my-3">
             <img class="card-img-top img-fluid" ${items.cover_i===undefined?imgSrc:serverImg}>
             <div class="card-body">
               <h5 class="card-title text-primary">Book Name : ${items.title}</h5>
            <p class="card-title">Author Name : <span class="text-primary"> ${items.author_name===undefined?"It's undefined": items.author_name[0]} </span></p>
            <p class=" Publisher card-text"> Book Publisher's Name :<span class="text-primary"> ${items.publisher} </span></p>
               <p class="card-title">First Publish Year :<span class="text-primary"> ${items.publish_year===undefined?" It's undefined":items.publish_year[0]}</span></p>
               
             </div>
           </div>
         `;
        
        mainDiv.appendChild(mkDiv);
  
        // Get total result ----
  
        getResult = document.querySelector('#result');
        getResult.innerHTML = `<h3 class="text-success">Search Result : 20 of ${data.numFound}</h3>`;
      })
    }
  }