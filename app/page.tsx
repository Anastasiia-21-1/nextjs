import {getUserSession} from "@/prisma/auth";

export default async function Page() {

    const session = await getUserSession()

    // const users = await getUsers()
    // console.log(users)


    // useEffect(() => {
        // fetch('/api/users')
        // fetch('/api/users/0')
        // fetch('/api/users/', {
        //     method: 'POST',
        //     body: JSON.stringify({name: 'testName', password: 'password', email: 'testasd@test.com'})
        // })
        // fetch('/api/users/0', {
        //     method: 'PATCH',
        //     body: JSON.stringify({name: 'testName', password: 'password', email: 'testasd@test.com'})
        // })
        // fetch('/api/users/0', {method: 'DELETE'})
    // }, [])

    // const getUserById = await fetch('/api/users/')


    return (
        <div>
            Root page
            {JSON.stringify(session)}
        </div>
    );
}
