// A $( document ).ready() block.
$( document ).ready(function() {
    $('#name').focus();
    $('#other-title').hide();// hides the Job Title


    $('#title').change(function() {
        if($('#title').val() == 'other'){
            $('#other-title').show(); // shows the other value to show the Job Titles
        } else {
            $('#other-title').hide();
        }
    });

    $('#design option:first-Child').hide();

    $("#color").prepend('<option selected>Please select a T-Shirt theme</option>') // selects the option to select T-Shirt themes.
    $('#color option').hide(); // hides the color option
    // this function gives the T-Shirt selection a filter for the Design and Color section.
    $('#design').on("change", function() { 
        $("#color option[value=cornflowerblue]").hide();
        $("#color option[value=darkslategrey]").hide();
        $("#color option[value=gold]").hide();
        $("#color option[value=tomato]").hide();
        $("#color option[value=steelblue]").hide();
        $("#color option[value=dimgrey]").hide();
        $("#colors-js-puns").show(); // calling the function
        if ($('#design').val() == "js puns") { 
            $("#color option[value=cornflowerblue]").show(); // shows the "js-puns" drop button
            $("#color option[value=darkslategrey]").show();
            $("#color option[value=gold]").show();
        } else if ($('#design').val() == "heart js") {
            $("#color option[value=tomato]").show(); // shows the "heart js" drop button
            $("#color option[value=steelblue]").show();
            $("#color option[value=dimgrey]").show();
            $("#colors-js-puns").show(); // calling the function
        }
    });
    //

    //this function shows the total cost of the selected activity thats displayed below the checkboxes
    $(".activities").append('<p>Total: <span id="total"></span></p>');
    var totalCost = 0;
    function addCost() {
        totalCost = 0;
        $('.activities input:checked').each(function() {
            let cost = $(this).parent().text().match(/\d+$/)[0] * 1;
            totalCost+=cost;
        });
        return totalCost;
    }


    //this function displays the checkboxes and disables the checkbox with the same time slot avaliable.
    $("input[type='checkbox']").on('click',function() {
        let checkbox=document.querySelectorAll('input[type="checkbox"]');//selects all the checkboxes
    //shows if one box is check the other would be disabled
        if (checkbox[1].checked) {
            checkbox[3].disabled = true; 
        } else {
            checkbox[3].disabled = false;

        }
        if (checkbox[3].checked) {
            checkbox[1].disabled = true;

        } else {
            checkbox[1].disabled = false;
        } 
        if (checkbox[2].checked) {
            checkbox[4].disabled = true;
        } 
        else {
            checkbox[4].disabled = false;}
            if (checkbox[4].checked) {
                checkbox[2].disabled = true;
        } else {
                checkbox[2].disabled = false;
        }
        $('#total').text('$'+addCost());//calling the function
    });

    $('#payment option:first-child').hide();
    $("fieldset div p").hide();//hides "If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register”" below when selecting Credit Card
    let value = "credit card" //sets the value of credit cards
    //This function gives the Payment Section an option to show and hide the payment sections accordingly
    $('#payment').on("change", function() { 
        const value = $("#payment").val();
        if (value == "credit card") {
        $("#credit-card").show().next().hide().next().hide();//shows Credit Card display and hides Paypal & Bitcoin information
        } else if(value == "paypal") {
            $("#credit-card").hide().next().show().next().hide();//hides Paypal display
            $("fieldset div p").show();// shows the information when you select Paypal
        } else {
            $("#credit-card").hide().next().hide().next().show();  
            $("fieldset div p").show();
        }
    });
    //Validation
    // function activitiesCheck() {
    //     let activitiesField =$('.activities input[type="checkbox"]');//calls class name
    //     var activities = activitiesField.val();// gets the value of the name
    //     if (activities == '') {
    //         activitiesError= true;
    //         activitiesField.after('<p id="# activitiesError" class="error">Please select checkbox provided below</p>');//created an error message 
    //     } else {
    //         $('#activitiesError').remove();//removes error message when Name is provided
    //     }
    // }
    
    function checkName() {
        let nameField =$('#name');//calls class name
        let nameRegex=/^[a-zA-Z]+$/;
        //let nameError = false;
        var name = nameField.val();// gets the value of the name
        if (name == '' || !nameRegex.test(name)) {
            nameError= true;
            nameField.after('<p id="nameError" class="error">Please provide a name</p>');//created an error message 
        } else {
            $('#nameError').remove();//removes error message when Name is provided
        }
    }

    function checkEmail() {
        let mailField =$('#mail');//calls class name
        let mailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //let mailError = false;
        var mail = mailField.val();// gets the value of the mail
        if (mail == '' || !mailRegex.test(mail)) {
            mailError = true;
            mailField.after('<p id="mailError" class="error">Please provide an email</p>');//created an error message 
        } else{
            $('#mailError').remove();//removes error message when Email is provided
        }
    }
    function checkActivities (){
        let activitiesCheck = [];
        
        $('.activities input:checked').each(() =>{
            activitiesCheck.push($(this).text());
        });
        if(activitiesCheck.length < 1){
            $('.activities legend').css('color', "red");
            // $('.activities legend').parent().css('border-color', "red");
            // $('.activities input').after().text('Please choose at least one activity');
            activitiesError = true;
        } else {
            $('.activities legend').css('color', "black");
            // $('.activities legend').parent().css('border-color', "red");

            activitiesError = false;
        }
}
        
    function checkCredit() {
        let creditField =$('#cc-num');
        let creditRegex=/^[0-9]{13,16}?$/;
        var credit = creditField.val();
        //let creditError = false;
        if (credit == '' || !creditRegex.test(credit)) {
            creditError = true;
        creditField.after('<p id="creditError" class="error">Please provide a Credit Card number</p>');
        } else {
        $('#creditError').remove();
            creditError = false;
        }
    }

   
    function checkZip() {
        let zipField =$('#zip');
        let zipRegex=/^[0-9]{5}$/;
        var zip = zipField.val();
        //let zipError = false;
        if (zip == '' || zipRegex.test(zip)) {
        zipError = true;
        zipField.after('<p id="zipError" class="error">Please provide the Zip Code</p>');
        } else {
        $('#zipError').remove();
            zipError= false;
        }
    }

    function checkCVV() {
        let cvvField =$('#cvv');
        let cvvRegex=/^[0-9]{3}$/;
        var cvv = cvvField.val();
        //let cvvError = false;
        if (cvv == '' || cvvRegex.test(cvv)) {
        cvvError= true;
        cvvField.after('<p id="cvvError" class="error">Please provide the CVV number</p>');
        } else {
        $('#cvvError').remove();
        cvvError = false;
        }
    }
    function creditcardCheck () {
        if (value === "credit card") {
        checkCredit();
        checkZip();
        checkCVV();
        if(cvvError && zipError && creditError)
        paymentError = true;
        } else{paymentError = false;}
    }

    function checkPayment(){
        if (value == "credit card") {
            creditcardCheck();
        } else{
            paymentError = false;

        }    

    }

    $("button:submit").click(function(){
        nameError = false;
        mailError = false;
        cvvError = false;
        zipError = false;
        creditError = false;
        ccError = false;
        paymentError = false;
        activitiesError = false;

        event.preventDefault();
        
        checkName();
        checkEmail();
        // creditcardCheck();
        checkPayment(); 
        checkActivities();


    if (nameError || mailError || paymentError || activitiesError) {
        alert("Please check the errors in red.");  
    } else {
        alert('Registration Complete!');
        location.reload(true);
        }
    console.log("name is"+ nameError);
    console.log("email is"+ mailError);
    console.log("credit is"+ creditError);
    console.log("zip is"+ zipError);
    console.log("cvv is"+ zipError);
    });
});
