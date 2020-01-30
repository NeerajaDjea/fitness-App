$(document).ready(function() {
/* What would be really nice here is if you did a Fetch to get the current user's profile and
pre populate the input's with the user's details. That way the user knows what they have in 
their profile and can update only the ones they want to change.

Also if the email is crucial to updating correctly then you could disable the email field (or 
get rid of it completely) so that the user can't mess things up.
*/

  // Getting references to our form and input
  var editProfileForm = $("form.editprofile");
  var firstNameInput = $("input#firstname-input");
  var lastNameInput = $("input#lastname-input");
  var emailInput = $("input#email-input");
  var ageInput = $("input#age-input");
  var genderInput = $("input#gender-input");
  var weightInput = $("input#weight-input");
  var targetWeightInput = $("input#targetweight-input");

  // When the signup button is clicked, we validate the email and password are not blank
  editProfileForm.on("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    
    var userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      age: ageInput.val().trim(),
      gender: genderInput.val().trim(),
      weight: weightInput.val().trim(),
      targetWeight: targetWeightInput.val().trim()
    };
    // If we have an email and password, run the signUpUser function
    editProfile(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.age,
      userData.gender,
      userData.weight,
      userData.targetWeight
    );

    firstNameInput.val("");
    lastNameInput.val("");
    emailInput.val("");
    ageInput.val("");
    genderInput.val("");
    weightInput.val("");
    targetWeightInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function editProfile(
    firstName,
    lastName,
    email,
    age,
    gender,
    weight,
    targetWeight
  ) {
    console.log("patching");
    
    $.ajax({
      type: "PATCH",
      url: "http://localhost:8080/api/editprofile", /* use a relative path here for routes in your app */
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        gender: gender,
        weight: weight,
        targetWeight: targetWeight
      },
    })

    // $.patch("/api/editprofile", {
    //   firstName: firstName,
    //   lastName: lastName,
    //   email: email,
    //   age: age,
    //   gender: gender,
    //   weight: weight,
    //   targetWeight: targetWeight
    // })
    
      .then(function() {
        console.log("redirecting");
        
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) { /* is this misnamed here? It looks like this is 
    being used for a profile update not for a login? */
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
