** Reactjs 🚀 Tasks **

                                    THEME TASK -1

- Created dark and ligt theme functionlaity with some styles using css used react icons (installed react icon library)
- Created Store installing @reduxjs/toolkit and react-redux library to maintained the state globally

          ---------------------------- Next ----------------------------------

                              SEARCH AND TOP RATED TASK -2

API SEARCH FUNCTIONALITY AND TOPRATED FUNTIONALITY
- Displayed data by api call and setuped store(@reduxjs/toolkit) maintined the state globally
- Implemented SearchFunctionality and TopRated Functionality
- Maintained Custoom Hooks for ApiCalling

           ---------------------------- Next ----------------------------------

                                    TODO LIST TASK -3

- Created Todo list which add tasks and delete them
- maintined the state globally (@reduxjs/toolkit)

          ---------------------------- Next ----------------------------------

                          REDUX TOOLKIT ASYNTHUNK (FOR API CALLS) -4

- Created cards by api call using reduxtoolkit AsyncThunk
- Concepts Learned and implemented :

  1.  CreateAsyncThunk - For Apicalling(We call Api or Fetch data in this Method which we export for all components,
      Syntax:
      const FetchData = CreateAsyncThunk( "userDefinedNames" , "function"- which performs async operations )
      )
  2.  ExtraReducers - For actions and state changing(through reducers)
  3.  builder - builder is an object that returns the result of the async data done in CreatAsyncThunk
  4.  addCase() is a function that accepts the pending , fullfilled , rejected of data returns from AsynThunk .

            ---------------------------- Next ----------------------------------

                              DARK THEME USING USEMEMO HOOK - 5

1.  Created darkTheme using useMemo hook and ContextApi
2.  Why useMemo ? - When using Inline or internal styles in reactComponent , The styles will get created when every time component re-renders, This is not a good way to do (Becuase the Performance of the application will not be good)
3.  Using useMemo Hook will stops the unNecessary re-renders unitl the user changes the theme chage
4.  While we using large Scale applications using external styles sheets(CSS) will automaticaly takes the responsibility of optimaization of application by browser in case of css styles , But in case of inline and internal styles of css it wont

              ---------------------------- Next ----------------------------------
