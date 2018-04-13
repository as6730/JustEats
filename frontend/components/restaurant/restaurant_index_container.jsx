import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = ({restaurants}) => ({
  restaurants: Object.values(restaurants)
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: (query) => dispatch(fetchRestaurants(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
