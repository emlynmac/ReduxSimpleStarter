import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Reporting 
// Use 'describe' to group similar tests
describe('App', () => {

	let component = undefined;

	beforeEach( () => {
		// Create an instance of app
		component = renderComponent(App);
	});

	// Use 'it' to test a single attribute of a target
	it('shows a comment box', () => {

		// Use 'expect' to make an assertion about test target
		expect(component.find('.comment-box')).to.exist;
	});

	it('contains a comment list', () => {
		expect(component.find('.comment-list')).to.exist;
	})
}); 