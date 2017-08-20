# **Flex Panels (Colors)**

This is project 4 of 30 mini projects using only HTML5, CSS3 and vanillaJS.

The mini projects consists in creating 5 panels using Flex Box and creating some interesting animations using JavaScript. This was the result:

![alt text] (https://github.com/itaouil95/Flex-Panels/blob/master/flex-it.png)

### HTML

We start by creating the main structure which in this case will consists of simple nested divs and a bunch of paragraphs.

```HTML
<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
    <title>Flex Panels</title>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">

    <!-- Font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat"rel="stylesheet">
  </head>

  <body>

    <!-- Panels Container -->
    <div class="panels">

      <!-- Panel 1 -->
      <div class="panel panel1">
        <p>Hey</p>
        <p>Let's</p>
        <p>Dance</p>
      </div>

      <!-- Panel 2 -->
      <div class="panel panel2">
        <p>Give</p>
        <p>Take</p>
        <p>Receive</p>
      </div>

      <!-- Panel 3 -->
      <div class="panel panel3">
        <p>Experience</p>
        <p>It</p>
        <p>All</p>
      </div>

      <!-- Panel 4 -->
      <div class="panel panel4">
        <p>Give</p>
        <p>All</p>
        <p>You Can</p>
      </div>

      <!-- Panel 5 -->
      <div class="panel panel5">
        <p>Life</p>
        <p>In</p>
        <p>Motion</p>
      </div>

    </div>

    <!-- Custom JavaScript -->
    <script type="text/javascript" src="main.js"></script>
  </body>

</html>
```

### CSS

The interesting part is without any doubts the styling section. We start by clearing some pre-settled UA stylings (mainly margins and paddings) and defining our font and size.

```CSS
html {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 20px;
}

body {
  margin: 0px;
  padding: 0px;
}
```

Next we start styling the panels. There are three points to focus on here:

- Display the content with Flex
- Give to the content full height
- Hide the overflow

```CSS
.panels {
  min-height: 100vh;
  display: flex;
  overflow: hidden;
}
```

It is time to style the singular component, the panel. We will center the text, set up transitions which we will be using later on and last but not least assign distributed space to all panels.

```CSS
.panel {
  color: #000;
  text-align: center;
  align-items: center;

  /* Transitions */
  transition:
    font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
    flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
    background 0.2s;

  /* Assign distributed space between panels */
  flex: 1;

  /* Centers text as column */
  display: flex;
  justify-content: center;
  flex-direction: column;
}
```

Let's give some nice colors to the different panel sections (https://coolors.co/) as well as spacing those paragraphs.

```CSS
.panel1 {
  background: #E9806E;
}

.panel2 {
  background: #C0C781;
}

.panel3 {
  background: #06D6A0;
}

.panel4 {
  background: #C89FA3;
}

.panel5 {
  background: #26547C;
}

.panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

We are almost done with CSS. We just have few things left:

- Translate the upper and bottom paragraphs of the panels.
- Style the paragraphs

```CSS
.panel > *:first-child {
  transform: translateY(-100%);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0%);
}

.panel.open-active > *:last-child {
  transform: translateY(0%);
}

.panel p {
  font-size: 0.8em;
  opacity: 0.3;
}

.panel p:nth-child(2) {
  font-size: 2.5em;
}

.panel.open {
  flex: 5;
  font-size: 40px;
}
```

### JavaScript

If CSS was the most interesting part. JavaScript is the most fun.

What we need to achieve is two points:

1) **Open Toggling**

Whenever we click on a section panel we want to toggle the open class (that makes it shrink or grow).

2) **OpenActive Toggling**

When the flex-grow transitionends we want to toggle the open-active class that translates the text.

```JavaScript

// Obtain NodeList of panel sections
const panels = document.querySelectorAll('panel');

// toggleOpen function
function toggleOpen() {
  this.classList.toggle('open');
}

// toggleOpenActive function
function toggleOpenActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Add click and transitionend event listeners
panels.forEach(panel => panel.addEventListener('click'), toggleOpen);
panels.forEach(panel => panel.addEventListener('transitionend'), toggleOpenActive);

```
