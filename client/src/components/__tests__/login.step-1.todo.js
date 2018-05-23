import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  const mockUser = {
    username: 'max@mustermann.de',
    password: 'somePassword',
  }
  const mockSubmitHandler = jest.fn()
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={mockSubmitHandler} />, container)
  const usernameInput = container.querySelector('input[name=username]')
  const passwordInput = container.querySelector('input[name=password]')
  const form = container.querySelector('form')
  usernameInput.value = mockUser.username
  passwordInput.value = mockUser.password

  const submitEvent = new window.Event('submit')

  form.dispatchEvent(submitEvent)

  expect(mockSubmitHandler).toHaveBeenCalledTimes(1)
  expect(mockSubmitHandler).toHaveBeenCalledWith(mockUser)

  // Arrange
  // create a fake object to hold the form field values (username and password)
  // create a jest.fn() for your submit handler
  // render the Login component to a div
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  // fill in the field values
  //
  // Act
  // submit the form:
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // ensure your submit handler was called properly
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=mail@jonathanstoye.de
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
