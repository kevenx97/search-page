import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextField } from '..'

describe('TextField component', () => {
  it('should render component', () => {
    const { container } = render(
      <TextField name="search" value="" setValue={jest.fn()} />,
    )
    const clearButton = screen.queryByLabelText('Limpar')
    expect(clearButton).toBeNull()
    expect(container).toBeInTheDocument()
  })

  it('should render component with initial value', () => {
    const initialValue = 'Dog'
    render(
      <TextField name="search" value={initialValue} setValue={jest.fn()} />,
    )
    const input = screen.getByLabelText('Campo de pesquisa') as HTMLInputElement
    expect(input.value).toBe(initialValue)

    const clearButton = screen.getByLabelText('Limpar')
    expect(clearButton).toBeVisible()
  })

  it('should call setValue when field text is change', () => {
    const value = 'Cat'
    const mockSetValue = jest.fn()
    render(<TextField name="search" value="" setValue={mockSetValue} />)

    const input = screen.getByLabelText('Campo de pesquisa') as HTMLInputElement
    fireEvent.change(input, { target: { value } })
    expect(mockSetValue).toHaveBeenCalledWith(value)
  })

  it('should clear field text when clear button is clicked', () => {
    const initialValue = 'Lion'
    const mockSetValue = jest.fn()
    render(
      <TextField name="search" value={initialValue} setValue={mockSetValue} />,
    )

    const clearButton = screen.getByLabelText('Limpar')
    fireEvent.click(clearButton)

    expect(mockSetValue).toHaveBeenCalledWith('')
  })
})
