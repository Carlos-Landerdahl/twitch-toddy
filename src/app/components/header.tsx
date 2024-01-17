import Link from 'next/link'
import { BsArrowUpRight, BsTwitch } from 'react-icons/bs'

export default function Header() {
  return (
    <nav className="px-2 border-b border-border2 sm:px-3 fixed z-[100] bg-bgBlack w-full">
      <div className="h-[60px] max-w-7xl justify-center gap-2 m-auto flex px-1 items-center bg-transparent text-textHover">
        <section className="flex pr-2  items-center sm:justify-normal sm:w-full">
          <Link href="/" className="text-xl font-bold">
            TodynnPJL
          </Link>
        </section>
        <section className="flex justify-center gap-3 items-center sm:justify-end">
          <ul className="flex gap-6 text-sm items-center font-bold">
            <li className="text-headerLink hover:text-textHover transition ease-in-out">
              <Link
                href="https://www.twitch.tv/todynnpjl"
                className="flex gap-1"
              >
                Gravações <BsArrowUpRight size={10} />
              </Link>
            </li>
            <li className="text-white bg-twitchBg rounded p-2 hover:bg-twitchBg/80 transition-all ease-in-out">
              <Link
                href="https://www.twitch.tv/todynnpjl"
                className="flex items-center gap-1"
              >
                Twitch <BsTwitch size={15} />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  )
}
