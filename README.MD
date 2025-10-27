# 🚀 Auto Unfollow Helper

A lightweight **Chrome extension** that automatically clicks all **“Following”** buttons on a page perfect for batch unfollowing tasks in different Social Media.  

---

## ✨ Features
- Smart delay and auto-scroll handling  
- Press **ESC** anytime to stop safely  
- Floating on-screen progress indicator  
- No extra permissions required runs only when you load it manually  

---

## 🧩 How to Use

1. **Clone this repository**
   ```bash
   git clone https://github.com/kishan-gondaliya-7270/auto-unfollow-extension.git
   ```

2. **Open Chrome Extensions page**
   - Go to `chrome://extensions/`
   - Enable **Developer mode** (toggle at the top-right)

3. **Load the extension**
   - Click **Load unpacked**
   - Select the cloned folder (`auto-unfollow-extension/`)

4. **Run it**
   - Open any website where “Following” buttons appear  
   - The script runs automatically and begins unfollowing visible users  
   - To stop, press the **ESC** key  

---

## 🧠 Notes
- The script works on any site where buttons have `aria-label="Following"`.  
- It safely waits between clicks and scrolls to load more elements.  
- You’ll see a small floating UI indicator while it’s running.  
- No background scripts or network requests — everything runs locally in your browser.  

---

## 🧑‍💻 Customize for Personal Use

If you’d like to modify the script (for example, to target a different button text or adjust timing):

1. Open `content.js` in your code editor.  
2. Update the selector inside the script — for example:
   ```js
   document.querySelectorAll('div[role="button"][aria-label="Following"]')
   ```
   ➡️ Change `"Following"` to your custom button text, like `"Subscribed"` or `"Added"`.

3. Optionally, modify the delay between clicks:
   ```js
   await delay(1000); // delay in milliseconds
   ```
4. Save your changes.  
5. Go to `chrome://extensions/` → click **Reload** on your extension card.  

Now your customized version will run locally without publishing to the store.  

---

## ⚙️ Folder Structure

```
auto-unfollow-extension/
├── manifest.json
├── content.js
├── icon.png
└── README.md
```

---

## 📜 License
**MIT License** © 2025 [Kishan Gondaliya](https://github.com/kishan-gondaliya-7270)

---

### 💡 Tip
If you plan to share your modified version, make sure to:
- Update the `name` and `version` fields in `manifest.json`  
- Change the folder name and optionally the GitHub repository name  

### 🤝 Contributing
Contributions are welcome! 🎉  
If you find a **bug** or have an idea for a **new feature**, feel free to:
1. **Fork** the repository  
2. **Create a new branch** for your feature or fix  
3. **Submit a pull request** describing your changes  

## 🎥 Demo

Watch how **Auto Unfollow Extension** works:

https://github.com/kishan-gondaliya-7270/auto-unfollow-extension/blob/main/Media/chrome-extension-demo.mp4

## 🎥 Demo

<video src="https://github.com/kishan-gondaliya-7270/auto-unfollow-extension/raw/main/Media/chrome-extension-demo.mp4" width="600" controls></video>
