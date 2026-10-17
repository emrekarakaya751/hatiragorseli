// Google Apps Script — Web uygulaması olarak dağıt (Erişim: "Herkes")
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    if (!/^\S+@\S+\.\S+$/.test(d.email)) return out("bad email");
    var img = Utilities.newBlob(Utilities.base64Decode(d.image), "image/jpeg", "hatira-t3adana.jpg");
    GmailApp.sendEmail(d.email, "Hatıra Fotoğrafın – 2. Yeşilay Bağımsız Aile Festivali", "Hatıra fotoğrafın ekte. Sosyal medyada paylaşabilirsin!", {
      name: "Türkiye Teknoloji Takımı Vakfı Adana",
      htmlBody: "<div style='font-family:Arial;text-align:center'><h2 style='color:#0b6b3a'>Hatıra Fotoğrafın Hazır! 🎉</h2>" +
        "<p>2. Yeşilay Bağımsız Aile Festivali'nde bizi ziyaret ettiğin için teşekkürler.<br>Fotoğrafın ekte; sosyal medyada paylaşabilirsin.</p>" +
        "<p>Instagram: <a href='https://www.instagram.com/t3adana/'>@t3adana</a></p></div>",
      attachments: [img]
    });
    return out("ok");
  } catch (err) { return out("error: " + err); }
}
function out(s) { return ContentService.createTextOutput(s); }
