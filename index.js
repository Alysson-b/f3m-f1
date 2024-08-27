const arr = [[1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]];

function organization(array) {
  
    const flatArray = array.flat();
    return flatArray.sort((a, b) => a - b);
}

const sortedArray = organization(arr);

document.getElementById('submit').addEventListener('click', function(){

    const arrays = organization(arr)


    const divResult = document.getElementById('result');
    divResult.innerHTML = `array organizado: ${arrays.join(', ')}`;
})