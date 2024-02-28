# Explanation

DemoFetch component should return us a list of posts which have title and body as shown in code ln. 7

When the test suite runs it expects the above mentioned list of posts.
Not render the list will consequently fail the test.

In this Demo we won't entertain the possibility of manually populating the list.

Therefore we would have to fetch data from URL and hit the resource named ***post*** at URL ***https://dummyjson.com/***.

These have to fetched when we click on the button.

``` jsx
  <button onClick={listener}/>
```

Therefore we will attach a listener to the click event on button this listener would be a function which swithces a boolean flag from false to true which would indicate in the component to send the request to URL.

``` javascript
const listener = function () {
  setFlag(true)
}
```

1. This flag must be stored inside of a state because if a normal variable is usde react won't start the re-evaulation of the component.

``` javascript
// Do
const [flag, setFlag] = useState(false)

// Don't
let flag = false
```

2. We would also have a useEffect which has flag in it's dependancy array so that when the boolean flips only then the request would be sent.

NOTE : we must constraint the API call to when flag is true using an if check in the useEffect otherwise it will also send request for the false flag.

``` javascript
useEffect(() => {

  if(flag) {
    // send request
  }

}, [flag])
```

In the ```if``` statement we must save the output in a state as well. ref 1. and we want to trigger a re-evaluation when we receive the data.

Finally we just have to (if neccassary transform as well) feed the data to map it on list.
