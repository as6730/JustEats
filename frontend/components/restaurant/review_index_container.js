import { connect} from 'react-redux';
import RestaurantReviews from 'restaurant_reviews';

const mapStateToProps = (state, ownProps) => ({
  reviews: Object.values(state.reviews),
})

export default connect(mapStateToProps)(RestaurantReviews);
