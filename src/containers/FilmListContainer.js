import { addFilm, removeFilm, getSorted } from "../actions";
import { connect } from "react-redux";
import FilmList from "../film/FilmList";
//
const getList = () => [{ name: "aa", id: 123 }];

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  addFilm: name => dispatch(addFilm(name)),
  removeFilm: id => dispatch(removeFilm(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmList);

// addFilm(name) {
//   const id = this.state.maxId + 1
//   this.setState({ maxId: id, list: [...this.state.list, { name, id }] });
// }
//
// removeFilm(id) {
//   const lista = this.state.list.filter(item => item.id !== id);
//   this.setState({ list: [...lista] });
// }
