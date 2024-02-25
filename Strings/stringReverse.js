//write a function that receive an argument and reverse it  


function handMadeReverse (input) {
    let array = input.split('') ;
    let i = 0 ;
    let result = []
    for (i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }         
       
    result = result.join('')
    console.log(result);
}

handMadeReverse("hello")