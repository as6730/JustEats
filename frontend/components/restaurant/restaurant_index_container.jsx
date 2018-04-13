import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = ({restaurants}) => ({
  restaurants: Object.values(restaurants)
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
