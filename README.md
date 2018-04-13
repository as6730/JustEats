# README

[Live Demo][heroku]

[heroku]: https://justeat.herokuapp.com/#/

JustEat is a clone of OpenTable, a website that allows users to search through a variety of restaurants in order to find a reservation. Signed in users can favorite restaurants, and view their reservations and favorited restaurants on their account page. Signed in users can also write reviews, but are limited to one per restaurant.

The project was designed and built within a two-week timeframe, although I plan to continually add extra features and expand in order to achieve a fully cloned website.

### Scrapper

Emphasis was placed upon creating a scrapper that would dynamically scrape information from a variety of locations. The scrapper always the clone to become more engaging, as searching will yield a large pool of restaurants. Additionally, scraping allowed the restaurant show page to be an almost pixel-perfect clone of the restaurant show page on OpenTable, and includes true information pertaining to the restaurant.  

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

### Story editing and conditional rendering

Users can add stories with a minimum of the title and body. There is an optional description element as well as support for image uploading. Each story's show page contains additional information about the author as well as the date it was published.

The story creation and editing page is modest at first glance:

![Small story editing page](docs/images/story_edit_new.png)

To keep code DRY, similar components were combined into a singular, more adaptable component to avoid rendering multiple copies of what was essentially the same html in different classes. This was done for the story creation and update pages as well as the login and signup dialogs. While this increases the complexity of the classes somewhat, it pays off in the newfound ease of switching form types:

```js
  setForm(formType) {
    return () => {
      this.setState({ formType }, () => {
        this.props.resetErrors();
        this.focusFirstElement();
      });
    };
  }
```

Similarly, for the login form, a single modal component can be used for all session-related tasks:

```js
  <span className="write-story"
    onClick={this.openModal('login')}>Write a story</span>

  <span className="link"
    onClick={this.openModal('login')}>Login</span>
  &nbsp;
  <span className="link"
    onClick={this.openModal('signup')}>Sign Up</span>

  <Modal
    className="modal"
    overlayClassName="modal-overlay"
    isOpen={this.state.modalIsOpen}
    onRequestClose={this.closeModal}
    contentLabel="Login Modal">

    <LoginModalContainer
      formType={this.formType} />

  </Modal>
```

And when errors inevitably appear, debugging only needs to happen in one central location as opposed to several related classes. In addition, styling only needs to happen on one component and the site as a whole is lent a better sense of coherence as a result.

### Creating and updating comments

![Small comment creation demo](docs/images/adding_comment.gif)

Comments are added to the story page dynamically using React and Redux's render and subscription features, respectively. Because of this, changes in state are reflected immediately upon request completion, without any need for additional DOM manipulation.

In addition, editing comments occurs "directly" in the comment thread, with updates occurring immediately after submit. The `<textarea>` element adapts its size dynamically to fit the contents of the container.

![Small comment update demo](docs/images/editing_comment.gif)

This was accomplished through a hidden `<form>` element that is conditionally rendered with an `autofocus` property. The autofocus property triggers an `onfocus` event that acts as a pseudo-initialization for the element, which then begins to update in real-time:

```html
<textarea
  className="editForm"
  onChange={this.update("body")}
  autoFocus
  onFocus={this.autoSize}
  value={this.state.body}
/>
```

## Project Design

JustEat was designed with clean interface in mind that reminded the user instantly of OpenTable. With the two-week time frame in mind, Time was spent ensuring that the restaurant show page was close to being pixel-perfect to the actual site, and that clickability would persist throughout the functionality. The project relied heavily on preproduction, in order to ensure a smooth creation. As OpenTable has many complex features, it was necessary to step into the process being fully familiar with the website and with a strong foundation, as is illustrated by the in-depth schema.

## Technologies

Rails was chosen due to its out-of-the-box support for relational databases and RESTful architecture. As this project was a smaller-scale portfolio piece being built in a relatively short timeframe, convenience and speed was prioritized over scalability. For this reason, the chosen technologies (Heroku, Rails, etc.) were determined to be adequate for the predicted load.

Frontend Redux states are set up in a way such that there are separate reducers and actions for restaurants, reviews, favorites, users, and errors. This allows the state to have a true redux cycle and dynamic to the changing database.

[cloudinary]: https://cloudinary.com/

### Additional Resources
  * [Proposal Wireframes][wireframes]
  * [API Endpoints][apiEndPoints]
  * [Database Schema][dbSchema]

[wireframes]: https://github.com/as6730/JustEats/wiki/wireframes
[apiEndPoints]: https://github.com/as6730/JustEats/wiki/routes
[dbSchema]: https://github.com/as6730/JustEats/wiki/schema

## Future features

In the future, I plan on adding:
  * A map of all surrounding restaurants
  * Search by city (both internationally and locally)
