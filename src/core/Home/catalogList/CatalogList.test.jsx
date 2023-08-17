import {render,screen} from '@testing-library/react';
import CatalogList from './CatalogList';

describe('CatalogList component', () => {
    it('CatalogList renders', () => {
        render(<CatalogList/>);
        expect(screen.getByText('Игра', {exact: true}));
    });
});
