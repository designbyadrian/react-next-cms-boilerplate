import { useSession } from 'next-auth/client';

export default function UserMenu() {
  const [session] = useSession();

  return session ? (
    <a className="block" href="/api/auth/signout">
      <img className="rounded-full h-8" src={session.user.image} />
    </a>
  ) : null;
}
