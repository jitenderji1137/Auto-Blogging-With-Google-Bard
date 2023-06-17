// Assuming you have a WebDriverIO instance created as `browser`
class MobileAppTesting{
async makeFetchRequest() {
    const response = await browser.executeAsync(async (done) => {
      const url = 'https://cyan-anxious-sheep.cyclic.app/NetFlixAPI'; // Replace with your desired API URL
  
      // Create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
  
      // Set the callback function for when the request is complete
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
          done(xhr.responseText); // Pass the response text to the callback
        } else {
          done(null); // Pass null if the request was not successful
        }
      };
  
      // Set the callback function for any error that occurs during the request
      xhr.onerror = function () {
        done(null); // Pass null if an error occurred
      };
  
      // Send the request
      xhr.send();
    });
    console.log(response);
  }
}