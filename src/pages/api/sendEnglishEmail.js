const API_URL = process.env.NEXT_PUBLIC_BREVO_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_BREVO_KEY;

// api call for email
export async function sendEnglishEmail(name, email) {
  try {
    // Define your email data here
    const emailData = {
      sender: {
        name: "Admin ",
        email: "loveshaffanbasyirah@gmail.com",
      },
      to: [
        {
          email,
          name,
        },
      ],
      subject: "See you on 27th April 2024",
      htmlContent:
        "<!DOCTYPE html> <html> <body> <h1>Wedding Reception of Basyirah and Shaffan</h1> <p>Dear {{params.name}},</p> <p>We are delighted to celebrate with you on our daughter’s special day. You may browse through the website, april27.loveshaffanbasyirah.com?lang=EN or refer to the information below,</p><br/> <br/> <table border='1' style='border-collapse: collapse; width: 100%; margin-top: 10px;'> <tr> <td style='width: 20%;'>Date</td> <td style='padding: 8px; font-weight: bold;'>Saturday, 27 April 2024</td> </tr> <tr> <td style='width: 20%;'>Time</td> <td style='padding: 8px; font-weight: bold;'>11:00 AM - 4:00 PM</td> </tr><tr> <td style='width: 20%;'>Location</td> <td style='padding: 8px; font-weight: bold;'>Rinching Terrace Wedding & Event</td> </tr><tr> <td style='width: 20%;'>Google maps</td> <td style='padding: 8px; font-weight: bold;'>https://maps.app.goo.gl/n7RvNpAmtCCQ5gpj9</td> </tr> <tr> <td style='width: 20%;'>Waze</td> <td style='padding: 8px; font-weight: bold;'>https://waze.com/ul/hw282kz0t2</td> </tr></table> <p>Feel free to contact us for further information,</p><br/><p>Roslan - 013-3414287<br/>Badarny - 019-2194287  <br/>Sabihah - 019-2624287<br/><br/><br/>See you there! <br/>Roslan, Badarny & keluarga, <br/> april27.loveshaffanbasyirah.com?lang=EN</p></div> </body> </html>",
      params: {
        name,
        email,
      },
    };

    // Make the POST request using fetch
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": API_KEY,
        // Add any other required headers here
      },
      body: JSON.stringify(emailData),
    });

    // Check if the response is successful (status code 2xx)
    if (response.ok) {
      const responseData = await response.json();
      console.log("Email sent successfully:", responseData);
    } else {
      console.error("Error sending email:", response.statusText);
    }
  } catch (error) {
    // Handle any errors
    console.error("Error sending email:", error.message);
  }
}
