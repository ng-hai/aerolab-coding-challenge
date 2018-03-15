## Aerolab Coding Challenge

https://aerolab-coding-challenge-wrnkhfejzw.now.sh/

### Challenge

The challenge is to build a catalog view for a loyalty program app in one month. The product’s main goal is to help users redeem items through a points-based system.

### Result

[![Results](https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/25994532_1642898255768580_4699177392102647295_n.png?oh=962c6fab9b63b1f0ff102714ff1420f6&oe=5B1CAFC3)](https://www.facebook.com/aerolab/photos/a.402968409761577.92961.114623045262783/1642898255768580/?type=3&theater)

[View on Facebook](https://www.facebook.com/aerolab/photos/a.402968409761577.92961.114623045262783/1642898255768580/?type=3&theater)

[View on Twitter](https://twitter.com/aerolab/status/946100876942262272)

### Technical Stack

* `create-react-app` boilerplate for structuring client app
* `styled-components` for styling
* `redux` for managing state
* `react-router` for routing
* `react-animated-number` for animating user points
* `react-feather` icons
* `react-lazyload` for lazy loading product components
* `react-parallax` for banner transition
* `react-scroll-to-component` for scrolling to top when navigating pagination
* `react-motion-ui-pack` for transtioning banner text & product
* `react-notification` for global system notifiying
* `now` for deployment

### Criteria

[Original Version](https://aerolab.co/coding-challenge-instructions)

Users have an undetermined amount of points accumulated, and each product is worth a set amount of points. We’ll test the product you submit, along with the code it is written in, and any additional interactions or layers you’d like to add.

We want to see how your code’s UI interacts with different states and user interactions, so your product should comply with the following guidelines:

(Keep in mind that the jury will also take into account the quality of the submitted code. Simply meeting this criteria doesn’t mean your solution will automatically win)

* Each product should have a visible price in points.
* The user should be able to sort products by price, from highest to lowest, and vice-versa.
* The user should be able to see how many points they have in their account.
* There should be a clear way for the user to distinguish those products that they can redeem from those they cannot.
* A “Redeem” button should be available for those products that the user has enough points to claim.
* A “Redeem now” option should appear when the user interacts with a product that they have enough points to claim.
  When the user doesn’t have enough points for a product, they should be able to see how many more points they need to claim it.
* The user should not be able to redeem a product for which they don’t have enough points.
* When the user clicks on the Redeem now button, the system should automatically deduct the item’s price from the users’ points.
