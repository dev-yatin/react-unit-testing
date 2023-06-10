## Jest

Jest is a javascript test framework. It is a test runner that finds test, run test, determine if test is failed or passed and report it in human readable format.

## RTL (React Testing Library)

It provides virtual DOM to test React components. Its core library is DOM Testing library and it is wrapper around it. RTL enables you to test rendered component i.e actual thing. With RTL, implementation detail of component not matters. For ex. It not cares that it is 5+3 in component or 4+4 in component. All it cares that 8 should be visible in component.

## Type of Automated Test

### Unit Test

- Focus is on unit of application. Unit can be class, function or component.
- Unit is tested in isolation of other units.
- Dependencies are mocked.
- Run in short amount of time. Easy to catch error.
- Relatively easier to write and maintain.

## Integration Test

- Focus on testing 2 or more units together.
- Execution can take longer than Unit test.

## End to end(E2e) testing

- Focus is on testing entire application flow.
- Expected to take longer time to execute than Integration Test.

There is a testing pyramid in which E2e lies at top and Unit testing lies at bottom.

## Installation

Jest and RTL automatically installed when you create project using `create-react-app`.

## About Unit Tests

- In a unit test `test` and `expect` are available globally by Jest.
- If you want that only one test case of test suite should be executed, you can use `test.only`.
- If you want to skip test from test suit execution, you can use `test.skip`
- One test file can be said to stands for 1 test suite.
- In place of `test`, `it` can also be used.
- In place of `test.only`, `fit` can also be used.
- In place of `test.skip`, `xit` can also be used.
- However as React developers use `test` in default test(`App.test.tsx`) that comes with `create-react-app`, this shows `test` is recommended by React developers.
- `describe` is used to group tests. There can be `describe` inside `describe`. We can use `.only` and `.skip` with `describe` too.
- `describe` format is `describe(name, callback)`.
- `test` format is `test(name, callback, timeout)`. Timeout is optional. Default timeout is 5s.
- In same test file or test suite there can be multiple `describe`.

## Test file Naming Convention

Valid test file names are:

- `*.test.{ts,tsx,js,jsx}`
- `*.spec.{ts,tsx,js,jsx}`
- `__test__/*.{ts,tsx,js,jsx}`

## Code Coverage

Metric that helps to determine how much code is tested. It list following type of coverage:

- Statement Coverage: It is about how many statements are tested.
- Branch Coverage: It is about how many control structures such as if..else block tested.
- Function Coverage: It is about how many functions tested.
- Line Coverage: It is about lines of code tested.

## Assertions

Conditions that validate test.In Jest, assertion validation is by: `expect(subject).matcherMethod(optional object)`
`jest-dom` provides matcher that includes DOM checking. It is part of testing library imported in `setupTests.js`.

## Common way of testing component

- Render component
- Find element inside component
- Apply assertion on element with respect to component.

## Find element inside component Methods

- To find single element
  - getBy...
  - queryBy...
  - findBy...
- To find multiple element
  - getAllBy...
  - queryAllBy..
  - findAllBy...
    where 3 dot can be replaced by Role, LabelText, Title, Text, TestId, DisplayValue, AltText, PlaceholderText,

## Role

Role refers to ARIA role (Accessibility Rich Internet Application) that provides semantic meaning to content. Every HTML element has certain role. For ex:

- button => button
- anchor => link
- select => combobox
- h1-h6 => heading
- checkbox => checkbox
- radio => radio
- input[type='text'] => textbox
- textarea => textbox
  and so on..
  You can change role on element using `role` attribute. For example: anchor can behave as button by adding `button` role on it. To know all roles of element, refer link: https://www.w3.org/TR/html-aria/#docconformance

## getByRole

It returns element by role. For example:
`import {screen} from @testing-library/react
...
const textElement = screen.getByRole('textbox')
`
It throws error if more than 1 element returned with same role. In order to get specific element, it provide 2 options:

- name: It either takes label of form element, button text, or value of aria-label attribute.
- level: It specify level used specially in case of h1-h6\
- hidden
- selected
- checked
- pressed

It has highest priority in terms of usage. Priority:1

## getByLabelText

It returns element by labels. In case of conflicting labels, it offers option `selector` that takes html element type to resolve the conflict. It throws error if more than one element with same label returns(in case of conflict). It consider label of form element or aria-label value, but not text between any element(even not button)

It has second highest priority in terms of usage. Priority:2

## getByPlaceholderText

Can be used with elements where placeholder can be defined. It has third highest priority in terms of usage. Priority:3

## getByText

Use to get element by text content. For ex: `<p>Hello</p>`, text content is `Hello`. Priority:4

## getByDisplayValue

Use to get form element by initial value. For ex: `<input value="Hello">`, so display value is `Hello`. Priority:5

## getByAltText

Can be use with elements that support `alt` attribute. For ex: `input`, `img`, `area` elements. Get element by Alt text. Priority:6

## getByTitle

Can be use with elements on which `title` attribute is applied. Get element by title attribute value. Priority:7

## getByTestId

It is last option to be used. It get element by their `data-testid` attribute value. Priority:8

## Get multiple elements

It follows same ordering as single element. Check Skills component for this test.

## Text Match

In `getByText` or `getAllByText` there are 3 kind of match:

- String Match: In this case either you match complete string like for `<p>Hello World</p>`, it can be `getByText("Hello World")`. This is full string match. Or it can be `getByText("llo Wor", {exact:false})` or `getByText("hello world", {exact:false})`.
- Regex Match: In this case it can be `getByText(/hello world/i)` or `getByText(/world/i)` or `getByText(/World/)` or `getByText(/^hello world$/i)`
- Custom Function or Callback that should return true or false: `getByText((content) => content.startsWith('Hello'))`

## queryBy...

We had seen getBy.. series, similarly we have queryBy.. series with same priority order. Disadvantage of getBy.. is that if you want to check for particular role element not exist in DOM, then getBy.. series will throw error, as it is unable to find element. queryBy.. However will return null, if not able to find element. And queryAllBy return empty array if not able to find match. It is helpful in negative testing. Let's say you want to fetch role not in the document such that `expect(element).not.toBeInTheDocument()`, code will fail before reaching this line with `getBy..` series. Here you have to use `queryBy..` series

## findBy...

This series is used for elements which appear or disappear from DOM after sometime. It returns promise that resolves after 1000ms by default. If there is one matching element, promise resolves otherwise rejected. Check FindBy component

## Manual Queries

Apart from `getBy...` & `getAllBy...`, `queryBy...` & `queryAllBy...`, `findBy...` & `findAllBy...`, you can also use DOM APIs to query component, but that is not recommended approach as:
`const {container} = render(<MyComponent />);
const foo = container.querySelector("[data-foo='bar']");`

## Debugging Unit Test

You can add `screen.debug()` like breakpoints in unit test. It is not exactly breakpoint, but it will result in showing DOM up to that point where `screen.debug()` is added.

Another way is, you can import `logRoles` from `@testing-library/react` and apply it as:
`const view = render(<MyComponent />);
logRoles(view.container);`
This will log all the present roles in the application.

## Testing Playground

You can use this chrome extension to inspect elements and get the best way to query them.

## user-event

It simulate full interaction which may fire multiple events and do additional check along the way. Such as for change event, its not only change event.. it involves focus and then change. so it take care of these things automatically. While fireEvent its counterpart present in testing library only take care of specific event which is fired without taking care of other interactions. Also user-event do some checks like if element is hidden or disabled, it will not trigger event for it, while fireEvent not do these checks.

user-event is not part of testing-library but a companion library

In CRA(create-react-app) user-event library is installed by default, however you may require to update version which can be done as `npm i @testing-library/user-event@latest`

## Pointer Interactions

To implement pointer interactions you use user-event library. APIs of user-event library are asynchronous. For Pointer interaction it provide convenience APIs such as .click(btn), .dblClick(btn), .tripleClick(btn) and for mouse movement: hover(obj) and unhover(obj). Convenience APIs are kind of wrapper over actual APIs to make it easy to call main functionality. Before calling this APIs .setup() function is required to call. Apart from convenience, there are low level pointer APIs too. pointer({keys:'\[MouseLeft\]'}) simulate left key press, similarly there are left right key press, right key press

## Keyboard Interaction

Again we use user-event library for it. There is only one convenience API i.e tab use to tab control. Other are utility APIs such as `type` to type in input box, `clear` to clear input box, `selectOptions` to select option from combobox, `deselectOptions` to de-select options, `upload` to upload file. We also have clipboard APIs such as `copy`, `cut`, `paste`. There is low level `keyboard` API for other use cases.For example `keyboard('foo')` translate to type f, then o and then o on keyboard.

## Testing Custom Hooks

In order to test custom hook we use `renderHook` function in place of `render` function. This function returns result property which is a reference element. Its .current property holds all what returned by hook.

## act

If you make changes in state, specially in custom hook, do in act imported from `@testing-library/react`. act ensures that all the changes are made to DOM before any assertion applied. It returns promise. With react testing library most of helpers are wrapped with act implicitly, but u may require at some place to include in explicitly. act can be used from react-dom/test-utils or `@testing-library/react`.

## Mock Function

We can create mock function using `jest.fn` and can then expect how many times this mock function called.

## MSW

To mock request, we use mock service worker. Read doc for proper explanation

## Static Analysis Testing

Process of verifying code meet certain expectation without running it.
Can help to verify type consistency, style, formatting, complexity of code, common mistakes and possible bugs
We can use Typescript, eslint, prettier, husky and lint-staged for it.

## Enzyme

- Always begin with shallow. Shallow does not render all the children components, just the first level, perfect to test in isolation a React component (without state)
- If componentDidMount or componentDidUpdate should be tested, use mount
- If you want to test component lifecycle and children behavior, use mount
- If you want to test children rendering with less overhead than mount and you are not interested in lifecycle methods, use render. Render is more a matter of testing the static JSX / HTML rendering of your application.
