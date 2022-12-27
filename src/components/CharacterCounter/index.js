import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import EachInputDetails from '../EachInputDetails'

import {
  CharacterCounterBgContainer,
  InputsListContainer,
  HeadingCard,
  MainHeading,
  InputsViewCard,
  UserInputsContainer,
  UserInputsHeading,
  InputElement,
  UserInput,
  AddButton,
  ListContainer,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {searchInput: '', inputsList: []}

  onChangeUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  AddUserInput = event => {
    event.preventDefault()
    const {searchInput} = this.state

    const newInput = {
      id: uuidv4(),
      input: searchInput,
      length: searchInput.length,
    }

    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, newInput],
      searchInput: '',
    }))
  }

  UserInputsView = () => {
    const {inputsList} = this.state

    return (
      <ListContainer>
        {inputsList.map(eachInput => (
          <EachInputDetails key={eachInput.id} details={eachInput} />
        ))}
      </ListContainer>
    )
  }

  NoUserInputsView = () => (
    <img
      alt="no user inputs"
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
    />
  )

  render() {
    const {searchInput, inputsList} = this.state
    return (
      <CharacterCounterBgContainer>
        <InputsListContainer>
          <HeadingCard>
            <MainHeading>Count the characters like a Boss...</MainHeading>
          </HeadingCard>
          <InputsViewCard>
            {inputsList.length === 0
              ? this.NoUserInputsView()
              : this.UserInputsView()}
          </InputsViewCard>
        </InputsListContainer>
        <UserInputsContainer>
          <UserInputsHeading>Character Counter</UserInputsHeading>
          <InputElement onSubmit={this.AddUserInput}>
            <UserInput
              type="text"
              placeholder="Enter the Characters here"
              value={searchInput}
              onChange={this.onChangeUserInput}
            />
            <AddButton type="submit">Add</AddButton>
          </InputElement>
        </UserInputsContainer>
      </CharacterCounterBgContainer>
    )
  }
}

export default CharacterCounter
