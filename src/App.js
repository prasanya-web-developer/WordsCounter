import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {nameInput: '', wordList: []}

  onEnterInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {nameInput} = this.state
    const UpdateItems = {
      id: uuidv4(),
      item: nameInput,
    }
    this.setState(prevState => ({
      wordList: [...prevState.wordList, UpdateItems],
      nameInput: '',
    }))
  }

  render() {
    const {nameInput, wordList} = this.state
    return (
      <div className="main-container">
        <div className="left-container">
          <h1 className="left-heading">Count the characters like a Boss...</h1>
          <div className="value-container">
            {wordList.length > 0 ? (
              <ul className="value-list">
                {wordList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p key={eachItem.id} className="value-name">
                      {eachItem.item}: {eachItem.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="not-found-image"
              />
            )}
          </div>
        </div>
        <div className="right-container">
          <h1 className="right-heading">Character Counter</h1>
          <form className="input-bar-add-container" onSubmit={this.onAdd}>
            <input
              type="text"
              placeholder="Enter the characters here"
              onChange={this.onEnterInput}
              value={nameInput}
              className="input-bar"
            />
            <button className="add-button" type="submit" onClick={this.onAdd}>
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
