import React, { Component } from "react";
import IconFullHeart from "react-icons/lib/fa/heart";

class MyAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserFavorites();
    this.props.fetchReservations();
  }

  // getBackgroundImage(reservation.restaurant) {
  //   const img = reservation.restaurant.background_image;
  //   const photos = reservation.restaurant.photos;
  //
  //   // <img className="banner-image" src={this.getBackgroundImage({reservation.restaurant})} />
  //
  //   if (img != null) {
  //     return img;
  //   } else if (photos.length === 0) {
  //     return "";
  //   }
  //
  //   return photos[0].url;
  // }

  getReservations() {
    let reservations = Object.values(this.props.reservations);

    if (reservations.length === 0 || reservations == undefined) {
      return (
        <div className={"no-reservations"}>
          You have no upcoming reservations.
        </div>
      );
    }

    let reservationsArr = reservations.map((reservation, idx) => {
      return (
        <div key={idx} className={"reservation-item"}>
          {reservation.restaurant.name}
          <div className="reservation-item-info">
            <div className="res-info-title">
              PartySize:
            </div>
            <div className="res-info-body">
              {reservation.partySize}
            </div>
            <div className="res-info-title">
              Date:
            </div>
            <div className="res-info-body">
              {reservation.date}
            </div>
            <div className="reservation-points">125 points</div>
          </div>
        </div>
      )}
    )

    return reservationsArr;
  }



  getFavorites() {
    let favorites = Object.values(this.props.favorites);

    if (favorites.length === 0) {
      return (
        <div className={"no-favorites"}>
          You have no favorited restaurants.
        </div>
      )
    }

    let favorited = favorites.map((favorite, idx) => {
      return (
        <div key={idx} className={"favorites"}>
          <IconFullHeart className="favorite-icon" size={18} color={"#da3743"}/> {favorite.name}
        </div>
      )}
    )

    return favorited;
  }

  // {this.isRestaurantInFavorites() ?
  //   <button
  //     onClick={() => this.props.removeFavorite(this.props.favorites.restaurant.id) }
  //     className="btn-favorite">
  //     {<IconFullHeart className="favorite-icon" size={18} color={"#da3743"}/>}  {favorite.name}
  //   </button>
  // :
  //   <button
  //     onClick={() => this.props.addFavorite(this.props.favorites.restaurant.id) }
  //     className="btn-favorite">
  //     {<IconHeart className="favorite-icon" size={18}/>}  {favorite.name}
  //   </button>
  // }

  getUserPoints() {
    let reservations = Object.values(this.props.reservations);
    if (this.props.reservations.length !== 0 || this.props.reservations.length != undefined) {
      let points = this.props.reservations.length * 125
      return `${points} points.`
    }
  }

  isRestaurantInFavorites() {
    return Object.keys(this.props.favorites).filter(restaurantId => parseInt(restaurantId) === this.props.restaurant.id).length > 0
  }

  render() {
    const favorites = this.props.favorites;
    return (
      <div>
        <div className="account-user">
          {this.props.currentUser.firstname} {this.props.currentUser.lastname}
          <div className="account-info-statement">
            Your account information.
          </div>
        </div>
        <div className="account-wrapper">
          <div className="favorite-side-column">
            <div className="account-title">
              <h1 className="favorited-header">Favorited Restaurants</h1>
              {this.getFavorites()}
            </div>
          </div>
          <div className="account-reservations">
            <h1 className="res-header">Your Reservations</h1>
            <div className="account-reservation-wrapper">
              {this.getReservations()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyAccount;
