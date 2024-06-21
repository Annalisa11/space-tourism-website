# Frontend Mentor - Space Tourism Website

This is a solution to the [Space Tourism challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshots

<p align="left" style="width: 70%">
  <img src="./screenshots/home-desktop.png" align="right"  style=" width: 48%;">
  <img src="./screenshots/destinations-desktop.png"   style=" width: 48%;">
</p>
<p align="left" style="width: 25%">
<img src="./screenshots/tech-mobile.png" align="right" style=" width: 25%;">
<img src="./screenshots/destinations-mobile.png" align="right" style="width: 25%;">
<img src="./screenshots/crew-tablet.png"  style="width: 25%;">
</p>
<br/>
<br/>
<br/>

## My process

### Built with

- [Tailwind](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Swiper js](https://swiperjs.com/)


### What I learned

I used this challenge to learn more about CSS frameworks, tailwind in particular. Since it was my first time using predefined inline css classes instead of vanilla CSS, I had some difficulties at the beginning getting used to it.  

```typescript jsx
<Link
  onClick={toggleMenu}
  className="flex justify-center p-8 hover:cursor-pointer"
  to={url}
>
```
I also learned a bit more about routing and navigation and implemented my first multi-paged website with this project.

```typescript jsx
function App() {
  return (
    <div className="border-box m-0 h-screen p-0">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
```

### Useful resources

## Author

Annalisa Comin

