const PositiveMessage = () => <p>Możesz obejrzeć film, Zapraszamy</p>
const NegativeMessage = () =>  <p>Nie możesz obejrzeć tego filmu jeśli nie masz więcej niż 16 lat</p>

class ToggleCheckbox extends React.Component {
  state = {
    isConfirmed: false,
  }
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }
  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />
    } else  {
      return <NegativeMessage />
    }
  }

  render() {
    console.log(this.state.isConfirmed);
    return(
      <>
        <h1>Bilet na horror roku</h1>
        <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed}/>
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<ToggleCheckbox />, document.getElementById('root'));