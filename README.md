# Simon Says Game

A simple, interactive web-based **Simon Says** game built using HTML, CSS, and Vanilla JavaScript. Test your memory by following an ever-increasing sequence of colors and patterns.

## 🎮 How to Play

1. **Start the Game:** Press any key on your keyboard or click anywhere on the screen to begin.
2. **Watch the Pattern:** The game will highlight a button (Red, Yellow, Green, or Purple) with a white flash.
3. **Repeat the Sequence:** Click the buttons in the exact same order they were shown.
4. **Level Up:** Every time you successfully complete a sequence, the game moves to the next level and adds one more color to the pattern.
5. **Game Over:** If you click the wrong color, the screen will flash red, and the game will reset. Your final score is calculated based on the levels you cleared.

---

## 🚀 Features

* **Dynamic Leveling:** The game tracks your current level and increases difficulty as you progress.
* **Visual Feedback:**
* **Game Flash:** Buttons flash white when the computer generates a sequence.
* **User Flash:** Buttons flash green when clicked by the user.
* **Error Alert:** The entire background flashes red upon losing.


* **Scoring System:** Your final score is displayed at the end of each session ().
* **Responsive Design:** A clean, centered UI with distinct color-coded buttons.

---

## 🛠️ Technologies Used

* **HTML5:** Structure of the game board and headings.
* **CSS3:** Styling for the circular buttons, animations, and flexbox layout.
* **JavaScript (Vanilla):** Game logic, event listeners, sequence generation, and DOM manipulation.
* **FontAwesome:** Integrated for icon support.

---

## 📂 File Structure

* `simon.html`: The main entry point containing the game markup.
* `simon.css`: Contains the styling for the buttons, layout, and flash animations.
* `simon.js`: The "brain" of the game handling the logic and user interactions.

---

## 📝 Setup Instructions

1. Download or clone the repository containing `simon.html`, `simon.css`, and `simon.js`.
2. Ensure all three files are in the same folder.
3. Open `simon.html` in any modern web browser (Chrome, Firefox, Edge, etc.).
