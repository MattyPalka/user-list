import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./redux-store/reducers/user";
import ReduxThunk from "redux-thunk";
import userEvent from "@testing-library/user-event";

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

test("renders user list that have some users", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => screen.getByText(/users list/i));
  const header = screen.getByText(/users list/i);
  const listItems = screen.getAllByRole("listitem");
  expect(header).toBeInTheDocument();
  expect(listItems.length).toEqual(10);
});

test("Has search box", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => screen.getByText(/users list/i));
  const searchBox = screen.getByRole("textbox");
  expect(searchBox).toBeInTheDocument();
});

describe("Search for user with user's full name", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => screen.getByText(/users list/i));
    userEvent.type(screen.getByRole("textbox"), "Lean");
  });

  test("Search field has correct value", () => {
    expect(screen.getByRole("textbox")).toHaveValue("Lean");
  });

  test("Found user in the document", () => {
    const expectedUser = screen.getByText(/Leanne Graham/i);
    expect(expectedUser).toBeInTheDocument();
  });

  test("User with different name not in the document", () => {
    const unExpectedUser = screen.queryByText(/Ervin Howell/i);
    expect(unExpectedUser).not.toBeInTheDocument();
  });

  test("Found only 1 user for criteria", () => {
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toEqual(1);
  });
});

describe("Search for user with user's with email", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => screen.getByText(/users list/i));
    userEvent.type(screen.getByRole("textbox"), "Sincere@april.biz");
  });

  test("Search field has correct value", () => {
    expect(screen.getByRole("textbox")).toHaveValue("Sincere@april.biz");
  });

  test("Found user in the document", () => {
    const expectedUser = screen.getByText(/Leanne Graham/i);
    expect(expectedUser).toBeInTheDocument();
  });

  test("User with different name not in the document", () => {
    const unExpectedUser = screen.queryByText(/Ervin Howell/i);
    expect(unExpectedUser).not.toBeInTheDocument();
  });

  test("Found only 1 user for criteria", () => {
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toEqual(1);
  });
});

describe("User details", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => screen.getByText(/users list/i));
    userEvent.click(screen.getByText(/@Antonette/));
  });

  test("There's 10 users in list", () => {
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toEqual(10);
  });

  test("Yser details are displayed", () => {
    const listItems = screen.getByRole("list");
    const emailField = within(listItems).getByText(/email/i);
    const phoneField = within(listItems).getByText(/phone/i);
    const websiteField = within(listItems).getByText(/website/i);

    expect(emailField).toBeInTheDocument();
    expect(phoneField).toBeInTheDocument();
    expect(websiteField).toBeInTheDocument();
  });

  test("Clicked on user details are correct", () => {
    const listItems = screen.getByRole("list");
    const emailField = within(listItems).getByText(/Shanna@melissa.tv/i);
    const phoneField = within(listItems).getByText(/010-692-6593 x09125/i);
    const websiteField = within(listItems).getByText(/anastasia.net/i);

    expect(emailField).toBeInTheDocument();
    expect(phoneField).toBeInTheDocument();
    expect(websiteField).toBeInTheDocument();
  });

  test("Website link value is correct", () => {
    const link = screen.getByText(/anastasia.net/i);
    expect(link).toHaveAttribute("href", "http://anastasia.net");
  });

  test("No other user details are displayed", () => {
    const listItems = screen.getByRole("list");
    const emailFields = within(listItems).queryAllByText(/email/i)
    expect(emailFields.length).toEqual(1)
  });

  test("Can close user details", () => {
    userEvent.click(screen.getByText(/@Antonette/));
    const listItems = screen.getByRole("list");
    const emailField = within(listItems).queryByText(/email/i);
    expect(emailField).not.toBeInTheDocument();
  });
});
