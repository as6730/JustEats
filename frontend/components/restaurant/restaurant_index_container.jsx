import { connect } from 'react-redux';
import RestaurantIndex from './restaurant_index';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = state => ({
  restaurants: Object.keys(state.posts).map(id => state.posts[id])
});

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
