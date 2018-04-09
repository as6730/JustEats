import React, { Component } from "react";
// import IconAddress from "react-icons/lib/fa/map-pin";
// import IconNeighborhood from "react-icons/lib/fa/building-o";
// import IconCrossStreet from "react-icons/lib/fa/road";
// import IconParking from "react-icons/lib/fa/car";
// import IconPhone from "react-icons/lib/fa/phone";
// import IconPayment from "react-icons/lib/fa/credit-card";
// import IconDressCode from "react-icons/lib/fa/credit-card";

class RestaurantSpecifics extends Component {
  constructor(props) {
    super(props);

    this.labelLocationSpecifics = this.labelLocationSpecifics.bind(this);
    this.labelRestaurantSpecifics = this.labelRestaurantSpecifics.bind(this);
  }

  labelLocationSpecifics() {
    const location = this.props.location;
    const locationSpecifics = [];

    if (location.address !== undefined) {
      locationSpecifics.push(["Address", location.address]);
    }

    if (location.neighborhood !== undefined) {
      locationSpecifics.push(["Neighborhood", location.neighborhood]);
    }

    if (location.crossStreet !== undefined) {
      locationSpecifics.push(["Cross Street", location.crossStreet]);
    }

    if (location.parkingDetails !== undefined) {
      locationSpecifics.push(["Parking Details", location.parkingDetails]);
    }

    return locationSpecifics;
  }

  labelRestaurantSpecifics() {
    const restaurant = this.props.restaurant;
    const specifics = [];

    if (restaurant.phoneNumber !== undefined) {
      specifics.push(["Phone Number", restaurant.phoneNumber]);
    }

    if (restaurant.websiteLink !== undefined) {
      specifics.push(["Website Link", restaurant.websiteLink]);
    }

    if (restaurant.hours !== undefined) {
      specifics.push(["Hours of operation", restaurant.hours]);
    }

    if (restaurant.diningStyle !== undefined) {
      specifics.push(["Dining Style", restaurant.diningStyle]);
    }

    if (restaurant.dressCode !== undefined) {
      specifics.push(["Dress Code", restaurant.dressCode]);
    }

    if (restaurant.executiveChef !== undefined) {
      specifics.push(["Executive Chef", restaurant.executiveChef]);
    }

    if (restaurant.privatePartyFacilities !== undefined) {
      specifics.push(["Private Party Facilites", restaurant.privatePartyFacilities]);
    }

    if (restaurant.privatePartyContact !== undefined) {
      specifics.push(["Private Party Contact", restaurant.privatePartyContacts]);
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

      specifics.push(["Cuisines"], options);
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

      specifics.push(["Payment Options", options]);
    }

    return specifics;
  }

  getLocationSpecifics() {
    let specifics = this.labelLocationSpecifics();

    return (
      specifics.map((specific, idx) => {
        return (
          <div>
            <div className="restaurant-specifics-title" >
              {specific[0]}
            </div>
            <div className="restaurant-specifics-info" >
              {specific[1]}
            </div>
          </div>
        )
      })
    )
  }

  getRestaurantSpecifics() {
    let specifics = this.labelRestaurantSpecifics();

    return (
      specifics.map((specific, idx) => {
        return (
          <div>
            <div className="restaurant-specifics-title" >
              {specific[0]}
            </div>
            <div className="restaurant-specifics-info" >
              {specific[1]}
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
        <div className="left-restaurant-specifics"></div>
          {this.getRestaurantSpecifics()}
        <div className="right-location-specifics">
          <img className="location-image" src={this.getImageUrl()} />
          {this.getLocationSpecifics()}
        </div>
      </div>
    );
  }
}

export default RestaurantSpecifics;
