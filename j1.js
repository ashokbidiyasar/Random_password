function getValues() {
    let minimum = document.getElementById("min").value;
    let maximum = document.getElementById("max").value;
    
    if (minimum === "" || maximum === "") { 
        alert("Please enter both minimum and maximum values.");
        return;
    }else if(maximum < minimum) {
        alert("Maximum value must be greater than minimum value.");
        return;
    }

    if(minimum==='' || maximum==='') {
        alert("Please enter a valid range.");
        return;
    }
    minimum = parseInt(minimum);
    maximum = parseInt(maximum);
    let  chose = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let string_length = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    let alpha_length = Math.floor(string_length*.6);
    let num_length = Math.floor(string_length*.2);

    let specials = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    

    let special_length = string_length - alpha_length - num_length;
    console.log(string_length, alpha_length, num_length,special_length);
    let password = "";
    let num_count = 0;
    let special_count = 0;
    let alpha_count = 0;

    while (password.length < string_length) {
        let Case = Math.floor(Math.random() * 3);
        switch(Case) {
            case 0:
                if (alpha_count < alpha_length) {
                    password += chose.charAt(Math.floor(Math.random() * chose.length));
                    alpha_count++;
                }
                break;
            case 1:
                if (num_count < num_length) {
                    password += Math.floor(Math.random() * 10);
                    num_count++;
                }
                break;
            case 2:
                if (special_count < special_length) {
                    password += specials.charAt(Math.floor(Math.random() * specials.length));
                    special_count++;
                }
                break;
        }
    }


    alert("Generated Password: " + password);

}


function resetValues() {
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    console.log("Reset values");
}

 