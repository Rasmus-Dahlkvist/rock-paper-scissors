# Rock Paper Scissors

A Rock Paper Scissors Game for you, your uncle or anyone else!

Link to my [Github Repo](https://github.com/Rasmus-Dahlkvist/rock-paper-scissors)

Link to my [Live Site](https://rasmus-dahlkvist.github.io/rock-paper-scissors/)

![Am I Responsive Screenshot](readme-images/new-am-i-responsive.png)

---
## Features

### This site offers:

#### The Header :
- Turns yellow when hovered.
- Reloads page when clicked.

![Header Screenshot](readme-images/new-header.png)

#### Gameplay Area :
- The gameplay area contains three sections.
- I used rgba colors to make gameplay area a little transparent just for good looks.

![Gameplay area not started](readme-images/gameplay-area-one.png)

- Player section :
    - Uses blue background.
    - Is assigned to the player.
    - Displays current player score.
    - Displays if you won or lost this round.
    - Displays your choice with yellow hand icon.

- Computer section :
    - Uses red background.
    - Is assigned to the computer.
    - Displays current computer score.
    - Displays if computer won or lost this round.
    - Displays computers choice with yellow hand icon.

- Controls section :
    - Uses gray background.
    - Is located just beneath player and computer sections.
    - Contains three buttons styled as rock, paper and scissors hand icons.
    - Starts game when one of the buttons are clicked.
    - Buttons turn yellow when hovered.

    ![Gameplay area started](readme-images/gameplay-area-two.png)

- Pop-ups displaying if you won or lost the game
    - Pop-up gives you two options: 
        - Cancel to wiew your points
        - Ok to play again.

![Pop-up for when you win](readme-images/you-won.png)
![Pop-up for when you lose](readme-images/you-lost.png)
    
#### Rules :
- First we have a yellow text prompting user to click the hand-buttons
- The rules are simple and displayed in white :
    - Rock beats Scissors
    - Paper beats Rock
    - Scissors beats Paper
    - First to 5 points win the game.

![Rules Section](readme-images/new-rules.png)

#### Footer :
- At the bottom of the page we have a simple footer that contains :
    - A font icon link to my [GitHub](https://github.com/Rasmus-Dahlkvist) page
    - A font icon link to my [LinkedIn](https://www.linkedin.com/in/rasmus-dahlkvist-b11670247/) page
    - Links turn yellow when hovered. 

![Rules Link + Footer Image](readme-images/new-footer.png)

---
## Testing

- This site has been tested in devtools for big and small screens in firefox and chrome
- I have tested the site on a samsung galaxy tablet in chrome
- And also on my samsung xcover 5 in chrome and duckduckgo


### Bugs :
1. My wood background picture did not load when site was deployed
2. Hand icon buttons were too big for some small mobile screens
3. Lighthouse test showed 88 accessability
4. Lighthouse test showed 91 on SEO
5. Got several warnings on w3c html validator ( Had the same id in several places )

### Bug Fixes :
1. Changed from "/assets/images/wood.webp" to "../images/wood.webp" in style.css
2. Changed font size and margin in media queries in style.css
3. Added aria-label, type and value to fonticon hand buttons in index.html
4. Added a simple meta description in index.html
5. Removed the ids and used a class in index.html and style.css

---
## Validator Testing
Using W3C validators for testing html and css.

- index.html passes through the W3C html validator with no errors or warnings.

- style.css passes through the W3C css validator with no errors or warnings.

- script.js passes through JSHint with no errors or warnings.

I used Lighthouse in devtools for testing and troubleshooting:

![Lighthouse test](readme-images/lighthouse-test.png)

---
## Deployment

This site was deployed using github pages.

When you are in the repository you want to deploy:
1. Click on "Settings"
2. Click on "Pages"
3. Find Build and deployment
4. In the Source dropdown menu select "Deploy from a branch"
5. In the Branch dropdown menus select "main" and "/(root)"
6. Click Save
7. Wait 5 minutes
8. Refresh page
9. Now you should have a link

This is my live link - [Rock Paper Scissors](https://rasmus-dahlkvist.github.io/rock-paper-scissors/)

---
## Fork Repo

When you are in the repository you want to fork:

Locate the "Fork" button on the top right of the page and click it

---
## Create Local Clone
1. Under the repository name, click on the ???code??? tab
2. In the clone box, HTTPS tab, click on the clipboard icon
3. In your IED open GitBash
4. Changed the current working directory to the location you want the cloned directory to be made
5. Type ???git clone??? and then paste the URL copied from GitHub
6. Press enter and the local clone will be created
---
## Design
How do i design these awesome websites you might ask.

Actually i ask myself exactly that all the time but have not yet found an answer...

So let me instead explain how i made this one :

1. Set background color to a nice Dark Gray because white sucks (#3a3a3a).
2. Find a pleasant Red Color for computers side on [ColorSpace](https://mycolor.space/) (#CF5555).
3. Find a pleasant Blue Color for players side that matches the red using [ColorSpace](https://mycolor.space/?hex=%23CF5555&sub=1) (#3776BB).
4. Have a hard time deciding a third color and end up using a Dark Gray (#2a2a2a).
5. Google search for: large Wood background and find [freepik](https://www.freepik.com/free-photo/wooden-flooring-textured-background-design_16014620.htm).
6. Realize that it would be nice to see the wood grain through the colors.
7. Google search for: hex to rgba converter and find [rgbacolorpicker](https://rgbacolorpicker.com/hex-to-rgba).
8. Use [rgbacolorpicker](https://rgbacolorpicker.com/hex-to-rgba) to convert from hexadecimal ro rgba.
9. Use [FontAwesome](https://fontawesome.com/search?o=r&m=free&c=hands) icons for buttons.
10. Realize that the [FontAwesome](https://fontawesome.com/search?o=r&m=free&c=hands) icons remind you of emojis and decide to go for an emoji Yellow Color on the hands and some text.
11. Google search for: emoji yellow hex and find [crispedge](https://www.crispedge.com/faq/what-is-the-color-code-for-emoji-yellow/) (#FFDE34).
12. Get tired of the plain white text.
13. Google search for: white hex and find [htmlcolorcodes](https://htmlcolorcodes.com/colors/shades-of-white/).
14. Go for Eggshell-White (#F0EAD6)
15. Use [Google Fonts](https://fonts.google.com/specimen/Poppins?query=poppins) And find a nice looking font (Poppins).


I feel that it is very hard to plan style beforehand.
So this is actually how i came up with the style for this page.

Tools used for styling:

[ColorSpace](https://mycolor.space/),
[freepik](https://www.freepik.com/free-photo/wooden-flooring-textured-background-design_16014620.htm),
[rgbacolorpicker](https://rgbacolorpicker.com/hex-to-rgba),
[FontAwesome](https://fontawesome.com/search?o=r&m=free&c=hands),
[crispedge](https://www.crispedge.com/faq/what-is-the-color-code-for-emoji-yellow/),
[htmlcolorcodes](https://htmlcolorcodes.com/colors/shades-of-white/)
[Google Fonts](https://fonts.google.com/)

Screenshots from color picking tools:
![Colorspace Matching Gradient](readme-images/colorspace.png)
![Converted Red](readme-images/red-color.png)
![Converted Blue](readme-images/blue-color.png)
![Converted Gray](readme-images/gray-color.png)
![Emoji Yellow](readme-images/emoji-yellow.png)
![Eggshell White](readme-images/eggshell-white.png)

---
## Technologies used :
- For writing the website
    - Html
    - Css
    - JavaScript
    - Markdown
    - Gitpod
- For styling the website 
    - ColorSpace
    - Google Fonts
    - Font Awesome   
- For testing the website
    - Devtools
    - Lighthouse
    - W3C HTML Validator
    - W3C CSS Validator
    - JSHint
- For saving and deploying the website
    - Git
    - GitHub   

---
## Credits

### Content :
- Html and Css Code

    - The html and css code for this project as well as how i picked the font icons, colors and styles was based on skills and tools that i learned from my first portfolio project [Hardrock-Climbing!](https://rasmus-dahlkvist.github.io/hard-rock-climbing2/). 

    - So i will start by giving myself some credit for coming such a long way since the beginning of my first portfolio project.

    - I used [W3Schools](https://www.w3schools.com/) For Html and Css problems i did not solve myself .

- JavaScript Code
    - The JavaScript for this project was largely based on skills i learned from [Code Institutes](https://codeinstitute.net) JavaScript Challenges. As well as [freeCodeCamp's](https://www.freecodecamp.org/learn) Challenges.

    - I used [W3Schools](https://www.w3schools.com/) Tutorials for problemsolving
    - Huge thanks to my friend Martin for great tips and tricks regarding Javascript code and for the help of explaining difficult concepts regarding code in general.


### Image :
- The background image for this web page was taken from [freepik](https://www.freepik.com/free-photo/wooden-flooring-textured-background-design_16014620.htm)

### Font and Font Icons :
- The text font used in this web site was found on [Google Fonts](https://fonts.google.com/specimen/Poppins?query=Poppins)
- The font icons used in this web site was found on [FontAwesome](https://fontawesome.com/search?o=r&m=free&c=hands)

### Colors :
- The colors i used in this web site was found on: 
    - [ColorSpace](https://mycolor.space/)
    - [crispedge](https://www.crispedge.com/faq/what-is-the-color-code-for-emoji-yellow/)
    - [htmlcolorcodes](https://htmlcolorcodes.com/colors/shades-of-white/)
- And some of them were converted from hexadecimal to rgba on:
    - [rgbacolorpicker](https://rgbacolorpicker.com/hex-to-rgba)

### The README.md :
- Inspiration for writing this README.md file:
    - [Hardrock-Climbing!](https://github.com/Rasmus-Dahlkvist/hard-rock-climbing2)
- The instructions for forking the repository and creating a local clone is taken from [Tasha Johnson's pawsome-portraits-v4](https://github.com/TashaTJ/pawsome-portraits-v4)

### Special Thanks :
- To my Code Institute mentor Harry for pointing me in the right direction when feeling lost.