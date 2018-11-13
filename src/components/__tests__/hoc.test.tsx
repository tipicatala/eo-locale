import * as Enzyme from 'enzyme';
import * as React from 'react';

import { TestHoc } from './test_hoc';
import { TestWrapper } from './test_wrapper';

describe('withLocale', () => {
	it('Should render current language', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#language').text()).toEqual('en')
	});

	it('Should render current language passed to props', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper language="ru">
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#language').text()).toEqual('ru')
	});

	it('Should render message', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper>
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#message').text()).toContain('world');
	});

	it('Should render message on different language', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper language="ru">
				<TestHoc id="world" />
			</TestWrapper>,
		);
		expect(formatted.find('#message').text()).toContain('мир');
	});

	it('Should render right message based on id', () => {
		const formatted = Enzyme.mount<TestWrapper>(
			<TestWrapper language="ru">
				<TestHoc id="hello" name="tester" />
			</TestWrapper>,
		);
		expect(formatted.find('#message').text()).toEqual('Привет tester!');
	});
});
