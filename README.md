# Emergency Number

A free, offline, ad-free emergency contact directory for Bangladesh. National hotlines, mobile banking and bank helplines, and district-level government office numbers. Tap any number to open the phone dialer.

Bangla and English. Works without internet. No permissions needed.

## Features
- Emergency grid on the home screen (999, fire service, women and children helpline, health line)
- Categories: emergency, health, women and children, law, government services, mobile banking, banks
- Division and district dropdown (version 1 has Rajshahi)
- Search by name or number, in Bangla or English
- Saved numbers, dark mode, language switch

## Files (all flat, no folders needed)
| File | Purpose |
|---|---|
| index.html, style.css, app.js | The app |
| data.js | All numbers. This is the only file to edit for updates |
| icon.png | App icon |
| build.yml | GitHub Actions workflow (must live at `.github/workflows/build.yml`) |

## Build the APK on GitHub
1. Create a repo and upload all files in the repo root.
2. Click Add file, then Create new file. In the name box type `.github/workflows/build.yml` (typing the slashes creates the folders), paste the content of `build.yml`, and commit.
3. Open the Actions tab, wait for the build, and download the `Emergency-Number-APK` artifact.

## Update the data
Open `data.js` and edit or add entries.
- Add a number: `{ b: "বাংলা নাম", e: "English name", p: "01XXXXXXXXX" }`
- Add a district: copy the Rajshahi block inside `districts` and change names and items. Divisions and dropdowns appear automatically.
- Only use numbers published on official government websites. Do not add personal numbers.

## Disclaimer
Numbers can change. Please verify against official sources and report mistakes to the developer.

## Developer
Md. Mehedi Hasan, mehedisub59@gmail.com, facebook.com/mehedi.am, github.com/mehedi059

## License
MIT, see LICENSE.
