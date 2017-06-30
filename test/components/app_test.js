import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Reporting 
// Use 'describe' to group similar tests
describe('App', () => {

	// Use 'it' to test a single attribute of a target
	it('shows the correct text', () => {

		// Create an instance of app
		const component = renderComponent(App);

		// Use 'expect' to make an assertion about test target
		expect(component).to.contain('React simple starter');
	});
});