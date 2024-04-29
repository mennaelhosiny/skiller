import cookie from 'cookie'

export default function ({ app , req}) {
  // Check if the language is stored in localStorage

  const language = process.client == true ?
    localStorage.getItem('lang'):cookie.parse(req.headers.cookie || '').lang;

  if (language === 'en') {
    app.head.link.push({
      rel: 'stylesheet',
      href: '/css/english.css' // Replace with the actual path to your 'en.css' file
    });
  } else {
    app.head.link.push({
      rel: 'stylesheet',
      href: '/css/arabic.css' // Replace with the actual path to your 'ar.css' file
    });
  }
}
