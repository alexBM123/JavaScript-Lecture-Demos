# JavaScript Client-Side Interaction Demos

A collection of small, focused client-side web applications demonstrating core JavaScript concepts including DOM manipulation, event-driven programming, local storage, and asynchronous API consumption.  
Built as part of **Harvard CS50’s Web Programming with Python and JavaScript**.

---

## Motivation

Modern web applications rely heavily on client-side logic to deliver responsive, interactive user experiences.  
This project explores how JavaScript enables dynamic behavior directly in the browser without requiring server-side computation.

The goal of this codebase is to:
- Build intuition for event-driven programming
- Manipulate the DOM safely and efficiently
- Persist client-side state
- Consume third-party APIs asynchronously
- Apply clean separation between HTML, CSS, and JavaScript

---

## Features

- **DOM Manipulation**
  - Dynamically updates page content without reloads
  - Changes text, structure, and styles at runtime

- **Event-Driven UI**
  - Button clicks, form submissions, keyboard events
  - Dropdown and input-driven interactions

- **Persistent Client State**
  - Uses `localStorage` to persist data across page reloads

- **Reusable JavaScript Logic**
  - Shared scripts across multiple HTML pages
  - Avoids duplication using data attributes and selectors

- **Asynchronous API Requests**
  - Fetches real-time currency exchange rates
  - Handles invalid input and network errors gracefully

---

## Tech Stack

**Frontend**
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

**APIs**
- Exchange Rates API (`fetch`, JSON)

**Browser Features**
- DOM API
- `localStorage`
- Fetch API
- Promises

**Tools**
- Python `http.server` (local development server)

---

## Project Structure

```
src/
├── index.html
├── styles.css
├── hello_toggle.html
├── hello_toggle.js
├── counter.html
├── counter.js
├── colors_buttons.html
├── colors_select.html
├── colors.js
├── tasks.html
├── tasks.js
├── currency.html
└── currency.js
```

---

## Architecture Overview

This project follows a **pure client-side architecture**:

- HTML defines structure and semantics
- CSS handles presentation
- JavaScript:
  - Registers event listeners after `DOMContentLoaded`
  - Reads and mutates the DOM
  - Manages state (in-memory and via `localStorage`)
  - Performs asynchronous HTTP requests

There is no backend server logic; all behavior executes in the browser.

---

## Key Implementation Details

- **Safe DOM Access**
  - All DOM queries occur after `DOMContentLoaded` to prevent null references

- **Efficient Element Selection**
  - Uses `querySelector` / `querySelectorAll`
  - Leverages `data-*` attributes for scalable event handling

- **State Persistence**
  - Counter values are persisted using `localStorage`
  - State is restored on page load

- **Async Data Flow**
  - Uses `fetch` with chained `.then()` calls
  - Handles invalid API responses and network errors via `.catch()`

- **User Experience Safeguards**
  - Disables form submission when input is empty
  - Normalizes user input (e.g., uppercase currency codes)

---

## Setup & Installation

### Prerequisites
- Python 3.x
- Modern web browser (Chrome, Firefox, Safari)

### Clone Repository
```bash
git clone <your-repo-url>
cd js-lecture-demos/src
```

---

## Running Locally

Start a local development server:

```bash
python3 -m http.server 8000
```

Open in browser:

```
http://localhost:8000
```

---

## Example Usage

- **Hello Toggle** – Click button to toggle heading text
- **Counter** – Increment counter with persistence across reloads
- **Colors** – Change text color using buttons or dropdown
- **Tasks** – Dynamically add tasks with input validation
- **Currency Converter** – Fetch real-time USD exchange rates

---

## Future Improvements

- Migrate to `async/await`
- Add client-side unit tests
- Modularize JavaScript using ES modules
- Cache API responses
- Integrate backend persistence (Django / Flask)

---

## License

Educational use.
