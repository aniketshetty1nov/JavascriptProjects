const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('results-heading'),
    single_mealEl = document.getElementById('single-meal')


//search Meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    // Clear single Meal
    single_mealEl.innerHTML = '';
    // mealsEl.innerHTML = ''


    // Get Search term
    const term = search.value;
    // console.log(term);


    // Check for Empty
    if (term.trim()) {


        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h2>Search result for ${term}: </h2>`;


                if (data.meals === null) {
                    resultHeading.innerHTML = `<p>There are no Search results. Try again </p>`;
                } else {
                    mealsEl.innerHTML = data.meals
                        .map(
                            meal => `
                    <div class="meal"> 
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                        <div class="meal-info"  data-mealid="${meal.idMeal}"> 
                        <h3>${meal.strMeal}</h3>
                        </div>
                    </div>      
                `).join('');
                    // console.log(mealsEl.innerHTML)
                }

            });


        //  Clear Search Text
        search.value = '';
    } else {
        alert('please enter a search term')
    }

}


//Fetch Meal by ID
function getMealById(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {

            const meal = data.meals[0];
            console.log(meal);
            addMealToDom(meal);

        });

}

//Add Meal To DOM
function addMealToDom(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            // console.log("hi")
            // console.log(meal[`stringIngredient${i}`])
            ingredients.push(`${meal[`strIngredient${i}`]}  -  ${meal[`strMeasure${i}`]}`)

            // ingredients.push(`$`)
        } else {
            break;
        }
    }


    single_mealEl.innerHTML = `
        <div class="single-meal"> 
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : '' }
                ${meal.strArea ?  `<p>${meal.strArea}</p>` : '' }
            </div>
            <div class="main">  
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div> 
         </div
    `;
}


//Fetch random Meal 
function getrandomMeal(){
    //clear meals and Headings
    mealsEl.innerHTML = '';
    resultHeading.innerHTML ='';

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        const meal = data.meals[0]

        addMealToDom(meal);
    })
}

// EVENT listenes

submit.addEventListener('submit', searchMeal);
random.addEventListener('click', getrandomMeal);

mealsEl.addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info')
        } else {
            return false;
        }

    });

    if (mealInfo) {
        const mealId = mealInfo.getAttribute('data-mealid');
        getMealById(mealId);

        // console.log(mealId);

    }

    // console.log(mealInfo);
})