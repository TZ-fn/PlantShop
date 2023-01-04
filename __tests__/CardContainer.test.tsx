import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { updatePlantsData } from 'features/plants/plantsSlice';
import plantsData from 'public/data/plantsData';
import CardContainer from 'components/CardContainer/CardContainer';

it('renders the CardContainer component correctly', () => {
  const plants = plantsData;
  store.dispatch(updatePlantsData(plants));
  render(
    <Provider store={store}>
      <CardContainer />
    </Provider>,
  );
});
