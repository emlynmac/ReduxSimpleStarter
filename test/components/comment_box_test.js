import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox', () => {

	let component = undefined;

	beforeEach( () => {
		// Create an instance of app
		component = renderComponent(CommentBox);
	});

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});

	// Use 'it' to test a single attribute of a target
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});
});

