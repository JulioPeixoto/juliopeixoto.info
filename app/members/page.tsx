import Link from "next/link";

export default function Members() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Members</h1>
        <h3>
            <a className="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline" href="members/member-1">Member 1</a>
        </h3>
        <h3>
            <a className="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline" href="/members/member-2">Member 2</a>
        </h3>
    </main>
  );
}