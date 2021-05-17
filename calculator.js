function buttonPressed(){
    console.log("Button Pressed!");
}
const input_screen = document.querySelector("#screen_input");
const result_screen = document.querySelector("#screen_result");

let string_number = "";
let num_variable_1 = 0;
let num_variable_2 = 0;
let result = 0;

let addition_result = 0;
let subtract_result = NaN;
let multiply_result = 1;
let divide_result = NaN;
// Boolean variables to keep track of which arithmetic operator was pressed
let was_plus_pressed = false;
let was_minus_pressed = false;
let was_divide_pressed = false;
let was_multiply_pressed = false;
//Number pressed function
function button_zero(){
    buttonPressed();
    update_input_screen("0", false);

}
function button_one(){
    buttonPressed();
    update_input_screen("1", false);

}
function button_two(){
    buttonPressed();
    update_input_screen("2", false);

}
function button_three(){
    buttonPressed();
    update_input_screen("3", false);

}
function button_four(){
    buttonPressed();
    update_input_screen("4", false);


}
function button__five(){
    buttonPressed();
    update_input_screen("5", false);

}
function button_six(){
    buttonPressed();
    update_input_screen("6", false);

}
function button_seven(){
    buttonPressed();
    update_input_screen("7", false);

}
function button_eight(){
    buttonPressed();
    update_input_screen("8", false);

}
function button_nine(){
    buttonPressed();
    update_input_screen("9", false);

}
function button_dot(){
    buttonPressed();
    update_input_screen(".", false);
}
function check_for_dot(){
    let check_number = get_string_number();
    if (check_number.includes('.')) return true;
    return false;
}

// Screen function
function update_input_screen(input, is_polarity_changed){
    //Function check conditions:
    // - Is a dot already present in the number, if yes discard the new dot input
    // - If the current input screen is either showing nothing or zero, and dot function is called. Display "0."
    // - If the current input screen is either showing nothing or zero, and a number function is called. Display number only.
    // - If all above conditions are not met, add the function number output at the back of currently displayed number.
    if(is_polarity_changed){
        input_screen.innerText = input;
        set_string_number(input_screen.innerText);
    }
    else if( input_screen.innerText.length > 0 && input === "." && !is_polarity_changed){
        if(check_for_dot()){
            input_screen.innerText += "";
            set_string_number(input_screen.innerText);
           return;
        }
        else{
            input_screen.innerText += input;
            set_string_number(input_screen.innerText);
        }
    }else if ((input_screen.innerText.length === 0 || input_screen.innerText === "0") && input === "." && !is_polarity_changed){ 
        input_screen.innerText = "0.";
        set_string_number(input_screen.innerText);
    }else if (input_screen.innerText.length === 0 || input_screen.innerText === "0" && !is_polarity_changed){ 
        console.log("not the same no more lol");
        input_screen.innerText = input;
        set_string_number(input_screen.innerText);
    }else{
        input_screen.innerText += input;
        set_string_number(input_screen.innerText);
    }
}
function update_result_screen(result_numb){
    result_screen.innerText = result_numb;
}

// Set & get functions
function set_string_number(input){
    string_number = input;
}

function set_num_variable_1(){
    num_variable_1 = parseFloat(get_string_number());
}
function set_num_variable_2(){
    num_variable_2 = parseFloat(get_string_number());
}
function get_string_number(){
    return string_number;
}
function get_num_variable_1(){
    return num_variable_1;
}
function get_num_variable_2(){
    return num_variable_2;
}

// reset function
function conditional_reset_for_pressed_state(button_pressed){
    // if an arithmetic button is pressed it set all other buttons to false
    if(button_pressed === "plus"){
        was_plus_pressed = true;
        was_minus_pressed = false;
        was_divide_pressed = false;
        was_multiply_pressed = false;
    }
    if(button_pressed === "minus"){
        was_minus_pressed = true;
        was_plus_pressed = false;
        was_divide_pressed = false;
        was_multiply_pressed = false;
    }
    if(button_pressed === "divide"){
        was_divide_pressed = true;
        was_plus_pressed = false;
        was_minus_pressed = false;
        was_multiply_pressed = false;
    }
    if (button_pressed === "multiply"){
        was_multiply_pressed = true;
        was_plus_pressed = false;
        was_minus_pressed = false;
        was_divide_pressed = false;
    }
}
function reset_was_pressed_state(){
    was_plus_pressed = false;
    was_minus_pressed = false;
    was_divide_pressed = false;
    was_multiply_pressed = false;
}
function reset_input_screen(){
    string_number = "0";
    input_screen.innerText = "0";
}
function ac_button(){
    // reset all variables
    buttonPressed();

    reset_input_screen();
    result_screen.innerText = "0";
    num_variable_1 = 0;
    num_variable_2 = 0;
    result = 0;

    addition_result = 0;
    subtract_result = NaN;
    multiply_result = 1;
    divide_result = NaN;

    reset_was_pressed_state();
}

//arithmetic function
function plus_minus_button(){
    // If input is positive set it negative and vice versa.
    buttonPressed();
    let get_number = parseFloat(get_string_number());
    let changed_number = "";
    if( get_number > 0){
        changed_number = "-" + get_string_number();
        set_string_number(changed_number);
        update_input_screen(get_string_number(), true);
    }
    if( get_number < 0){
        changed_number = get_string_number().substring(1);
        set_string_number(changed_number);
        update_input_screen(get_string_number(), true);
    }
}
function percentage_button(){
    // This function takes the number in the input screen and divide it by 100
    buttonPressed();
    set_num_variable_1();
    let num_to_compute = get_num_variable_1();
    result = (num_to_compute/100).toFixed(3);
    let output_result = result.toString();
    update_result_screen(output_result);
    // Reset input screen and string number
    reset_input_screen();
}
function divide_button(){
    buttonPressed();
    if(string_number === "0"){
        string_number = "1"; // This is here so that if string_number is 0
                            // from a previous input screen reset,
                           // result is not affected.
    }
    let output_result = "";
    buttonPressed();
    set_num_variable_1();
    // check to see if output screen has a result
    // If yes add new input to it
    if (result_screen.innerText !== "0"){
        num_variable_2 = parseFloat(result_screen.innerText);
        divide_result = num_variable_2 / get_num_variable_1() ;
        output_result = divide_result.toFixed(2).toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("divide");
        return;
    }
    if (isNaN(divide_result)){
        // If this is the first subtraction:
        divide_result = get_num_variable_1().toFixed(2);
        output_result = divide_result.toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("divide");
        return;
    }
    divide_result /= get_num_variable_1().toFixed(2);
    output_result = divide_result.toString();
    update_result_screen(output_result);
    // Reset input screen and string number
    reset_input_screen();
    conditional_reset_for_pressed_state("divide");
}
function multiply_button(){
    buttonPressed();
    if(string_number === "0"){
    string_number = "1"; // This is here so that if string_number is 0
                        // from a previous input screen reset,
                       // result is not affected.
    }
    let output_result = "";
    buttonPressed();
    set_num_variable_1();
    if (result_screen.innerText !== "0"){
        num_variable_2 = parseFloat(result_screen.innerText);
        multiply_result = get_num_variable_1() * num_variable_2;
        output_result = multiply_result.toFixed(2).toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("multiply");
        return;
    }
    multiply_result *= get_num_variable_1().toFixed(3);
    output_result = multiply_result.toString();
    update_result_screen(output_result);
    // Reset input screen and string number
    reset_input_screen();
    conditional_reset_for_pressed_state("multiply");
}
function minus_button(){
    buttonPressed();
    let output_result = "";
    buttonPressed();
    set_num_variable_1();
    // check to see if output screen has a result
    // If yes add new input to it
    if (result_screen.innerText !== "0"){
        num_variable_2 = parseFloat(result_screen.innerText);
        subtract_result = num_variable_2 - get_num_variable_1() ;
        output_result = subtract_result.toFixed(2).toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("minus");
        return;
    }
    if (isNaN(subtract_result)){
        // If this is the first subtraction:
        subtract_result = get_num_variable_1().toFixed(2);
        output_result = subtract_result.toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("minus");
        return;
    }
    subtract_result -= get_num_variable_1().toFixed(2);
    output_result = subtract_result.toString();
    update_result_screen(output_result);
    // Reset input screen and string number
    reset_input_screen();
    conditional_reset_for_pressed_state("minus");
}
function plus_button(){
    //This function does addition operation
    let output_result = "";
    buttonPressed();
    set_num_variable_1();
    // check to see if output screen has a result
    // If yes add new input to it
    if (result_screen.innerText !== "0"){
        num_variable_2 = parseFloat(result_screen.innerText);
        addition_result = get_num_variable_1() + num_variable_2;
        output_result = addition_result.toFixed(2).toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("plus");
        return;
    }
    if (isNaN(result_screen.innerText)){
        // If this is the first subtraction:
        addition_result = get_num_variable_1().toFixed(2);
        console.log(addition_result);
        output_result = addition_result.toString();
        update_result_screen(output_result);
        // Reset input screen and string number
        reset_input_screen();
        conditional_reset_for_pressed_state("plus");
        return;
    }
    addition_result = get_num_variable_1().toFixed(2);
    console.log(addition_result);
    output_result = addition_result.toString();
    update_result_screen(output_result);
    was_plus_pressed = true;
    // Reset input screen and string number
    reset_input_screen();
    conditional_reset_for_pressed_state("plus");
}
function equal_button(){
    buttonPressed();
    if(was_plus_pressed && !was_minus_pressed && !was_multiply_pressed && !was_divide_pressed){
        if (result_screen.innerText !== "0"){
            equal_if_result_not_zero("plus");
            return;
        }
        num_variable_2 = parseFloat(input_screen.innerText);
        addition_result = get_num_variable_1() + num_variable_2;
        result = addition_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
        return;
    }
    if(was_minus_pressed && !was_plus_pressed && !was_multiply_pressed && !was_divide_pressed){
        if (result_screen.innerText !== "0"){
            equal_if_result_not_zero("minus");
            return;
        }
        num_variable_2 = parseFloat(input_screen.innerText);
        divide_result = get_num_variable_1() - num_variable_2;
        result = divide_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
        return;
    }
    if(was_divide_pressed && !was_minus_pressed && !was_multiply_pressed && !was_plus_pressed){
        if (result_screen.innerText !== "0"){
            equal_if_result_not_zero("divide");
            return;
        }
        num_variable_2 = parseFloat(input_screen.innerText);
        divide_result = get_num_variable_1() / num_variable_2 ;
        result = divide_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
        return;
    }
    if(was_multiply_pressed && !was_minus_pressed && !was_plus_pressed && !was_divide_pressed){
        if (result_screen.innerText !== "0"){
            equal_if_result_not_zero("multiply");
            return;
        }
        num_variable_2 = parseFloat(input_screen.innerText);
        multiply_result = num_variable_2  * get_num_variable_1();
        result = multiply_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
    }
    if(!was_multiply_pressed && !was_minus_pressed && !was_plus_pressed && !was_divide_pressed){
        result = parseFloat(input_screen.innerText).toFixed(2).toString();
        update_result_screen(result);
        reset_input_screen();
    }
}
function equal_if_result_not_zero(button_pressed){
    // If a result is present on screen use it with input to get a new result
    if (button_pressed === "plus"){
        num_variable_1 = parseFloat(result_screen.innerText);
        num_variable_2 = parseFloat(input_screen.innerText);
        addition_result = num_variable_1 + num_variable_2;
        result = addition_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
    }
    if (button_pressed === "minus"){
        num_variable_1 = parseFloat(result_screen.innerText);
        num_variable_2 = parseFloat(input_screen.innerText);

        divide_result = num_variable_1 - num_variable_2;
        result = divide_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
    }
    if (button_pressed === "multiply"){
        num_variable_1 = parseFloat(result_screen.innerText);
        num_variable_2 = parseFloat(input_screen.innerText);
        multiply_result = num_variable_1 * num_variable_2;
        result = multiply_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
    }
    if (button_pressed === "divide"){
        num_variable_1 = parseFloat(result_screen.innerText);
        num_variable_2 = parseFloat(input_screen.innerText);
        divide_result = num_variable_1 / num_variable_2;
        result = divide_result.toFixed(2).toString();
        update_result_screen(result);
        // Reset input screen and string number
        reset_was_pressed_state();
        reset_input_screen();
    }
}