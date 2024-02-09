import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  CharacterCountContainer,
  CharacterCountDispalySection,
  ResultSetion,
  CharacterInputSection,
  Heading,
  Img,
  Ul,
  Li,
  Form,
  Input,
  Para,
  HeadingCounter,
  Button,
} from './styledComponents'

class CharacterCount extends Component {
  state = {
    searchInput: '',
    inputTexts: [],
    show: false,
  }

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  handleAddBtn = event => {
    event.preventDefault()

    console.log('hiiii')
    const {searchInput, inputTexts} = this.state
    if (searchInput.trim() !== '') {
      const uuid = uuidv4()
      this.setState(prevState => ({
        inputTexts: [...prevState.inputTexts, {id: uuid, text: searchInput}],
        searchInput: '',
        show: true,
      }))
    }
  }

  render() {
    const {inputTexts, searchInput, show} = this.state
    return (
      <CharacterCountContainer>
        <CharacterCountDispalySection>
          <Heading>Count the characters like a Boss...</Heading>
          <ResultSetion>
            {!show && (
              <Img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
            {show && (
              <Ul>
                {inputTexts.map(item => (
                  <Li key={item.id}>
                    <Para>
                      {item.text}: {item.text.length}
                    </Para>
                  </Li>
                ))}
              </Ul>
            )}
          </ResultSetion>
        </CharacterCountDispalySection>
        <CharacterInputSection>
          <HeadingCounter>Character Counter</HeadingCounter>
          <Form onSubmit={this.handleAddBtn}>
            <Input
              type="text"
              value={searchInput}
              onChange={this.onSearch}
              placeholder="Enter the Characters here"
            />
            <Button type="submit">Add</Button>
          </Form>
        </CharacterInputSection>
      </CharacterCountContainer>
    )
  }
}

export default CharacterCount
