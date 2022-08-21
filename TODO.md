TODO

the When the Login form is submitted, it sees if the email and password is correct, if so it will then
go to the AccountBookshelf page.

on the Account Bookshelf Page, useEffect is used to call getUser() which then gets the user by the userId
I originally stored the userId in a cookie, and then passed this to the axios request but it did not work
even though it did work on insomnia

so need to create a new way to get the userId from the logIn modal to the AccountBookshelf page but I dont know yet. can use
navigate to pass props.

I think need to just do parameters not JSON objects for qhole request bodies.

do react testing... i think will make debugging easier.

TODO

find out if parameters are better than body parameters
test always on insomnia first
then code it in axios.

TODO

does calling an asynchronous function need to be called in another asynchronous function?
