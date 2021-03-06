// const PositiveMessage = () => <p>Możesz obejrzeć film, Zapraszamy</p>;
// const NegativeMessage = () => (<p>Nie możesz obejrzeć tego filmu jeśli nie masz więcej niż 16 lat</p>);
const ValidationMessage = (props) => {
const {txt} = props
  return (
  <p>{txt}</p>
  )
}
class ToggleCheckbox extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });``
    }
  };
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film, Zapraszamy"/>;
      } else {
        return <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli nie masz więcej niż 16 lat" />;
      }
    } else {
      return null;
    }
  };

  render() {
    // console.log(this.state.isConfirmed);
    const {isConfirmed} = this.state
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Bilet na horror roku</h1>
          <input
            type="checkbox"
            id="age"
            onChange={this.handleCheckboxChange}
            checked={isConfirmed}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}





ReactDOM.render(<ToggleCheckbox />, document.getElementById("root"));
