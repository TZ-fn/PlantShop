import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { updatePlantsData } from 'features/plants/plantsSlice';
import plantsData from 'public/data/plantsData';
import CardContainer from 'components/CardContainer/CardContainer';

describe('test the CardContainer component', () => {
  const plants = plantsData;
  const plantsCount = plantsData.length;
  store.dispatch(updatePlantsData(plants));

  render(
    <Provider store={store}>
      <CardContainer />
    </Provider>,
  );

  it('renders all the plants from the data', () => {
    expect(screen.getAllByText('About this plant:')).toHaveLength(plantsCount);
  });
});
