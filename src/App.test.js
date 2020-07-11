import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { Header, Add, Contacts, Footer } from './views';
import fire from './views/fire';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Jumlah kontak/i);
  expect(linkElement).toBeInTheDocument();
});

test('test1', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
test('test2', () => {
  const component = renderer.create(
    <Header />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
test('test3', () => {
  const component = renderer.create(
    <Add />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance().onSubmit;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
test('test4', () => {
  const component = renderer.create(
    <Contacts />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
test('test5', () => {
  const component = renderer.create(
    <Footer />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
test('test6', () => {
  const component = renderer.create(
    <fire />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})