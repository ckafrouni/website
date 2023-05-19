import Image from 'next/image'

export default function Home() {
    return (
        <main className="grid min-h-screen place-content-center bg-black text-center text-white">
            <div>
                <Image
                    className="relative drop-shadow-[-10px_10px_0.2rem_#ffffff40] invert"
                    src="/cdl.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>
        </main>
    )
}
