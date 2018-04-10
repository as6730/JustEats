import React, { Component } from "react";
import IconAddress from "react-icons/lib/fa/map-pin";
import IconNeighborhood from "react-icons/lib/fa/building-o";
import IconCrossStreet from "react-icons/lib/fa/road";
import IconParking from "react-icons/lib/fa/cab";
import IconPhone from "react-icons/lib/fa/phone";
import IconPayment from "react-icons/lib/fa/credit-card";
import IconDressCode from "react-icons/lib/fa/credit-card";
import IconCuisine from "react-icons/lib/fa/cutlery";
import IconDiningStyle from "react-icons/lib/fa/bell-o";
import IconHours from "react-icons/lib/fa/clock-o";
import IconWebsite from "react-icons/lib/fa/external-link-square";
import IconParty from "react-icons/lib/io/wineglass";
import IconPartyContact from "react-icons/lib/fa/calendar";
import IconChef from "react-icons/lib/fa/table";

class RestaurantSpecifics extends Component {
  constructor(props) {
    super(props);

    this.labelLocationSpecifics = this.labelLocationSpecifics.bind(this);
    this.labelRestaurantSpecifics = this.labelRestaurantSpecifics.bind(this);
  }

  labelLocationSpecifics() {
    const location = this.props.location;
    const locationSpecifics = [];

    if (location.address != null) {
      locationSpecifics.push([<IconAddress size={16}/>, "Address", location.address]);
    }

    if (location.neighborhood != null) {
      locationSpecifics.push([<IconNeighborhood size={16}/>, "Neighborhood", location.neighborhood]);
    }

    if (location.crossStreet != null) {
      locationSpecifics.push([<IconCrossStreet size={16}/>, "Cross Street", location.crossStreet]);
    }

    if (location.parkingDetails != null) {
      locationSpecifics.push([<IconParking size={16}/>, "Parking Details", location.parkingDetails]);
    }

    return locationSpecifics;
  }

  labelRestaurantSpecifics() {
    const restaurant = this.props.restaurant;
    const specifics = [];

    if (restaurant.phoneNumber != null) {
      specifics.push([<IconPhone size={16}/>, "Phone Number", restaurant.phoneNumber]);
    }

    if (restaurant.websiteLink != null) {
      specifics.push([<IconWebsite size={16}/>,"Website Link", restaurant.websiteLink]);
    }

    if (restaurant.hours != null) {
      specifics.push([<IconHours size={16}/>, "Hours of operation", restaurant.hours]);
    }

    if (restaurant.diningStyle != null) {
      specifics.push([<IconDiningStyle size={16}/>, "Dining Style", restaurant.diningStyle]);
    }

    if (restaurant.dressCode != null) {
      specifics.push([<IconDressCode size={16}/>, "Dress Code", restaurant.dressCode]);
    }

    if (restaurant.executiveChef != null) {
      specifics.push([<IconChef size={16}/>, "Executive Chef", restaurant.executiveChef]);
    }

    if (restaurant.cuisines.length !== 0) {
      let options = "";
      restaurant.cuisines.map((cuisine, idx) => {
        if (idx === 0) {
          options += cuisine.name
        } else {
          options += ", "
          options += cuisine.name
        }
      })

      specifics.push([<IconCuisine size={16} />, "Cuisines", options]);
    }

    if (restaurant.paymentOptions.length !== 0) {
      let options = "";

      restaurant.paymentOptions.map((payment, idx) => {
        if (idx === 0) {
          options += payment.name
        } else {
          options += ", "
          options += payment.name
        }
      })

      specifics.push([<IconPayment size={16}/>, "Payment Options", options]);
    }

    if (restaurant.privatePartyFacilities != null) {
      specifics.push([<IconParty size={16}/>, "Private Party Facilites", restaurant.privatePartyFacilities]);
    }

    if (restaurant.privatePartyContact != null) {
      specifics.push([<IconPartyContact size={16}/>, "Private Party Contact", restaurant.privatePartyContacts]);
    }

    return specifics;
  }

  getLocationSpecifics() {
    let specifics = this.labelLocationSpecifics();

    return (
      specifics.map((specific, idx) => {
        return (
          <div className="restaurant-specific-container" key={idx}>
            <div className="restaurant-specifics-title">
              {specific[0]} {specific[1]}
            </div>
            <div className="restaurant-specifics-info">
              {specific[2]}
            </div>
          </div>
        )
      })
    )
  }

  getRestaurantSpecifics() {
    let specifics = this.labelRestaurantSpecifics();

    if (specifics.length > 7) {
      specifics = specifics.slice(0, 7);
    }

    return (
      specifics.map((specific, idx) => {
        return (
          <div className="restaurant-specific-container" key={idx}>
            <div className="restaurant-specifics-title" >
              {specific[0]} {specific[1]}
            </div>
            <div className="restaurant-specifics-info" >
              {specific[2]}
            </div>
          </div>
        )
      })
    )
  }

  getImageUrl() {
    if (this.props.location.location_image_url === undefined) {
      return undefined
    }

    return 'http://'+this.props.location.location_image_url;
  }

  render() {
    return (
      <div className="restaurant-specifics-container">
        <div className="left-restaurant-specifics">
          {this.getRestaurantSpecifics()}
        </div>
        <div className="right-location-specifics">
          <img className="location-image" src={this.getImageUrl()} />
          {this.getLocationSpecifics()}
        </div>
      </div>
    );
  }
}

export default RestaurantSpecifics;
