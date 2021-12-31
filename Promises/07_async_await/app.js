async function displayData() {

  let response = await fetch('./data.json');
  let obj = await response.json();
  console.log(obj);
}

displayData();