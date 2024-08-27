import { cookies } from "next/headers"

export default function Page() {
  const cookie = cookies();
  const name = cookie.get('name')?.value || 'taro';

  return (
    <div>Hello {name}</div>
  )
}
