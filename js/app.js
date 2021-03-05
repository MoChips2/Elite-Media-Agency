const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  })
}

navSlide();

axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => {
var data = response.data.categories;
console.log(data);
for (var i = 0; i < data.length; i++) {
  var foodType = data[i].strCategory;
  var thumbnail = data[i].strCategoryThumb;
  var description = data[i].strCategoryDescription;
  var cardImage = document.getElementById("card-image");
  cardImage.setAttribute("src", thumbnail);
  document.getElementById('title').innerHTML = foodType;
  document.getElementById('desc').innerHTML = description;
  }
  console.log(foodType, thumbnail, description);

}
)
.catch(error => console.log(error));