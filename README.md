## Slideshow ##

## Setup ## 

This slideshow was initially setup with Gatsby (https://www.gatsbyjs.org)

You can install this project locally by following the steps below:

1. `git clone https://github.com/rachelrondon/Slideshow_React.git`
2. `npm install `
3. `npm run develop`
4. Visit `localhost:8000` in your browser of choice  

## Development Decisions ##
The Unsplash API was utilized as a way to dynamically load 15 images.
The React library provided development ease with it's compatibility with ES6 and the ability to create reusable components.

## Design Decisions ##
For the User Experience, I chose to use white for the arrows and the selectors to provide a strong contrast with the background of each slide. The selectors allow the user to jump to a specific image within the slideshow.

## Future Improvements ##
Development / UX Improvements:
1. Hide the previous arrow when the first slide is displayed
2. Hide the next arrow when the last slide is displayed
3. Add touch events and adapt them for when the user swipes on mobile

Deployment:
1. Deploy this slideshow to Heroku
