const API_URL = process.env.NEXT_PUBLIC_BREVO_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_BREVO_KEY;

// api call for email
export async function sendEmail(name, email) {
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
      subject: "Jumpa anda pada 27 April 2024",
      htmlContent:
        // "<!DOCTYPE html> <html> <body> <h1>Walimatul Urus - Basyirah & Shaffan</h1> <p>Kepada {{params.name}},</p> <p>Terima kasih kerana sudi hadir ke Majlis Perkahwinan puteri kami & pasangannya. Untuk maklumat lanjut, boleh layari april27.loveshaffanbasyirah.com atau rujuk maklumat di bawah,  </p><br/> <a target='blank' href='https://calendar.google.com/calendar/event?action=TEMPLATE&amptmeid=NG91bHJib2Fzb280dGJ1dW81Nzdmdm5uNmogbG92ZXNoYWZmYW5iYXN5aXJhaEBt&amp;tmsrc=loveshaffanbasyirah%40gmail.com'>Klik disini untuk tambah di kalendar anda</a><br/> <table border='1' style='border-collapse: collapse; width: 100%; margin-top: 10px;'> <tr> <td style='width: 20%;'>Date</td> <td style='padding: 8px; font-weight: bold;'>Sabtu, 27 April 2024</td> </tr> <tr> <td style='width: 20%;'>Masa</td> <td style='padding: 8px; font-weight: bold;'>11:00 AM - 4:00 PM</td> </tr><tr> <td style='width: 20%;'>Lokasi</td> <td style='padding: 8px; font-weight: bold;'>Rinching Terrace Wedding & Event</td> </tr><tr> <td style='width: 20%;'>Google maps</td> <td style='padding: 8px; font-weight: bold;'>https://maps.app.goo.gl/n7RvNpAmtCCQ5gpj9</td> </tr> <tr> <td style='width: 20%;'>Waze</td> <td style='padding: 8px; font-weight: bold;'>https://waze.com/ul/hw282kz0t2</td> </tr></table> <p>Untuk sebarang pertanyaan, boleh hubungi nombor tertera di bawah</p><br/><p>Roslan - 013-3414287<br/>Badarny - 019-2194287  <br/>Sabihah - 019-2624287<br/><br/><br/>Tulus ikhlas,<br/>Roslan, Badarny & keluarga, <br/> april27.loveshaffanbasyirah.com</p> </div> </body> </html>",
        "<!DOCTYPE html> <html> <body> <h1>Walimatul Urus - Basyirah & Shaffan</h1> <p>Kepada {{params.name}},</p> <p>Terima kasih kerana sudi hadir ke Majlis Perkahwinan puteri kami & pasangannya. Untuk maklumat lanjut, boleh layari april27.loveshaffanbasyirah.com atau rujuk maklumat di bawah,  </p><br/> <br/> <table border='1' style='border-collapse: collapse; width: 100%; margin-top: 10px;'> <tr> <td style='width: 20%;'>Date</td> <td style='padding: 8px; font-weight: bold;'>Sabtu, 27 April 2024</td> </tr> <tr> <td style='width: 20%;'>Masa</td> <td style='padding: 8px; font-weight: bold;'>11:00 AM - 4:00 PM</td> </tr><tr> <td style='width: 20%;'>Lokasi</td> <td style='padding: 8px; font-weight: bold;'>Rinching Terrace Wedding & Event</td> </tr><tr> <td style='width: 20%;'>Google maps</td> <td style='padding: 8px; font-weight: bold;'>https://maps.app.goo.gl/n7RvNpAmtCCQ5gpj9</td> </tr> <tr> <td style='width: 20%;'>Waze</td> <td style='padding: 8px; font-weight: bold;'>https://waze.com/ul/hw282kz0t2</td> </tr></table> <p>Untuk sebarang pertanyaan, boleh hubungi nombor tertera di bawah</p><br/><p>Roslan - 013-3414287<br/>Badarny - 019-2194287  <br/>Sabihah - 019-2624287<br/><br/><br/>Tulus ikhlas,<br/>Roslan, Badarny & keluarga, <br/> april27.loveshaffanbasyirah.com</p></div> </body> </html>",
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
