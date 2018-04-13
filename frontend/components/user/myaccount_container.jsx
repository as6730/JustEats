import { connect} from 'react-redux';
import MyAccount from './myaccount';
import { getUserFavorites } from "../../actions/favorite_actions";
import { fetchReservations } from "../../actions/reservation_actions";

const mapStateToProps = state => ({
  favorites: state.favorites,
  currentUser: state.session.currentUser,
  reservations: state.reservations,
})
const mapDispatchToProps = dispatch => ({
  getUserFavorites: () => dispatch(getUserFavorites()),
  fetchReservations: () => dispatch(fetchReservations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
