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
 
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('entering some text', () => {
		const COMMENT_STRING = 'new comment';

		beforeEach( () => {
			component.find('textarea').simulate('change', COMMENT_STRING);
		});


		it('shows text entered', () => {
			expect(component.find('textarea')).to.have.value(COMMENT_STRING);
		});

		it('when submitted, clears the input', () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});
	});
	

});

