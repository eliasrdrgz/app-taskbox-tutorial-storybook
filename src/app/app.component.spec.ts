import { render } from '@testing-library/angular';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';

describe('App', () => {
  test('should render the App component', async () => {
    const { getByText } = await render(PureInboxScreenComponent);
    expect(getByText('Welcome'));
  });
})