export const languageName = (code) => {
  return {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French'
  }[code.toLowerCase()];
}