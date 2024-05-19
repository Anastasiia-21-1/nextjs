import {getUsers} from "@/lib/api/user";

export default async function Page() {

    const users = await getUsers()
    console.log(users)

  return (
    <div>
      Root page
    </div>
  );
}
