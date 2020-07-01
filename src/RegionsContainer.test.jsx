import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixture__/data';

import { selectRegion } from './action';

jest.mock('react-redux');

describe('<RegionsContainer />', () => {
  describe('render RegionsContainer', () => {
    context('without newSelectRegion', () => {
      it('shows regions', () => {
        useSelector.mockImplementation((selector) => selector({
          regions,
          newSelectRegion: '',
        }));

        const { queryByRole } = render(<RegionsContainer />);

        regions.forEach((region) => {
          expect(queryByRole('button', { name: region.name })).not.toBeNull();
        });
      });
    });

    context('with newSelectRegion', () => {
      it('shows a mark for a selected region', () => {
        useSelector.mockImplementation((selector) => selector({
          regions,
          newSelectRegion: '서울',
        }));

        const { queryByRole } = render(<RegionsContainer />);

        expect(queryByRole('button', { name: '서울(V)' })).not.toBeNull();
      });
    });
  });

  context('with a selected region', () => {
    it('shows a mark for a selected region', () => {
      useSelector.mockImplementation((selector) => selector({
        regions,
        newSelectRegion: '',
      }));

      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByRole } = render(<RegionsContainer />);

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region.name }));
        expect(dispatch).toBeCalledWith(selectRegion(region.name));
      });
    });
  });
});
