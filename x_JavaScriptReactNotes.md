# JavaScript Notes

- Notes taken from watching PedroTech YT channel.
- Used when you want to return any UI (html) elements from a function
- Requires fragments if you want more than one element type within a function.

## Functions

We can write it differently to JavaScript:

```
export const DoSomething = () => {
}
```

- Inside the brackets are any inputs to the function.
- The export is an optional part to add if you want to use the function inside another file.<br>

When using JSX, we can now return html elements:

```
export const MyComponent = () => {
  return <div></div>
}
```

You don't have to call a function with a name, these are known as anon functions. They are better used in if statements or other single use functions:

```
() => {
  return <div></div>
}
```

Sometimes we want to have inputs into functions. In this example, I want to click on a button which each send a different input into the function. Note that in order to do this, an anon function must be called within the onClick input.

```
function App() {

  const fetchExcuse = (excuse) => {
    console.log(`I want to request a ${excuse} type of excuse)
    };


  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>
    </div>
  );
}

```

## If Statements

The basics:

if age>20 the name is pedro:
`let name = age > 20 && "Pedro";`

if else:
`let name = age > 20 ? "Pedro" : "Jack"`

One example of that in use:

```
const Component = () => {
  return age > 20 ? <div> Pedro </div> : <div>Jack</div>
};
```

Another example of an if statement being used:

```
function App() {
  const x = false
  return (
    <>
      <h1> Is the gate open? {x ? 'yes' : 'no'}</h1>
    </>
  )}
```

This reads as: <br>
`x ?` if the variable x is true <br>
`'yes'` then return 'yes' <br>
`: 'no'` else return 'no'

Therefore in the example above we get: 'Is the gate open? No'

We can extend this to styling:

```
function App() {
  const isGreen = true;

  return className="App">
  <h1 style={{ color: isGreen ? "green" : "red"}}>
  THIS TEXT CHANGES COLOUR
  </h1>
}
```

## Objects

```
const person = {
  name: "Pedro",
  age: 20,
  isMarried: false,
};
```

We can add to this list using a spread operator (...). In this example,we keep everything from the person object via the spread operator, but the name is now Jack:<br>
`const person2 = {...person, name:"Jack"};`

To add a new name to a list of names:

```
const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];
```

## Map

The same as a 'for each' in python for an array of data. Therefore below it is doing this: 'for each element within the array, execute this function'

```
names.map((name) => {
  return name + "1";
});
```

which will return `name = ["Pedro1", "Jack1", "Jessica1"];`

If you want to generate a new header for each object within the list, we can do the following
(Note this is great for repeating certain repetitive elements):

```
names.map((name) => {
  return <h1> {name} </h1>
})
```

## Filter

As it says, you will decide to remove or keep certain objects from an array:

```
let names = ["Pedro", "Jack", "Jessica", "Pedro", "Pedro"];

names.filter((name) => {
  return name !== "Pedro"
})
```

This means that return all the names in the array which are not Pedro: `["Jack", "Jessica"]`

## Components

Needs to be a capital at the start of the name:

```
const User = () => {
  return (
    <h1> My username is Hazza </h1>
  )
}
```

Which can now be called within the app:

```
function App() {
  return (
    <div className="UserStyling">
      <User />
    </div>
  )
}
```

We can store this component in a separate jsx file called User.jsx. Note its recommended to keep these within another folder called 'components'
<br> Within that file we can use the same code in addition to the line `export default User` at the end.
<br> To bring this into the main Js code, we need to add this code to the start: `import User from "./components/User";`

## Props

If we want to use a component like a template which we input arguments into, we input what are known as props.

```
function App() {
  return (
    div className="UserStyling">
      <User name="Hazza" age="25" />
    </div>
  )
}

const User = (props) => {
  return (
    <h1> My username is {props.name} and I'm {props.age} </h1>
  )
}
```

The reason why it is props.name is because when we call the User component within the App, it returns an object called props:

```
const props = {
  name: Hazza,
  age: 25
}
```

## UseState (hook)

Can be seen as a varaible which holds data `const [] = useState()` where within the square brackets you store a variable and a function, and normal brackets is the initial value of the variable. The example below is a button which upon clicking will increase the age by 1. Without UseState, the page is rendered once and as the variable changes, it is not rendered:

```
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0)

  const increaseAge = () =>{
    setAge(age + 1)
  };

  return (
    <button onClick={increaseAge}>
      Increase Age
    </button>
  );
}
```

Here, the useState will check if the value of age changes at all and rerender the whole App if so. The function can even be as simple as setting a value to be e.g. 5 `setAge(5)`

### Used for live updating text

A more complex example would be having a text box which updates what text you've typed in below it as you type.

```
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}
```

### Used for Show/Hide buttons

In this code on the text input line of code, we call the 'handleInputChange' function everytime it detects any change to the input. Note that `{showText === true && <h1> Hi I'm Hazza </h1>}` is actually the same as `{showText && <h1> Hi I'm Hazza </h1>}`, as the `=== true` is not required for booleon.

```
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true)

  return (
    <div className="App">

      <button
      onClick={() => {
        setShowText(!showText);
      }}>
        Show/Hide
      </button>

      {showText === true && <h1> Hi I'm Hazza </h1>}
    </div>
  );
}
```

## React Lifecycles

### Stages

- Mounting - component appears
- updating - depending on if a e.g. prop or state changes
- unmounting - component stop appearing

## UseEffect (hook)

Used to control what happens depending what stage the component is within its life cycle.

**Mounted**

```
useEffect(() => {
  console.log("component mounted")
  }, []);
```

**Updated**

```
const [text, setText] = useState(");

useEffect(() => {
  console.log("component mounted/updated")
}, [text]);
```

**Unmounted**

```
useEffect(() => {
  console.log("component mounted")

  return () => {
    console.log("component unmounted")
  }
}, [])
```

Example:

We can use useEffect to call data from an API. Note that its recommended to install axios as a cleaner way to fetch data. `npm install axios`

```
import { useEffect, useState } from "react";

function App() {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}
```

## React Router Dom

We only have 1 html file for the whole site, so react router doms is used to only change a specific portion of the website/app.

Requires installing the libraries, using `npm install react-router-dom` and then importing into the App.js using `import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'`.

- **BrowerRouter** - Defines where in our app we want to have different routes
- **Routes** - encompases routes or elements which are unique to each route, everything outside of the routes will display on every webpage
- **Route** - self closing, to define every route (e.g. www.apple.com/iOS, iOS is the route) we have on the site/app
- **Link** - used for navbars, to click on in order to visit different routes of the site

E.g.

```
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
...

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> page not found </h1>} />
        </Routes>
      </Router>
    </div>
  );
}
```

### Buttons to navigate

If you want to use buttons to navigate to different pages, we need to use the useNavigate feature. For this to work, we need to create a navigate variable :

```
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>This is the Menu page</h1>
      <button onClick={() => {
        navigate("/")
      }}>Return to home</button>
    </>
  );
};

```

### Using parenthesis to have more page levels

The example of why you might need this is if you have multiple users each having their own profile, then you would expect the url for each person, in this case 'Harry', to be `https://websiteurl.com/profile/Harry`

Within the main app we will update the path accordingly:

```
<Route path="/profile/:username" element={<Profile /> } />
```

Then within the profile.js, we can do the following:

```
import { useParams } from "react-router-dom";

export const Profile = () => {
  let { username } = useParams();
  return <h1>This is the profile page for {username}</h1>;
};
```

## State Management

Used to avoid state drilling (where if we have components within components within components, we would have to pass the props through every single component if its to reach the bottom component, which is not ideal).

### CreateContext Hook - usecase of changing the username to be updated site wide

To avoid this, we use `import { createContext } from "react"`

Within our main code we can create a function which stores the values for us, which can be accessed by any Route within the `<AppContext.Provider> </AppContext.Provider>`

```
...

import { createContext } from "react"

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("HazzaMore");
  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Routes>
            <Route ...>
            <Route ...>
            <Route ...>
          </Routes>
        </Router>
    </AppContext.Provider>
  )
}
```

In order for each route to access this information, they need to inport the function created `AppContext`:

```
import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react"
import { AppContext } from "../App"

export const Profile = () => {
  const {username} = useContext(AppContext)
  return (
    <div>
      This is the profile page for {username} 
      <ChangeProfile />
    </div>
  );
};
```

Notice here how we no longer need to input any props into the input of the Profile function nor pass them through into the ChangeProfile object (which otherwise would have looked like `<ChangeProfile username={props.setUsername}/>`). <br> We just list what we need using this e.g. <br> `const {username, setUsername, age, ...} = useContext(AppContext)`

## React Query

How to get around the `<React.Strictmode>` causing extra fetches for API calling, but also is a much better way for fetching data. Requires installing using `npm install @tanstack/react-query`.

There are 4 functions to call in:
* **data**- calls the data from the api, use `data: DataName` to call the data what you want. <br> When called, the use of `?` ensures it only calls if the data isn't null, to stop it from breaking.
* **isLoading** - This will be what is returned instead of the main return when the data from the api is being called
* **isError**- Any issue connecting with the api, this will be returned instead of the main return
* **refetch** - use this to force the api to be called again

Here is how the code will look inside a page:

```
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
    const {data: catData, isLoading, isError, refetch} = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const res = await axios.get("https://catfact.ninja/fact");
      return res.data;
    },
  });

    if (isError) {
    return <h1> Sorry, there was an error</h1>;
  }

  if (isLoading) {
    return <h1> Loading ... </h1>;
  }

  return (
    <p> {catData?.fact} </p>;
    <button onClick={refetch}>New Cat Fact</button>
  )
}
```

Within App.js we will need:

```
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
...

function App() {
  const client = new QueryClient({
    defaultOptions: {
      // if you don't want the api to be refetched when you tab in and out
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        ... // All other content
      </QueryClientProvider>
    </div>
  );
}
```

## Forms

Requires us to install from 2 libraries (3 downloads):<br>
`npm install react-hook-form yup @hookform/resolvers`

Here is the basics of how a Form.js will look:

```
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required"),
    email: yup.string().email().required()
  });

    const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema), // telling react-hook-form what the yup format is
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="submit" />
    </form>
  )
}
```

* The schema is the requirements of the data within an object, using yup to constrain the values inputted

* **register** - imported in order to tell what object name the inputted text is saved against
* **handleSubmit** - input into this the function you defined to be run upon submitting the form
* **formState: { errors }** - Allows for displaying any errors when the input is not to the schema's requirements

## Custom Hooks
They are required to be titled like `useHookname.js`, and can be imported and used to run reusable logic. A good example of this is the toggle visiblilty logic. To avoid retyping the same if statements and setStates, we can make a new file which includes all that.

```
import { useState } from "react";

export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};
```

This is then imported into the App. We can use any name for the variables/functions imported in, in this case we are replacing `[state, toggle]` with `[isVisible, toggle]`. The unique name means we can use different names for each element that wants to individually be toggled.

```
import { useToggle } from "./useToggle";

function App() {
  const [isVisible, toggle] = useToggle();

  return (
  <div className="App">
    <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
    {isVisible && <h1> Hidden text</h1>}
  );
};
```

## React Type Safety (Only if using Js instead of Jsx)
Requires us to install prop-types: <br>
`npm install prop-types`

If any data is inputted incorrectly e.g. `age = "giraffe"`, you will get a console error but it won't break the whole app/site unlike before.

## Async, Await ~~and Fetch~~

# TypeScript Notes

## Defining types
Initial setup is: `npx create-react-app . --template typescript`

Requires an interface within a component (e.g. the component 'Person.tsx'), which describes the shape of an object. For typescript, we put that the `props` is of type `Props` via: <br>
 `export const Person = (props: Props) => {...}`.<br> Now when you input the values inside the App, it will give you red squiggly lines to say its the wrong type if so. 
 
 An example in Person.tsx is:

```
interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
}

export const Person = (props: Props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>

      ...

    </div>
  );
};
```

### Limiting a variables outputs to a set number of options

To limit the ouputs we need to create what is called an 'enum' within the component (Person.tsx).

```
interface Props {
  country: Country;
}

export enum Country {
  UnitedKingdom = "United Kingdom",
  Canada = "Canada",
  USA = "USA",
}
```

Now within the main app, we input the country value via this:

```
import { Person, Country } from "./components/Person";

function App() {
  return (
  <div className="App">
    <Person
    country={Country.UnitedKingdom}
  )
}
```

## Redux Toolkit - rewatch to make notes

Requires two libraries: <br>
`npm install @reduxjs/toolkit react-redux`

### Store

Within a store there is a reducer, which is a function which takes in two arguments:

1. an action
0. the previous state of the application

The reducer will then return a new state based on those two things. Aka a function which describes how our states interact with each other.

A reducer will come from a slice, which is a way for redux toolkit to automatically generate all the diferent parts of the reducer.
```
reducers: {
  login: (state, action) => {}
}
```



# PredroTech Firebase Social Media App

required installs
* `npm install react-firebase-hooks`
* `npm install react-hook-form yup @hookform/resolvers`



addDoc - its a new entry within the collection

## within firebase
* 
* We need to set the rules of who can write data, by default its: `allow read, write: if false;`
<br> 
Therefore you can write, delete and update if you are both authenticated and you have the same userID as the person making the post <br>
 `write, delete, update: if request.auth != null && request.auth.uid == request.resource.data.userId;` <br>
and you must be authenticated only to read a post: <br>
`allow read: if request.auth != null`
* When you are ready to deploy, go onto the hosting menu. When setting up using the CLI, make sure that you set the public directory to 'build'