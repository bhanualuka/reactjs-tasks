** Reactjs 🚀 Tasks **

THEME TASK

- Created dark and ligt theme functionlaity with some styles using css used react icons (installed react icon library)
- Created Store installing @reduxjs/toolkit and react-redux library to maintained the state globally

  SEARCH AND TOP RATED TASK

* API SEARCH FUNCTIONALITY AND TOPRATED FUNTIONALITY

- Displayed data by api call and setuped store(@reduxjs/toolkit) maintined the state globally
- Implemented SearchFunctionality and TopRated Functionality
- Maintained Custoom Hooks for ApiCalling

  TODO LIST TASK

- Created Todo list which add tasks and delete them
- maintined the state globally (@reduxjs/toolkit)

  REDUX TOOLKIT ASYNTHUNK (FOR API CALLS)

- Created cards by api call using reduxtoolkit AsyncThunk
- Concepts Learned and implemented :
  1.  CreateAsyncThunk - For Apicalling(We call Api or Fetch data in this Method which we export for all components,
      Syntax:
       const FetchData = CreateAsyncThunk( "userDefinedNames" , "function"- which performs async operations )
      )
  2.  ExtraReducers - For actions and state changing(through reducers)
  3.  builder - builder is an object that returns the result of the async data done in CreatAsyncThunk 
  4. addCase() is a function that accepts the pending , fullfilled , rejected  of data returns from AsynThunk .
