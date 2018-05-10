# README

[Live Demo][heroku]

[heroku]: https://justeat.herokuapp.com/#/

JustEat is a clone of OpenTable, a website that allows users to search through a variety of restaurants in order to find a reservation. Signed in users can favorite restaurants, and view their reservations and favorited restaurants on their account page. Signed in users can also write reviews, but are limited to one per restaurant.

The project was designed and built within a two-week timeframe, although I plan to continually add extra features and expand in order to achieve a fully cloned website.

## Technologies

Rails was chosen due to its flexibility and and well-supported framework. The pragmatism of Ruby allowed for a quick turnover in the creation of this project.

Frontend Redux states were created in order to have individual reducers and actions for restaurants, reviews, favorites, users, and errors. This allows the state to have a true redux cycle that is dynamic to the changing database.

## Project Design

JustEat was designed with clean interface in mind that reminded the user instantly of OpenTable. With the two-week time frame in mind, Time was spent ensuring that the restaurant show page was close to being pixel-perfect to the actual site, and that clickability would persist throughout the functionality. The project relied heavily on preproduction, in order to ensure a smooth creation. As OpenTable has many complex features, it was necessary to step into the process being fully familiar with the website and with a strong foundation, as is illustrated by the in-depth schema.

![Database Schema](https://github.com/as6730/JustEats/wiki/schema)

This is best illustrated by the table for a Restaurant, which had many associations and join tables. The schema illustrates the preproduction that was done in order to ensure a beautiful product.

![restaurant_schema](https://github.com/as6730/JustEats/blob/master/app/assets/images/screenshots/restaurant_schema.png)

### Scrapper

The challenge was to display the complex information embedded in each restaurant show page. Emphasis was placed upon creating a scrapper that would dynamically scrape information from a variety of locations. The scrapper allows the clone to become more engaging, as searching will yield a large pool of restaurants. Additionally, scraping allowed the restaurant show page to be an almost pixel-perfect clone of the restaurant show page on OpenTable, and includes true information pertaining to the restaurant.  

```ruby
  doc.xpath('//div[starts-with(@itemprop, "review")]').each do |el|
    currReview = {}
    el.children.each do |child|
      case child.attr("class")
      when "_53e0a71b"
        child.xpath('.//span[starts-with(@itemprop, "name")]').each do |name|
          currReview["username"] = name.text
        end
        child.xpath('.//div[starts-with(@class, "_491257d8")]').each do |rating|
          currReview["rating"] = rating.children[0].text.to_i
          currReview["date_created"] = rating.children[1].text
        end
      when "reviewBodyContainer _73484bf6"
        child.xpath('.//p[starts-with(@id, "review-body-original")]').each do |body|
          currReview["body"] = body.text
        end
      end
    end
    restaurant_reviews << currReview
  end
```

### Dynamic and Engaging Visuals

Signed in users can write reviews for restaurants, and can save them to their favorites. Additionally, code was always written with the intent to be true to the actual restaurant, and demonstrates the emphasis placed on the user's experience.

![restaurant_show_page](https://github.com/as6730/JustEats/blob/master/app/assets/images/screenshots/restaurant_show_page.png)

### Searching for restaurants

Users can search for restaurants and are returned an in-depth list due to the large database.

![main_page](https://github.com/as6730/JustEats/blob/master/app/assets/images/screenshots/main_page.png)

Creating the search was done through a query, which got all the entries for which the name contains the string that was searched for. This added breadth to the clone, and creates a more interactive user experience.

```js
  export const fetchRestaurants = (query) => {
    return $.ajax({
      method: "GET",
      url: `/api/restaurants?query=${query}`
    });
  }
```
### Additional Resources
  * [Proposal Wireframes][wireframes]
  * [API Endpoints][apiEndPoints]

[wireframes]: https://github.com/as6730/JustEats/wiki/wireframes
[apiEndPoints]: https://github.com/as6730/JustEats/wiki/routes

## Future features

In the future, I plan on adding:
  * A map of all surrounding restaurants
  * Search by city (both internationally and locally)
