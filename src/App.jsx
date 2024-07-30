import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [actualGood, setGood] = useState('Jam');
  const removeGood = () => setGood(null);

  return (
    <main className="section container">
      {actualGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${actualGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeGood}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(good =>
            actualGood === good ? (
              <tr data-cy="Good" className="has-background-success-light">
                <td>
                  <button
                    key={good}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={removeGood}
                  >
                    -
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ) : (
              <tr data-cy="Good" key={good}>
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setGood(good)}
                  >
                    +
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
};
