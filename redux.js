const store={
    state:{
        count:0
    }
}// immutable js object on application level
function incrementAction{
    return {
        type : "INCREMENT"
    }
}
// each action determines what operation needs to be performed
function reducer(state , action){
    switch(action.type){
        case "INCREMENT" : return {
            count: state.count+1
        }
    }
}// performs action on store keys 
function dispatch(action){
    store.state=reducer(store.state,action);
}// whenever we need to call any action then first we need to call dispatch first
// dispatch takes the type of action and passes it to reducer
function getState(){
    return state.count;
}


// To use redux 
// 1] set up folder redux on inside src containing files store.ts , i.e. setup store
// 2] Inside root App component we encapsulate it with < Provider store= {store}> , by importing store.ts 
// 3] Setup slices,actions in component folder
// Slice carries state,reducers,extrareducers
// we use extrareducers when we have operations with multiple outcomes similar to switch - case depending on type of action
// reducers update the state
// we use extra reducers whenever we do an api calls

// actions are built on concept of promises , it has three stages pending , fullfilled , rejected
// each action has type and payload

// good practice is to store all api endpoints at application in endpoints.ts at global level
// we make api calls from any component using axios , async await in its action

// we trigger dispatch function in useEffect(){ dispatch(action())} inside any component , and this component can update state
// we can get value of any state in the store whenever it updates from store using getters and useAppSelector() hook

// we use reducers for operations that are guarrenteed to succeed

// arguments passed to action are called payload

// whenever wehave a lot of reducers then we combine them using combineReducers()
//  inbuilt redux function inside rootReducers.ts file in redux folder



// .some() is function that returns booleanvalue for arrays