// Wait for the entire HTML page to load before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the HTML elements needed to interact with
    const nounInput = document.getElementById('noun');
    const adjectiveInput = document.getElementById('adjective');
    const verbInput = document.getElementById('verb');
    const placeInput = document.getElementById('place');
    const soundInput = document.getElementById('sound');
    const generateButton = document.getElementById('generateButton');
    const storyResultParagraph = document.getElementById('storyResult');
    const resetButton = document.getElementById('resetButton');

    // Add an event listener to the button.
    generateButton.addEventListener('click', function() {
        // Get the current values from the input fields
        const noun = nounInput.value;
        const adjective = adjectiveInput.value;
        const verb = verbInput.value;
        const place = placeInput.value;
        const sound = soundInput.value;

        // Basic validation: Check if any field is empty
        if (noun === '' || adjective === '' || verb === '' || place === '' || sound === '') {
            storyResultParagraph.textContent = 'Oops! Please fill in all the fields to create your story.';
            storyResultParagraph.style.color = 'red'; 
            
            // Highlight the empty fields
            if (noun === '') nounInput.style.borderColor = 'red';
            else nounInput.style.borderColor = '';
            if (adjective === '') adjectiveInput.style.borderColor = 'red';
            else adjectiveInput.style.borderColor = '';
            if (verb === '') verbInput.style.borderColor = 'red';
            else verbInput.style.borderColor = '';
            if (place === '') placeInput.style.borderColor = 'red';
            else placeInput.style.borderColor = '';
            if (sound === '') soundInput.style.borderColor = 'red';
            else soundInput.style.borderColor = '';

            return; // Stop the function here if fields are missing
        }
        storyResultParagraph.style.color = '#495057'; // Reset to default color if previously an error

        // Create the story!
        const randomNumber = Math.floor(Math.random() * 4); // Generate a random number to determine which story template to use
        
        const story1 = `Once upon a time, in the faraway land of ${place}, there lived a very ${adjective} ${noun}. 
                       This ${noun} absolutely loved ${verb} all day long. 
                       One sunny afternoon, while ${verb} near the ${place}, it suddenly heard a loud "${sound}!" 
                       The ${noun} was so surprised, it jumped three feet in the air! From that day on, the ${adjective} ${noun} always remembered the day it heard the mysterious ${sound}.`;

        const story2 = `In the bustling city of ${place}, there was a ${adjective} ${noun} who dreamed of ${verb}ing. 
                       Every day, it would practice ${verb}ing in the park, hoping to become the best ${noun} in the city.
                       One day, while ${verb}ing, it heard a strange "${sound}!" 
                       Curious, the ${noun} followed the sound and discovered a hidden talent show.
                       The ${noun} entered the show and amazed everyone with its ${adjective} ${verb}ing skills!`;

        const story3 = `Deep in the enchanted forest of ${place}, a ${adjective} ${noun} lived happily. 
                       This ${noun} had a special talent for ${verb}ing, which it practiced every day.
                       One evening, while ${verb}ing under the moonlight, it heard a magical "${sound}!"
                       Intrigued, the ${noun} followed the sound and found a group of fairies who loved to ${verb} too!
                       They invited the ${noun} to join their nightly ${verb}ing parties, and they all lived happily ever after.`;

        const story4 = `In the mystical land of ${place}, there was a ${adjective} ${noun} known for its incredible ${verb}ing skills.
                       Every morning, the ${noun} would ${verb} at sunrise, filling the air with joy.
                       One day, while ${verb}ing, it heard a peculiar "${sound}!"
                       The ${noun} followed the sound and discovered a hidden cave filled with magical creatures who loved to ${verb} too!
                       They all became great friends and spent their days ${verb}ing together, creating a symphony of ${sound} sounds.`;

        // Choose a story based on the random number generated
        if (randomNumber === 0) {
            story = story1;
        }
        else if (randomNumber === 1) {
            story = story2;
        }
        else if (randomNumber === 2) {
            story = story3;
        }
        else {
            story = story4;
        }

        // Display the story on the page
        storyResultParagraph.textContent = story;
    });

    // Add an event listener to the reset button
    resetButton.addEventListener('click', function() {
        
        // Clear all input fields
        nounInput.value = '';
        adjectiveInput.value = '';
        verbInput.value = '';
        placeInput.value = '';
        soundInput.value = '';

        // Clear the story result paragraph
        storyResultParagraph.textContent = 'Your story will appear here!';
        storyResultParagraph.style.color = '#495057'; // Reset to default color
    });
});