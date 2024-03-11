import { headers } from "next/headers";
import Link from "next/link";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/best-practices">all posts</Link>
      </p>
    </div>
  );
}
