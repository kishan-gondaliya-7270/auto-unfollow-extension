// content.js
if (!window.autoUnfollowInjected) {
    window.autoUnfollowInjected = true; // Prevent duplicate injection
  
    async function autoUnfollow() {
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      let stopRequested = false;
      let totalClicked = 0;
  
      // 🟦 Create overlay UI with spinner
      const overlay = document.createElement("div");
      overlay.id = "autoUnfollowOverlay";
      overlay.innerHTML = `
        <div style="
          background: rgba(0, 0, 0, 0.8);
          color: white;
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 999999;
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 15px;
          font-family: Arial, sans-serif;
          box-shadow: 0 2px 12px rgba(0,0,0,0.4);
          text-align: left;
          line-height: 1.4;
          width: 260px;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="au-spinner" style="
              border: 3px solid rgba(255,255,255,0.3);
              border-top: 3px solid #fff;
              border-radius: 50%;
              width: 18px;
              height: 18px;
              animation: au-spin 1s linear infinite;
            "></div>
            <div>
              <b>Auto Unfollow</b><br>
              Running... <span id="au-count">0</span> unfollowed<br>
              <span style="color: #ccc;">Press <b>ESC</b> to stop</span>
            </div>
          </div>
        </div>
      `;
  
      // 🌀 Spinner animation
      const style = document.createElement("style");
      style.textContent = `
        @keyframes au-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
      document.body.appendChild(overlay);
  
      const countSpan = document.getElementById("au-count");
  
      // 🧠 ESC key handler
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          stopRequested = true;
          console.log("🛑 Stop requested by user");
          overlay.innerHTML = `
            <div style="padding: 14px 18px; color: white;">
              <b>Auto Unfollow</b><br>
              🛑 Stopping... please wait
            </div>
          `;
        }
      });
  
      console.log("🚀 Starting continuous unfollow — press ESC to stop.");
  
      while (!stopRequested) {
        const buttons = Array.from(
          document.querySelectorAll('div[role="button"][aria-label="Following"]')
        ).filter((btn) => btn.offsetParent !== null);
  
        if (buttons.length === 0) {
          console.log("✅ No more 'Following' buttons visible. Scrolling...");
          window.scrollBy(0, window.innerHeight);
          await delay(2000);
          continue;
        }
  
        for (const btn of buttons) {
          if (stopRequested) break;
  
          btn.scrollIntoView({ behavior: "smooth", block: "center" });
          await delay(800);
  
          console.log(`🖱️ Clicking 'Following' #${totalClicked + 1}`);
          btn.click();
          totalClicked++;
          countSpan.textContent = totalClicked;
  
          const start = Date.now();
          while (
            btn.getAttribute("aria-label") === "Following" &&
            Date.now() - start < 5000
          ) {
            await delay(200);
          }
  
          await delay(1000);
        }
  
        console.log("⬇️ Scrolling for more...");
        window.scrollBy(0, window.innerHeight);
        await delay(2000);
      }
  
      overlay.innerHTML = `
        <div style="padding: 14px 18px; color: white;">
          <b>Auto Unfollow</b><br>
          ✅ Finished — total unfollowed: ${totalClicked}
        </div>
      `;
      await delay(2500);
      overlay.remove();
  
      console.log(`🎉 Finished! Total unfollowed: ${totalClicked}`);
    }
  
    // 👇 Listen for message from background to start manually
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg.action === "startAutoUnfollow") {
        autoUnfollow();
      }
    });
  }
  