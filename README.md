** Reactjs 🚀 Tasks **

                                    THEME TASK -1

1.  Created dark and ligt theme functionlaity with some styles using css used react icons (installed react icon library)
2.  Created Store installing @reduxjs/toolkit and react-redux library to maintained the state globally

         ---------------------------- Task-1 Completed ----------------------------------

                              SEARCH AND TOP RATED TASK -2

                     API SEARCH FUNCTIONALITY AND TOPRATED FUNTIONALITY

3.  Displayed data by api call and setuped store(@reduxjs/toolkit) maintined the state globally
4.  Implemented SearchFunctionality and TopRated Functionality
5.  Maintained Custoom Hooks for ApiCalling

          ---------------------------- Task-2 Completed ----------------------------------

                                    TODO LIST TASK -3

6.  Created Todo list which add tasks and delete them
7.  maintined the state globally (@reduxjs/toolkit)

    ---------------------------- Task-3 Completed ----------------------------------

                          REDUX TOOLKIT ASYNTHUNK (FOR API CALLS) -4

8.  Created cards by api call using reduxtoolkit AsyncThunk
9.  Concepts Learned and implemented :

10. CreateAsyncThunk - For Apicalling(We call Api or Fetch data in this Method which we export for all components,
    Syntax:
    const FetchData = CreateAsyncThunk( "userDefinedNames" , "function"- which performs async operations )
    )
11. ExtraReducers - For actions and state changing(through reducers)
12. builder - builder is an object that returns the result of the async data done in CreatAsyncThunk
13. addCase() is a function that accepts the pending , fullfilled , rejected of data returns from AsynThunk .

         ---------------------------- Task-4 Completed ----------------------------------

                            DARK THEME USING USEMEMO HOOK - 5

14. Created darkTheme using useMemo hook and ContextApi
15. Why useMemo ? - When using Inline or internal styles in reactComponent , The styles will get created when every time component re-renders, This is not a good way to do (Becuase the Performance of the application will not be good)
16. Using useMemo Hook will stops the unNecessary re-renders unitl the user changes the theme chage
17. While we using large Scale applications using external styles sheets(CSS) will automaticaly takes the responsibility of optimaization of application by browser in case of css styles , But in case of inline and internal styles of css it wont

    ---------------------------- Task-5 Completed ----------------------------------

                                       Star Rating Task - 6

18. Developed Real time Star Rating feature
19. using Hooks , Array methods , Conditional Statements and css for styling

    ---------------------------- Task-6 Completed ----------------------------------

                                      Shuffling Items Task - 7

20. Created Shuffling items feature
21. implemented Fisher-Yates-Shuffling-Algorithm to create feature

    ---------------------------- Task-7 Completed ----------------------------------

                             Input ApiCalling Task -8

22. Fetching data through usergiven data from input box
23. created input box , which takes id When user enter and submit the id it triggers an apicall and dispalys that partiucalr id data in the browser

         ---------------------------- Task-8 Completed ----------------------------------
                                CheckBoxShuffling Items Task - 9

24. Displayed Two lists one is checkbox list another one is normal list with a suffle Check Items button
25. when user checks the list1 items and clicks the suffle Check Item button it swaps the list one checked items to list two items
26. used useState and map method to Store and display the list items
