import { fireEvent, render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TextField } from '..'

jest.useFakeTimers()

describe('TextField component', () => {
  it('should render component', () => {
    const { container } = render(
      <TextField name="search" value="" onChange={jest.fn()} />,
    )
    const clearButton = screen.queryByLabelText('Limpar')
    expect(clearButton).toBeNull()
    expect(container).toBeInTheDocument()
  })

  it('should render component with initial value', () => {
    const initialValue = 'Dog'
    render(
      <TextField name="search" value={initialValue} onChange={jest.fn()} />,
    )
    const input = screen.getByLabelText('Campo de pesquisa') as HTMLInputElement
    expect(input.value).toBe(initialValue)

    const clearButton = screen.getByLabelText('Limpar')
    expect(clearButton).toBeVisible()
  })

  it('should call onChange when field text is change', () => {
    const value = 'Cat'
    const mockOnChange = jest.fn()
    render(<TextField name="search" value="" onChange={mockOnChange} />)

    const input = screen.getByLabelText('Campo de pesquisa') as HTMLInputElement
    fireEvent.change(input, { target: { value } })
    // simulate debounce
    act(() => {
      jest.advanceTimersByTime(600)
    })
    expect(mockOnChange).toHaveBeenCalledWith(value)
  })

  it('should clear field text when clear button is clicked', () => {
    const initialValue = 'Lion'
    const mockOnChange = jest.fn()
    render(
      <TextField name="search" value={initialValue} onChange={mockOnChange} />,
    )

    const clearButton = screen.getByLabelText('Limpar')
    fireEvent.click(clearButton)
    // simulate debounce
    act(() => {
      jest.advanceTimersByTime(600)
    })
    expect(mockOnChange).toHaveBeenCalledWith('')
  })
})
