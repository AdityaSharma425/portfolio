/**
 * Cyberpunk Dark-themed Email Templates for Aditya Sharma's Portfolio Relay
 */

/**
 * Generates the Admin Notification HTML email (Aditya's alert)
 */
function getNotificationHtml(name, email, subject, message) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SYSTEM ALERT] Telemetry Intercept</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #030305; font-family: 'Courier New', Courier, monospace; color: #00ffcc; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #030305; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="100%" max-width="600" style="max-width: 600px; width: 100%; background-color: #09090e; border: 2px solid #00f0ff; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(0, 240, 255, 0.2); border-collapse: separate;">
            <tr>
              <td style="background-color: #00f0ff; padding: 8px 20px; font-weight: bold; color: #030305; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">
                STATUS: SECURE CONNECTION ESTABLISHED // INTERCEPT_LOG_09X
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px 10px 40px;">
                <span style="font-size: 11px; font-weight: bold; color: #ff007f; letter-spacing: 4px; display: block; text-transform: uppercase;">[ INCOMING SIGNAL DETECTED ]</span>
                <h1 style="margin: 10px 0 0 0; font-size: 26px; color: #ffffff; font-weight: bold; letter-spacing: -0.5px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">System Intercept</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px;">
                <div style="height: 1px; background-color: rgba(0, 240, 255, 0.2);"></div>
              </td>
            </tr>
            <tr>
              <td style="padding: 25px 40px;">
                <p style="margin: 0 0 20px 0; font-size: 13px; color: #8892b0; line-height: 1.6;">
                  A connection node was initialized on your portfolio console. Extracting packet metadata...
                </p>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px; background-color: #0c0d16; border: 1px solid rgba(0, 240, 255, 0.15); border-radius: 4px;">
                  <tr>
                    <td style="padding: 12px 15px; border-bottom: 1px solid rgba(0, 240, 255, 0.1); width: 120px;">
                      <span style="font-size: 11px; font-weight: bold; color: #ff007f; text-transform: uppercase; letter-spacing: 1px;">SENDER:</span>
                    </td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid rgba(0, 240, 255, 0.1);">
                      <span style="font-size: 13px; color: #ffffff; font-weight: bold;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; border-bottom: 1px solid rgba(0, 240, 255, 0.1);">
                      <span style="font-size: 11px; font-weight: bold; color: #ff007f; text-transform: uppercase; letter-spacing: 1px;">ROUTING:</span>
                    </td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid rgba(0, 240, 255, 0.1);">
                      <a href="mailto:${email}" style="font-size: 13px; color: #00f0ff; text-decoration: none; font-weight: bold;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px; border-bottom: 1px solid rgba(0, 240, 255, 0.1);">
                      <span style="font-size: 11px; font-weight: bold; color: #ff007f; text-transform: uppercase; letter-spacing: 1px;">SUBJECT:</span>
                    </td>
                    <td style="padding: 12px 15px; border-bottom: 1px solid rgba(0, 240, 255, 0.1);">
                      <span style="font-size: 13px; color: #ffffff; font-weight: bold;">${subject}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 15px;">
                      <span style="font-size: 11px; font-weight: bold; color: #ff007f; text-transform: uppercase; letter-spacing: 1px;">TIMESTAMP:</span>
                    </td>
                    <td style="padding: 12px 15px;">
                      <span style="font-size: 13px; color: #8892b0; font-family: monospace;">${timestamp}</span>
                    </td>
                  </tr>
                </table>
                <div style="background-color: #050508; border: 1px solid rgba(255, 0, 127, 0.3); border-left: 4px solid #ff007f; border-radius: 4px; padding: 20px; box-shadow: inset 0 0 10px rgba(255, 0, 127, 0.15);">
                  <span style="font-size: 11px; font-weight: bold; color: #ff007f; text-transform: uppercase; display: block; margin-bottom: 12px; letter-spacing: 2px;">[ DECRYPTED SIGNAL BODY ]</span>
                  <div style="font-size: 13px; color: #00ffcc; line-height: 1.6; white-space: pre-wrap; font-family: 'Courier New', Courier, monospace; margin: 0;">${message}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px 35px 40px; text-align: center;">
                <div style="height: 1px; background-color: rgba(0, 240, 255, 0.2); margin-bottom: 25px;"></div>
                <a href="mailto:${email}" style="display: inline-block; background-color: #ff007f; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; padding: 14px 28px; border-radius: 4px; text-decoration: none; border: 1px solid #ff007f; box-shadow: 0 4px 12px rgba(255, 0, 127, 0.4);">REPLY TO NODE</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

/**
 * Generates the Visitor Acknowledgement HTML email (Handshake receipt)
 */
function getAcknowledgementHtml(name, subject, message) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transmission Secured</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #030305; font-family: 'Courier New', Courier, monospace; color: #00ffcc; -webkit-font-smoothing: antialiased;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #030305; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="100%" max-width="600" style="max-width: 600px; width: 100%; background-color: #09090e; border: 2px solid #ff007f; border-radius: 8px; overflow: hidden; box-shadow: 0 0 20px rgba(255, 0, 127, 0.2); border-collapse: separate;">
            <tr>
              <td style="background-color: #ff007f; padding: 8px 20px; font-weight: bold; color: #ffffff; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">
                ENCRYPTION STATUS: ONLINE // DATA SECURED
              </td>
            </tr>
            <tr>
              <td style="padding: 40px 40px 10px 40px; text-align: center;">
                <span style="font-size: 11px; font-weight: bold; color: #00f0ff; letter-spacing: 5px; display: block; text-transform: uppercase; margin-bottom: 8px;">[ TRANSMISSION SECURED ]</span>
                <h1 style="margin: 0; font-size: 28px; color: #ffffff; font-weight: 800; letter-spacing: -0.5px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                  Aditya <span style="color: #ff007f;">Sharma</span>
                </h1>
                <p style="margin: 6px 0 0 0; font-size: 11px; color: #8892b0; letter-spacing: 2px; font-weight: bold; text-transform: uppercase;">
                  SOFTWARE ENGINEER // TOKYO CYBER SYSTEM
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px;">
                <div style="height: 1px; background-color: rgba(255, 0, 127, 0.2);"></div>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 40px;">
                <p style="margin: 0 0 16px 0; font-size: 15px; color: #ffffff; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
                  Hello ${name},
                </p>
                <p style="margin: 0 0 20px 0; font-size: 13px; color: #8892b0; line-height: 1.6;">
                  Your signal packets regarding <strong style="color: #00f0ff;">"${subject}"</strong> have bypassed high-altitude interference and completed handshake protocols with my terminal. 
                </p>
                <p style="margin: 0 0 24px 0; font-size: 13px; color: #8892b0; line-height: 1.6;">
                  Your connection parameters are recorded. I will review your telemetry data and dispatch a response shortly. Let's create something epic.
                </p>
                <div style="background-color: #050508; border: 1px solid rgba(0, 240, 255, 0.3); border-left: 4px solid #00f0ff; border-radius: 4px; padding: 20px; margin-bottom: 30px; box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.15);">
                  <span style="font-size: 11px; font-weight: bold; color: #00f0ff; text-transform: uppercase; display: block; margin-bottom: 12px; letter-spacing: 2px;">[ RECORDED TRANSMISSION LOG ]</span>
                  <div style="font-size: 13px; color: #00ffcc; line-height: 1.6; white-space: pre-wrap; font-family: 'Courier New', Courier, monospace; margin: 0;">${message}</div>
                </div>
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 20px;">
                  <tr>
                    <td align="center">
                      <table border="0" cellspacing="0" cellpadding="0" style="margin: 0 auto;">
                        <tr>
                          <td style="padding: 5px; border-radius: 4px; background-color: #00f0ff;" bgcolor="#00f0ff">
                            <a href="https://linkedin.com/in/aditya-sharma-42as" target="_blank" style="display: inline-block; color: #030305; font-weight: bold; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; text-transform: uppercase; letter-spacing: 2px; padding: 12px 24px; text-decoration: none; border-radius: 4px;">LINKEDIN</a>
                          </td>
                          <td width="15" style="width: 15px;"></td>
                          <td style="padding: 5px; border-radius: 4px; background-color: transparent; border: 1px solid #ff007f;" bgcolor="transparent">
                            <a href="https://github.com/AdityaSharma425" target="_blank" style="display: inline-block; color: #ff007f; font-weight: bold; font-size: 12px; font-family: -apple-system, BlinkMacSystemFont, sans-serif; text-transform: uppercase; letter-spacing: 2px; padding: 12px 24px; text-decoration: none; border-radius: 4px;">GITHUB</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 40px;">
                <div style="height: 1px; background-color: rgba(255, 0, 127, 0.2);"></div>
              </td>
            </tr>
            <tr>
              <td style="padding: 25px 40px 40px 40px; text-align: center; background-color: #07070c; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                <p style="margin: 0; font-size: 12px; color: #8892b0; font-weight: bold;">SIGNATURE RECEIVED</p>
                <h4 style="margin: 6px 0 2px 0; font-size: 16px; color: #ffffff; font-weight: bold; letter-spacing: 1px; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">ADITYA SHARMA</h4>
                <p style="margin: 0; font-size: 11px; color: #ff007f; font-family: monospace; letter-spacing: 1px;">Software Engineer Intern @ Affinsys AI</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>`;
}

module.exports = {
  getNotificationHtml,
  getAcknowledgementHtml
};
