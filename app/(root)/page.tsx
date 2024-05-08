import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

export default function Home() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();
  // Get the Backend API User object when you need access to the user's information
  const user = currentUser();
  if (userId) {
    console.log(user);
    return (
      <>
        <UserButton afterSignOutUrl="/" />
        <p>Hello man!</p>
      </>
    );
  }

  return (
    <div>
      <p>Hello Next.js!</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
