import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Player from './Player';

describe('Player', () => {
  it('renders player information and increase/decrease buttons', () => {
    render(<Player name="Laura" score="9" />);

    const name = screen.getByText(/laura/i);
    const score = screen.getByText(/9/i);
    const buttons = screen.getAllByRole('button');

    expect(name).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });

  it('calls callbacks when increasing or decreasing score', () => {
    const decreaseScore = jest.fn();
    const increaseScore = jest.fn();
    render(
      <Player
        name="Laura"
        score="9"
        onScoreDecrement={decreaseScore}
        onScoreIncrement={increaseScore}
      />
    );

    const increaseButton = screen.getByRole('button', {
      name: /increase score/i,
    });
    const decreaseButton = screen.getByRole('button', {
      name: /decrease score/i,
    });

    userEvent.click(decreaseButton);
    userEvent.click(increaseButton);

    expect(decreaseScore).toHaveBeenCalled();
    expect(increaseScore).toHaveBeenCalledTimes(1);
  });
});
